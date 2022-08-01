import styled from "styled-components";
import { mainStyle } from "./Style/Globalstyle";

const ProjectWrap = styled.div`
  padding: ${mainStyle.padding};
`;
const Title = styled.h3`
  margin: 100px 0;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  span {
    font-size: 60px;
  }
`;
const Projects = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 450px;
  height: 600px;
  background-color: #353535;
`;

export const Project = () => {
  return (
    <ProjectWrap>
      <Title>
        총 <span>4</span>개의 프로젝트가 있습니다.
      </Title>
      <Projects>
        <Box />
        <Box />
        <Box />
        <Box />
      </Projects>
    </ProjectWrap>
  );
};
