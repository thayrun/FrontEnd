import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.css';

// Importando imagens
import image1 from '../../assets/images/slide/2.svg'
import image2 from '../../assets/images/slide/3.svg';
import image3 from '../../assets/images/slide/4.svg';
import image4 from '../../assets/images/slide/5.svg'


// Importando Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function ImageSlide() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={false}
                pagination={true}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{ delay: 4000, disableOnInteraction: false }} // Configuração de autoplay
            >
                <SwiperSlide>
                    <img src={image1} alt="Slide 1" className=''/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="Slide 2" className=''/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="Slide 3" className=''/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="Slide 4" />
                </SwiperSlide>
                {/* Adicionar mais imagens */}
            </Swiper>
        </>
    );
}