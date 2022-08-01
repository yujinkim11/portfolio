import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 200px",
  point: "#8dc562",
};

export const Globalstyle = createGlobalStyle`
    ${reset}
   
    body{
        background: #eeeeee;
        color: #353535;
        font-family: 'Noto Sans KR', sans-serif;
        box-sizing: border-box;
        word-break: keep-all;
    }
    a{
        text-decoration: none;
        color: #353535;
    }
`;
