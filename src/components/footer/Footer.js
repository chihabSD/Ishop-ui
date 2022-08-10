import styled from "styled-components";
import { COLORS } from "../../constants/theme";
export const FooterContainer = styled.div`
  /* height: 300px; */
  display: flex;
  /* background-color: ${COLORS.black}; */
  background-color: #f5f5f5;
  border: none;
  position: relative;
  min-height: calc(50vh - 40px);
  z-index: -1;
  flex-direction: column;
`;

export const FooterTop = styled.div`
  /* background-color: yellow; */
  margin: 10px;
  display: flex;
  justify-content: space-evenly;
`;

export const FooterItem = styled.div`
  background-color: initial;
  margin: 10px;
  padding: 10px;

  h1 {
    font-size: 1.2rem;
    color: #111111;
    font-weight: 700;
  }
  ul {
    list-style: none;
  }
  ul li {
    /* color: #b1b1b1; */
    font-size: 0.9rem;
    /* padding: 10px; */
    margin-top: 25px;
    /* font-weight: 900; */
    cursor: pointer;
  /* text-transform: uppercase; */
  }
  & ul li:hover {
    text-decoration: underline;
    text-decoration-color: black;
    color: #111111;
  }
`;
export const FooterItemTitle = styled.div`
  background-color: yellow;
  margin: 10px;
`;

export const FooterBottom = styled.div`
  /* background-color:#1C3879 ; */
  border-top: 0.8px solid  #E5E5E5;
  background-color: #f5f5f5;
  /* margin: 10px; */
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
`;
export const Left = styled.div`
background-color: blue;
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
}
ul li {
  font-size: 0.9rem;
  margin-left: 20px;
  /* font-weight: 300; */
  color:black
/* text-decoration-color: white; */
}
& ul li:hover {

  text-decoration: underline;
}
span {
  color: black;
  font-size: 0.9rem;
}
`;
