import image1 from './Halloween-image1'
import image2 from './Halloween-image2'
import image3 from './Halloween-image3'     
const heroPhoto = (width, height, invert, alt) => {
  const photos = [
    image1(width, height, invert, alt),
    image2(width, height, invert, alt),
    image3(width, height, invert, alt)
  ];
  return photos[Math.floor(Math.random() * photos.length)];
};

export default heroPhoto


