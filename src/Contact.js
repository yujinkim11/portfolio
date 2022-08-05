import styled from "styled-components";
import { mainStyle } from "./Style/Globalstyle";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactWrap = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 450px;
  height: 300px;
  background-color: white;
  display: flex;

  justify-content: center;
`;
const Con = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  p {
    width: 350px;
    margin-top: 30px;
    text-align: center;
    font-size: 24px;
    font-weight: 300;
    line-height: 40px;
    span {
      color: ${mainStyle.point};
      font-weight: 500;
    }
  }
  h3 {
    margin-top: 20px;
    text-align: center;
    font-size: 70px;
  }
  h4 {
    margin-top: 40px;
    font-size: 24px;
    font-weight: 500;
  }
  a {
    transition: 0.5s;
    cursor: pointer;
    :hover {
      color: ${mainStyle.point};
    }
  }
`;

export const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ContactWrap>
      <Box data-aos="flip-left" data-aos-duration="15000">
        <Con>
          <p>
            구인 또는 궁금한 점이 있으실 경우 아래 <span>메일</span>로 연락
            부탁드립니다.
          </p>
          <h3>📩</h3>
          <a href="mailto:wowyj26@naver.com" target="_blank">
            <h4>wowyj26@naver.com</h4>
          </a>
        </Con>
      </Box>
    </ContactWrap>
  );
};
