import React from 'react'

import randomImage from '../utils/random-image';

const PostImage = (props) => {
  let imageClass = 'post-full-image';
  if (props.isCard)
    imageClass = 'post-card-image';

  let imagePath = '';
  if (props.image) {
    imagePath = this.props.image
  } else {
    imagePath = randomImage();
  }

  return(
    <figure className={ imageClass } style = {{ backgroundImage: `url(${imagePath})` }} >
    </figure>
  )
}

export default PostImage
