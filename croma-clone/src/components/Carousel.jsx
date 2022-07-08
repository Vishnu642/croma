import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1657128601/Croma%20Assets/CMS/LP%20Page%20Banners/2022/07072022/HP_Goodlifefest_6july_01_qgbtjr.png/mxw_1440,f_auto" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1656956552/Croma%20Assets/CMS/LP%20Page%20Banners/2022/Bank%20cashback/05072022/HP_Income-ingPayDay_ICICI_4July2022_rseq0f.png/mxw_1440,f_auto" onDragStart={handleDragStart} role="presentation" />,
  <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1657128601/Croma%20Assets/CMS/LP%20Page%20Banners/2022/07072022/HP_BTS_6July2022_01_jp9lmm.png/mxw_1440,f_auto" onDragStart={handleDragStart} role="presentation" />,
];

export const Gallery = () => {
  return (
    <AliceCarousel  mouseTracking items={items} />
  );
}