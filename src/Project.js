import styled from "styled-components";
import { mainStyle } from "./Style/Globalstyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProjectWrap = styled.div`
  padding: ${mainStyle.padding};
`;
const Title = styled.h3`
  margin: 100px 0;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  span {
    font-size: 65px;
    color: ${mainStyle.point};
  }
`;
const Projects = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Project = () => {
  return (
    <ProjectWrap>
      <Title>
        총 <span>4</span>개의 프로젝트가 있습니다.
      </Title>
      <Projects>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Projects>
    </ProjectWrap>
  );
};
