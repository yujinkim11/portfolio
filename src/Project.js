import styled from "styled-components";
import { mainStyle } from "./Style/Globalstyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import enjoy from "./images/yjmovie.png";
import login from "./images/yjlogin.png";
import daelim from "./images/daelim.png";
import paikdabang from "./images/paikdabang.png";
import dyson from "./images/dyson.png";
import rsp from "./images/rsp.png";

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
  margin-bottom: 50px;
`;

const ProjectCon = styled.div`
  width: 45%;
  padding: 0 60px;
`;

const ProjectTitle = styled.h1`
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 20px;
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
  font-size: 30px;
  p {
    font-size: 20px;
    margin-top: 10px;
  }
`;

const Link = styled.div`
  display: flex;
  font-size: 40px;
`;
const Site = styled.div`
  margin-right: 30px;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    color: ${mainStyle.point};
  }
`;
const Github = styled.div`
  transition: 0.5s;
  cursor: pointer;
  :hover {
    color: ${mainStyle.point};
  }
`;

export const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ProjectWrap>
      <Title
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="4000"
      >
        총 <span>6</span>개의 프로젝트가 있습니다.
      </Title>

      <Projects>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{ clickable: true }}
        >
          <SwiperSlide>
            <SwiperWrap>
              <ProjectCon>
                <ProjectTitle>다이슨 리뉴얼</ProjectTitle>
                <Team>팀 프로젝트 | 2022.07.29 ~ 진행중</Team>
                <ProjectImg
                  style={{
                    background: `url(${dyson}) no-repeat center / cover`,
                  }}
                />
              </ProjectCon>
              <ProjectDetail>
                <DetailCon>
                  다이슨 홈페이지를 리뉴얼한 사이트입니다.
                  <br />
                  기획 코딩 작업에 참여한 사이트로 반응형 작업이 되어있습니다.
                  <br />
                  Git으로 협업하는 방법을 익히기 위해 진행했습니다.
                  <br />
                  <br />
                  팀원은 총 4명이였으며, 제가 맡은 역할은 푸터 & 고객지원
                  페이지입니다.
                </DetailCon>
                <Skill>
                  사용 언어
                  <p>REACT, Nodejs, JAVASCRIPT, HTML, CSS</p>
                </Skill>
                <Link>
                  <Site>
                    <i class="fa-solid fa-link"></i>
                  </Site>
                  <Github>
                    <i class="fa-brands fa-square-github"></i>
                  </Github>
                </Link>
              </ProjectDetail>
            </SwiperWrap>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperWrap>
              <ProjectCon>
                <ProjectTitle>Enjoy!</ProjectTitle>
                <Team>개인 프로젝트 | 2022.7.5 ~ 2022.7.20 </Team>
                <ProjectImg
                  style={{
                    background: `url(${enjoy}) no-repeat center / cover`,
                  }}
                />
              </ProjectCon>
              <ProjectDetail>
                <DetailCon>
                  영화/TV프로그램을 볼 수 있는 OTT 사이트를 구현한 사이트입니다.
                  <br />
                  API를 받아와서 컨텐츠 리스트를 보여줄 수 있도록 구현하였고,
                  반응형 작업이 되어있는 페이지입니다.
                  <br />
                  <br />
                  개인 프로젝트로 기획, 디자인, 코딩 작업을 했습니다. REACT와
                  로딩 페이지, 비동기화 작업을 구현하기 위해 한 프로젝트입니다.
                </DetailCon>
                <Skill>
                  사용 언어
                  <br />
                  <p>REACT, Nodejs, JAVASCRIPT, HTML, CSS</p>
                </Skill>
                <Link>
                  <a target="_blank" href="https://yujinkim11.github.io/enjoy/">
                    <Site>
                      <i class="fa-solid fa-link"></i>
                    </Site>
                  </a>
                  <a target="_blank" href="https://github.com/yujinkim11/enjoy">
                    <Github>
                      <i class="fa-brands fa-square-github"></i>
                    </Github>
                  </a>
                </Link>
              </ProjectDetail>
            </SwiperWrap>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperWrap>
              <ProjectCon>
                <ProjectTitle>로그인 페이지</ProjectTitle>
                <Team>개인 프로젝트 | 2022.05~ </Team>
                <ProjectImg
                  style={{
                    background: `url(${login}) no-repeat center / cover`,
                  }}
                />
              </ProjectCon>
              <ProjectDetail>
                <DetailCon>
                  로그인 페이지를 구현한 사이트입니다.
                  <br />
                  로그인, 회원가입 창을 구현했으며, 회원가입 창에는 유효성 검사
                  기능이 있습니다.
                  <br />
                  <br />
                  혼자 진행한 프로젝트이며 추후에 회원가입에서 생성한 아이디를
                  DB에 저장하여, 그 아이디로만 로그인을 할 수 있는 기능을
                  추가하고 싶습니다.
                </DetailCon>
                <Skill>
                  사용 언어
                  <br />
                  <p>REACT, Nodejs, JAVASCRIPT, HTML, CSS</p>
                </Skill>
                <Link>
                  <Site>
                    <a
                      target="_blank"
                      href="https://yujinkim11.github.io/YJ-Login/"
                    >
                      {" "}
                      <i class="fa-solid fa-link"></i>
                    </a>
                  </Site>
                  <a
                    target="_blank"
                    href="https://github.com/yujinkim11/YJ-login"
                  >
                    <Github>
                      <i class="fa-brands fa-square-github"></i>
                    </Github>
                  </a>
                </Link>
              </ProjectDetail>
            </SwiperWrap>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperWrap>
              <ProjectCon>
                <ProjectTitle>가위바위보 게임</ProjectTitle>
                <Team>개인 프로젝트 | 2022.07.15 ~ 진행중 </Team>
                <ProjectImg
                  style={{
                    background: `url(${rsp}) no-repeat center / cover`,
                  }}
                />
              </ProjectCon>
              <ProjectDetail>
                <DetailCon>
                  가위바위보 게임을 할 수 있는 토이프로젝트입니다.
                  <br />
                  유저가 가위,바위,보를 골라서 클릭하면 컴퓨터는 랜덤으로
                  선택지를 골라 게임을 진행합니다. 각자 낸 아이템을 가지고
                  승패를 가려주는 게임입니다.
                  <br />
                  <br />
                  개인 프로젝트이며, REACT 공부를 더 하기위해 진행한
                  프로젝트이며 컴퓨터에 랜덤한 값을 가져올 수 있는 함수를
                  익혔고, 승패를 가려주는 작업을 추가할 예정입니다.
                </DetailCon>
                <Skill>
                  사용 언어
                  <br />
                  <p>REACT, Nodejs, JAVASCRIPT, HTML, CSS</p>
                </Skill>
                <Link>
                  <a
                    target="_blank"
                    href="https://github.com/yujinkim11/rockscissorpaper"
                  >
                    <Github>
                      <i class="fa-brands fa-square-github"></i>
                    </Github>
                  </a>
                </Link>
              </ProjectDetail>
            </SwiperWrap>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperWrap>
              <ProjectCon>
                <ProjectTitle>빽다방 리뉴얼</ProjectTitle>
                <Team>개인 프로젝트 | 2022.06.17 ~ 2022.07.29 </Team>
                <ProjectImg
                  style={{
                    background: `url(${paikdabang}) no-repeat center / cover`,
                  }}
                />
              </ProjectCon>
              <ProjectDetail>
                <DetailCon>
                  빽다방 홈페이지의 메인 페이지를 리뉴얼한 사이트입니다.
                  <br />
                  기획, 디자인, 퍼블리싱까지 작업한 사이트입니다.
                  <br />
                  개인 프로젝트이며, 웹 퍼블리싱에서 구조 잡는 것을 탄탄히 하고
                  aos와 같은 스크롤 이벤트를 추가해서 구현하고 싶어서 진행한
                  프로젝트입니다.
                </DetailCon>
                <Skill>
                  사용 언어
                  <br />
                  <p>REACT, Nodejs, HTML, CSS, JAVASCRIPT</p>
                </Skill>
                <Link>
                  <Site>
                    <a
                      target="_blank"
                      href="https://yujinkim11.github.io/paikdabang/"
                    >
                      <i class="fa-solid fa-link"></i>
                    </a>
                  </Site>
                  <a
                    target="_blank"
                    href="https://github.com/yujinkim11/paikdabang"
                  >
                    <Github>
                      <i class="fa-brands fa-square-github"></i>
                    </Github>
                  </a>
                </Link>
              </ProjectDetail>
            </SwiperWrap>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperWrap>
              <ProjectCon>
                <ProjectTitle>대림바스 리뉴얼</ProjectTitle>
                <Team>팀 프로젝트 | 2022.05.06 ~ 2022.06.10 </Team>
                <ProjectImg
                  style={{
                    background: `url(${daelim}) no-repeat center / cover`,
                  }}
                />
              </ProjectCon>
              <ProjectDetail>
                <DetailCon>
                  대림바스 홈페이지를 리뉴얼한 사이트입니다.
                  <br />
                  기획, 디자인, 퍼블리싱까지 작업한 사이트이며 처음으로 진행한
                  퍼블리싱 프로젝트입니다.
                  <br />
                  팀원은 총 3명이였으며, 제가 맡은 역할은 푸터 & 고객지원 &
                  서비스 페이지입니다.
                </DetailCon>
                <Skill>
                  사용 언어
                  <br />
                  <p>HTML, CSS, JAVASCRIPT</p>
                </Skill>
                <Link>
                  <a
                    target="_blank"
                    href="https://yujinkim11.github.io/daelimbath-re/"
                  >
                    <Site>
                      <i class="fa-solid fa-link"></i>
                    </Site>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/yujinkim11/daelimbath-re"
                  >
                    <Github>
                      <i class="fa-brands fa-square-github"></i>
                    </Github>
                  </a>
                </Link>
              </ProjectDetail>
            </SwiperWrap>
          </SwiperSlide>
        </Swiper>
      </Projects>
    </ProjectWrap>
  );
};
