import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { assets } from '../../assets/assets'; // Adjust the path as needed
import './Gallery.css'; // Optional: for custom styling

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const images = [
    assets.large,
    assets.out,
    assets.room1,
    assets.recep,
    assets.service,
    assets.small,
    assets.mithonDam,
    assets.ayodhya,
    assets.gallery,
    assets.baranti,
    assets.flower,
    assets.header,
    assets.palash,
  ];

  return (
    <div className="gallery-container" id='gallery'>
    <h2 className="gallery_title">Gallery</h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
