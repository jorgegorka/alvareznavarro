---
title: "attachment_fu s3 uploads with backgroundjob"
date: '2008-07-17T02:22:00+00:00'
slug: '/blog/2008/07/attachment_fu-s3-uploads-with-backgroundjob'
tags: ["files", "Internet", "rails", "uploads"]
category: 'Desarrollo Web'
excerpt: "Thanks to Jon Guymon for his article [bj-makes-attachment\_fu-happy]( that really help me solve a problem I was having with mongrel.Atta..."
---
Thanks to Jon Guymon for his article [bj-makes-attachment\_fu-happy](http://blarg.slackworks.com/posts/bj-makes-attachment_fu-happy) that really help me solve a problem I was having with mongrel.

Attachment\_fu + s3 sometimes do very weird things that makes mongrel to freeze. After a lot of googling I realize that the best solution to avoid problems was to do the uploads to S3 in a background proccess apart from mongrel.

I started with Jon Guymon approach and it worked well but i needed to create thumbnails and the local files to be deleted after the uploading to S3 was finished.

Just changing the part of attachment\_fu that actually uploads the file to S3 do the trick.

Open vendor/plugins/attachment\_fu/lib/technoweenie/attachment\_fu/backends/s3\_backend.rb and change the method save\_to\_storage to background the uploads.

This is the original method:

`
def save_to_storage
   if save_attachment?
     S3Object.store(
     full_filename,
     (temp_path ? File.open(temp_path) : temp_data),
     bucket_name,
     :content_type => content_type,
     :access => attachment_options[:s3_access]
     )
     @old_filename = nil
     true
   end
end
`

In my version I copy the file to a temporary directory in tmp/s3uploads (just to make sure the file does not disappear) then I add the upload task to the background queue

`
def save_to_storage
   if save_attachment?
    my_temp_file = RAILS_ROOT+'/tmp/s3uploading/'+"#{rand Time.now.to_i}#{filename || 'attachment'}"`

 if temp\_path  
 File.open(my\_temp\_file,"w+") do |tmp|  
 tmp.close  
 FileUtils.cp temp\_path, tmp.path  
 end  
 else  
 File.open(my\_temp\_file, "w+") do |tmp|  
 tmp.binmode  
 tmp.write temp\_data  
 tmp.close  
 end  
 fichero = RAILS\_ROOT+'/tmp/s3uploading/' + "#{rand Time.now.to\_i}#{filename || 'attachment'}"  
 end  
   
 Bj.submit("./script/runner ./jobs/s3\_uploader.rb " +  
 full\_filename + " " +  
 my\_temp\_file + " " +  
 bucket\_name + " " +  
 content\_type + " " +  
 attachment\_options[:s3\_access].to\_s  
 )  
 end

 @old\_filename = nil  
 true  
end

This way attachment\_fu will spawn a task for every file it creates.

Now edit the file Jon Guymon created to handle the upload (jobs/s3\_uploader.rb)

This is how my file looks like

`
Base.establish_connection!(:access_key_id => ACCESS_KEY,
                           :secret_access_key => SECRET_KEY)`

S3Object.store(ARGV[0],  
 File.open(ARGV[1]),  
 ARGV[2],  
 :content\_type =\> ARGV[3],  
 :access =\> ARGV[4]  
 )

File.delete(ARGV[1])

A simple upload to S3 and after finishing it I delete the temporary file created in tmp/s3uploads/

So far mongrel is doing its job with no more hangs and as a side effect users can uploads their files faster.

There are a lot of pages about backgrounding tasks and a good recipe in Rails recipes 2

