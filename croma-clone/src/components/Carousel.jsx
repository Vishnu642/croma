import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991658/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/Phone_qhq1wa.png/mxw_1440,f_auto"   onDragStart={handleDragStart} role="presentation" />,
  <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1650991658/Croma%20Assets/CMS/Homepage%20Banners/Category%20Navigation/Phone_qhq1wa.png/mxw_1440,f_auto" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];

 export const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}