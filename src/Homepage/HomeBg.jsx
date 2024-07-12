import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; //라이브러리에서 swiper기능 import
//Import Swiper Css
import 'swiper/css'; // Swiper의 기본 스타일 임포트
import '../css/HomeBg.css'; // 커스텀 CSS 파일 임포트
//Import required modules
import {Navigation, Autoplay} from 'swiper/modules' //모듈에서 props import!

const Bg = () => {
  return (
    <>
    <Swiper
      autoplay={{   //자동이동 구현 version마다 양식 달라져서 꼭 체크해줘야함 !!!
        delay:3000, //delay time
        disableOnInteraction: true, //SwiperSlide 반복재생여부
      }}
      spaceBetween={0} // 이미지들의 간격 px로 정의됨
      slidesPerView={1} // 한 뷰포트에 표시되는 슬라이드들의 수
      className="swiper-container"
      modules={[Autoplay, Navigation]} //모듈명 설정!!!!!!!!!! 내부함수로 해줘야 적용됨!!!!!!!
    >
      <SwiperSlide className="bg_img">
        <img src="https://www.visitkorea.or.kr/intro_new/images/pic01.jpg" alt="dokdo" className="bg_img" />
      </SwiperSlide>
      <SwiperSlide className="bg_img">
        <img src="https://www.visitkorea.or.kr/intro_new/images/pic02.jpg?v=1" alt="seoul" className="bg_img" />
      </SwiperSlide>
      <SwiperSlide className="bg_img">
        <img src="https://www.visitkorea.or.kr/intro_new/images/pic03.jpg?v=1" alt="jeju" className="bg_img" />
      </SwiperSlide>
      <SwiperSlide className="bg_img">
        <img src="https://www.visitkorea.or.kr/intro_new/images/pic04.jpg" alt="maple" className="bg_img" />
      </SwiperSlide>
      <SwiperSlide className="bg_img">
        <img src="https://www.visitkorea.or.kr/intro_new/images/pic05.jpg" alt="maple" className="bg_img" />
      </SwiperSlide>
    </Swiper>
    </>
  );
};
export default Bg;

