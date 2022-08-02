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

const SwiperWrap = styled.div`
  display: flex;
`;

const ProjectCon = styled.div`
  width: 45%;
`;

const ProjectTitle = styled.h1`
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 10px;
`;
const Team = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const ProjectImg = styled.div`
  width: 600px;
  height: 500px;
  background-color: #1d1d1d;
`;

const ProjectDetail = styled.div`
  width: 45%;
  font-size: 24px;
  font-weight: 500;
  line-height: 35px;
`;
const DetailCon = styled.h3`
  width: 90%;
  margin-top: 135px;
`;

const Skill = styled.div`
  margin: 50px 0;
`;
const Site = styled.div``;
const Github = styled.div``;

export const Project = () => {
  return (
    <ProjectWrap>
      <Title>
        총 <span>4</span>개의 프로젝트가 있습니다.
      </Title>

      <Projects>
        <Swiper spaceBetween={50} slidesPerView={1}>
          <SwiperSlide>
            <SwiperWrap>
              <ProjectCon>
                <ProjectTitle>대림바스 리뉴얼</ProjectTitle>
                <Team>팀 프로젝트 \ 2022.05~ </Team>
                <ProjectImg></ProjectImg>
              </ProjectCon>
              <ProjectDetail>
                <DetailCon>
                  대림바스 홈페이지를 리뉴얼한 사이트입니다.
                  <br />
                  기획, 디자인, 퍼블리싱까지 작업한 사이트입니다.
                  <br />
                  팀원은 총 3명이였으며, 제가 맡은 역할은 푸터 & 고객지원 &
                  서비스 페이지입니다.
                </DetailCon>
                <Skill>
                  🖥 사용 언어
                  <br />
                  HTML, CSS, JAVASCRIPT
                </Skill>
                <Site>사이트 바로가기</Site>
                <Github>깃허브 바로가기</Github>
              </ProjectDetail>
            </SwiperWrap>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Projects>
    </ProjectWrap>
  );
};
