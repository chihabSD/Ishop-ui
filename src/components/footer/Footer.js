import styled from "styled-components";
import { COLORS } from "../../constants/theme";
export const FooterContainer = styled.div`
  /* height: 300px; */
  display: flex;
  /* background-color: ${COLORS.black}; */
  /* background-color: #f5f5f5; */
  background-color: #2f456c;
  border: none;
  position: relative;
  /* min-height: calc(50vh - 40px); */
  height: auto;
  z-index: -1;
  flex-direction: column;

  
`;

export const FooterWrapper= styled.div`
padding-right: 36px;
  padding-left: 36px;
/* padding: 0 36px; */
/* position: relative; */
`

export const FooterTop = styled.div`

  margin: 10px;
  display: flex;
  padding: 20px 0;
  height: 400px;
  justify-content: space-evenly;
background-color: inherit;
`;

export const FooterItem = styled.div`
  background-color: initial;
  margin: 10px;
  padding: 10px;
  
margin-bottom: 30px;
  h1 {
    font-size: 1.2rem;
    /* color: #111111; */
    color: #fff;
    font-weight: 700;
  }
  ul {
    list-style: none;
  }
  ul li {
    /* color: #fff; */
    color: #fbfbfc;
    font-size: 0.9rem;
    /* padding: 10px; */
    margin-top: 25px;
    font-weight: 300;
    /* font-weight: 900; */
    cursor: pointer;
  /* text-transform: uppercase; */
  }
  & ul li:hover {
    text-decoration: underline;
    text-decoration-color: white;
    /* color: #111111; */
    /* color: #3e5376; */
  }
`;
export const FooterItemTitle = styled.div`
  background-color: yellow;
  margin: 10px;
`;



export const Right = styled.div`
/* background-cslor: gray; */
flex: 1;
padding: 10px;
margin-left: 20px;
display: flex;
justify-content: flex-end;
align-items: flex-end;
flex-direction: row;
align-items: center;
text-align: center;
color: #fff;
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
  display: flex;
  /* margin: 10px; */
  font-size: 1rem;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  align-items: center;
  /* background-color: #333333; */
color: #fff;
}
ul li {
  font-size: 0.9rem;
  margin-left: 20px;
  /* font-weight: 300; */
/* text-decoration-color: white; */
}
& ul li:hover {

  text-decoration: underline;
}
span {
  /* color: black; */
  font-size: 0.9rem;
}
`;

// Footer bottom
export const FooterBottom = styled.div`

  /* border-top: 0.8px solid  #E5E5E5; */
  background-color: #232347;
  /* background-color: gray; */
  /* margin: 10px; */
  position: absolute;
  bottom: 0;
  right: 0;
  /* top: 0; */
  width: 100%;
  /* height: 17%; */
  padding: 20px 14%;
  
  display: flex;
  align-items: center;
  /* padding: 10px; */
  justify-content: space-between;
  color: #fff;
`;

export const Left = styled.div`
/* background-color: blue; */
display: flex;
cursor: pointer;
&:hover {
/* border: 1px solid #414152; */
  background-color: #414152;
border-radius: 23px;
}

/* padding: 10px; */
`;
export const LeftItem = styled.div`

width: 100px;
/* margin: 10px; */
background-color: inherit;
margin: 10px;
border-right: 1px solid white;
padding: 5px;
font-weight: 400;
&:last-child {
  border-right: none;
}
`