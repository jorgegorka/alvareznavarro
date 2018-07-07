import random1 from '../components/images/random/1.jpg'
import random2 from '../components/images/random/2.jpg'
import random3 from '../components/images/random/3.jpg'
import random4 from '../components/images/random/4.jpg'
import random5 from '../components/images/random/5.jpg'
import random6 from '../components/images/random/6.jpg'
import random7 from '../components/images/random/7.jpg'

const RandomImage = () => {
  const imageId = Math.floor(Math.random() * 7) + 1

  switch (imageId) {
  case 1:
    return random1;
    break;
  case 2:
    return random2;
    break;
  case 3:
    return random3;
    break;
  case 4:
    return random4;
    break;
  case 5:
    return random5;
    break;
  case 6:
    return random6;
    break;
  case 7:
    return random7;
    break;
  default:
    return random1;
  }
}

export default RandomImage
