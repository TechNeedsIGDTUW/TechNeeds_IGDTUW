import React from "react";
import './Event.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Slider from './Slider.js';
import 'swiper/css/navigation';
import Wave from "react-wavify";
import { Navigation, Pagination,EffectCoverflow} from 'swiper/modules';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import IonIcon from '@reacticons/ionicons';

import slide_image_1 from '../../assets/innovortex.png';
import slide_image_2 from '../../assets/Azure.png';
import slide_image_3 from '../../assets/Break.png';
import slide_image_4 from '../../assets/11dayscode.png';
import slide_image_5 from '../../assets/AR-VR.png';
import slide_image_6 from '../../assets/MLSA.png';
import slide_image_7 from '../../assets/OA.png';
import slide_image_8 from '../../assets/Git.png';
import slide_image_9 from '../../assets/sssc.jpg';
import slide_image_10 from '../../assets/Doubt.png';
const Event=()=>{
    // const [menu,setMenu]=useState("sponsor");

    return <div className="container">
        <div className="Main">
          {/* <div className="mid">
            <div id='btn1'onClick={()=>setMenu('sponsor')} className={menu===""?"active":""}>
                sponsor
            </div>
            <div id='btn1'onClick={()=>setMenu('featured')} className={menu==="featured"?"active":""}>
                Featured Partners
            </div>
            <div id='btn1'onClick={()=>setMenu('in')} className={menu==="in"?"active":""}>
                In-kind Partners
            </div>
        </div> */}
        <div className="main-content">
        <Wave
          fill="#5a9be6"
          paused={false}
          options={{
            height:80,
            amplitude:80,
            speed:0.2,
            points:4,
          }}
          />
          <div className="box1">
            TechNeeds
            <span>presents</span>
          </div>
        </div>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <IonIcon name="arrow-back-outline" className="arrow"></IonIcon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <IonIcon name="arrow-forward-outline" className="arrow"></IonIcon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
        </div>
        <Slider/>
    </div>;
};

export default Event;

// Event drive link :
// https://docs.google.com/spreadsheets/d/1NroMtF7Lmrw9biKSN7nf52Y7lOvDUuuVCpwXhzSCvu8/edit?gid=0#gid=0