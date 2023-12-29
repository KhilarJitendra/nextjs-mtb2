'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: 'http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2Fmtb2_24eeb63dc1.jpg&w=3840&q=75',
  },
  {
    url: 'http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2Fmtb2_24eeb63dc1.jpg&w=3840&q=75',
  },
  //Second image url
  {
    url: 'http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2Fmtb2_24eeb63dc1.jpg&w=3840&q=75',
  },
  //Third image url
  {
    url: 'http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2Fmtb2_24eeb63dc1.jpg&w=3840&q=75',
  },

  //Fourth image url

  {
    url: 'http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2Fmtb2_24eeb63dc1.jpg&w=3840&q=75',
  },
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
