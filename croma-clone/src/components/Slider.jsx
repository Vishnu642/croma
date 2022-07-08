import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const DemoCarousel=()=>{

        return (
            <Carousel interval="2000" showIndicators="false" infiniteLoop="true" showThumbs={false} autoPlay="true" >
                <div>
                    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1657128601/Croma%20Assets/CMS/LP%20Page%20Banners/2022/07072022/HP_Goodlifefest_6july_01_qgbtjr.png/mxw_1440,f_auto" />
        
                </div>
                <div>
                    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1656956552/Croma%20Assets/CMS/LP%20Page%20Banners/2022/Bank%20cashback/05072022/HP_Income-ingPayDay_ICICI_4July2022_rseq0f.png/mxw_1440,f_auto" />
            
                </div>
                <div>
                    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1657128601/Croma%20Assets/CMS/LP%20Page%20Banners/2022/07072022/HP_BTS_6July2022_01_jp9lmm.png/mxw_1440,f_auto" />
                
                </div>
            </Carousel>
        );
    
}
