import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 200px",
};

export const Globalstyle = createGlobalStyle`
    ${reset}
   
    body{
        background: #353535;
        color: white;
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;
        word-break: keep-all;
    }
    a{
        text-decoration: none;
        color: white;
    }
`;
