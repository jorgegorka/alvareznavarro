import React from 'react'

import randomImage from '../utils/random-image'

const PostImage = ({ isCard, image }) => {
  let imageClass = 'post-full-image'
  if (isCard) imageClass = 'post-card-image'

  let imagePath = ''
  if (image) {
    imagePath = image
  } else {
    imagePath = randomImage()
  }

  return (
    <figure
      className={imageClass}
      style={{ backgroundImage: `url(${imagePath})` }}
    />
  )
}

export default PostImage
