import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
export const h1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  line-height: 28px;
  font-weight: 400;
`;

export const h2 = styled.h2`
  font-size: 16px;
  line-height: 28px;
`;

export const h3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  line-height: 20px;
`;

export const h4 = styled.h4`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
`;

const GlobalStyle = createGlobalStyle`
* { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

body {
    padding: 0;
  margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

 input {background-color:none;
    border: none;
    :focus{
      outline:none;
    }
  }

textarea {
    :focus{
      outline:none;
    }
  }
.ProfileImage {
  border-radius: 50%;
  object-fit: contain;
}


`;

export default GlobalStyle;
