import styled from "styled-components";
import { mainStyle } from "./Style/Globalstyle";
import me from "./images/me.png";

const AboutmeWrap = styled.div``;

const BoxWrap = styled.div`
  padding: ${mainStyle.padding};
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

const Left = styled.div`
  width: 600px;
  height: 600px;
`;

const Right = styled.div`
  width: 800px;
  margin-left: 50px;
`;
const AboutCon = styled.h3`
  h4 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  p {
    font-size: 20px;
    line-height: 30px;
    font-weight: 300;
  }
  margin-bottom: 30px;
`;

const Future = styled.p`
  h5 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
`;

const SkillWrap = styled.div`
  margin-top: 120px;
  height: 80vh;
  padding: ${mainStyle.padding};
  text-align: center;
`;
const Skill = styled.div``;

const Lang = styled.div``;

const StudyWrap = styled.div`
  margin-top: 100px;
  padding: ${mainStyle.padding};
`;
const Study = styled.div``;
const ProjectGo = styled.div`
  text-align: center;
`;

export const Aboutme = () => {
  return (
    <AboutmeWrap>
      <BoxWrap>
        <Left
          style={{
            background: `url(${me}) no-repeat center / cover`,
          }}
        />
        <Right>
          <AboutCon>
            <h4>안녕하세요. 프론트엔드 개발자 신입 김유진입니다.</h4>
            <p>
              고등학생때부터 웹사이트에 관심이 많았습니다. <br />
              사이트들은 어떻게 만들어지는지에 호기심이 생겨서 직접 티스토리를
              꾸미고 배워가면서
              <br />
              제로보드와 php를 이용해서 홈페이지를 직접 만들어본 경험이
              있습니다.
              <br />
              그때의 기억을 되살리다 흥미와 뿌듯함을 느끼며 일할수 있는
              프론트엔드 개발자의 매력을 느끼게 되었고 개발자의 꿈을 가지게
              되었습니다.
              <br />
              새로운 것을 배우고 익히는 것에 거부감이 없고 오히려 그 과정에서
              즐거움을 느낍니다.
              <br />
              이전에 카페에서 직원으로 근무할 때는 제과제빵 자격증을 공부하며
              필기 시험에 합격하였고, 개발자의 꿈을 꾸면서 UIUX에 관심을
              가지면서 포토샵을 배우고 자격증 시험을 쳤습니다.
              <br />
              그렇게 익힌 지식들을 실무에서, 제가 직접 사용해낼 때 더욱 더
              뿌듯함을 얻습니다.
              <br />
              앞으로도 더 성장하기 위해 꾸준히 흥미를 잃지않고 배우고 싶습니다.
            </p>
          </AboutCon>

          <Future>
            <h5>포부</h5>
            회사에서 협업의 중요성을 알고 팀원들과의 소통을 중요하게 생각하며
            <br />
            서로에게 도움이 되는 동료가 되고 싶습니다.
            <br />
            그런 동료가 될 수 있도록 노력하며 행동하겠습니다.
            <br />
            개인 역량으로는 최근에 Typescript에 관심이 가서 Typescript를
            공부하고 싶고,
            <br />
            Redux를 통해 상태관리를 하는 것도 익혀나갈 예정입니다.
          </Future>
        </Right>
      </BoxWrap>
      <SkillWrap>
        <Skill>
          <h3>Skill</h3>
          <Lang>
            <img
              src="https://t1.daumcdn.net/cfile/tistory/2149683A58CA6BF313"
              width="200px"
              hight="180px"
            ></img>
            <img src="" width="200px" hight="180px" />
            <img src="" width="200px" hight="180px" />
            <img src="" width="200px" hight="180px" />
            <img src="" width="200px" hight="180px" />
          </Lang>
        </Skill>
      </SkillWrap>
      <StudyWrap>
        <Study>학원 수료 과정 보여주기</Study>
      </StudyWrap>
      <ProjectGo>프로젝트 가기</ProjectGo>
    </AboutmeWrap>
  );
};
