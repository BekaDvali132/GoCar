import "./CarPage.scss";
import Camry from "../resources/camry.jpeg";
import { A11y, Controller, Navigation } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { useLayoutEffect, useRef } from "react";
import 'swiper/css/effect-cards'
import { useState } from "react";
import CarPreviewImage from "./CarPreviewImage";
import { useEffect } from "react";


function CarPage() {

  const [activeSlide,setActiveSlide] = useState(0)

  const previewRef = useRef(null)

  const [swiper, setSwiper] = useState(null);


  useEffect(()=>{
    if (swiper) {
      swiper.slideTo(activeSlide)
    }
  },[activeSlide])
  return (
    <section>
      <div className="swipers">
        <Swiper
          
          modules={[Controller, Navigation, A11y]}
          navigation
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={e=>setActiveSlide(e.activeIndex)}
          
        >
          <SwiperSlide key={0}>
            <img src={Camry} alt="slide" width={1364} height={740} />
          </SwiperSlide>
          <SwiperSlide key={1} >
            <img src={Camry} alt="slide" width={1364} height={740} />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <img src={Camry} alt="slide" width={1364} height={740} />
          </SwiperSlide>
          <SwiperSlide key={3} >
            <img src={Camry} alt="slide" width={1364} height={740} />
          </SwiperSlide>
          <SwiperSlide key={4} >
            <img src={Camry} alt="slide" width={1364} height={740} />
          </SwiperSlide>
        </Swiper>

        <div className="preview-slider" ref={previewRef}>
          <CarPreviewImage image={Camry} activeKey={0} activeSlide={activeSlide} setActiveSlide={setActiveSlide} mainRef={previewRef}/>
          <CarPreviewImage image={Camry} activeKey={1} activeSlide={activeSlide} setActiveSlide={setActiveSlide} mainRef={previewRef}/>
          <CarPreviewImage image={Camry} activeKey={2} activeSlide={activeSlide} setActiveSlide={setActiveSlide} mainRef={previewRef}/>
          <CarPreviewImage image={Camry} activeKey={3} activeSlide={activeSlide} setActiveSlide={setActiveSlide} mainRef={previewRef}/>
          <CarPreviewImage image={Camry} activeKey={4} activeSlide={activeSlide} setActiveSlide={setActiveSlide} mainRef={previewRef}/>

        </div>
      </div>
      <div className="car-page">
        <div className="car-info">
          
        </div>
      </div>
    </section>
  );
}

export default CarPage;
