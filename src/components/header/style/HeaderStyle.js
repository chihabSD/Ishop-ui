import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* background-color: rebeccapurple; */
  margin: 0;
  padding-bottom: 10px;

  /* box-shadow: 0px 10px 15px -20px  #111;   */
  /* box-shadow: 0px 15px 10px -15px #111;    */
  /* opacity: 1; */
  box-shadow: 0 -6px 5px 4px rgba(0, 0, 0, 0.4);
  transform: scaleX(1) scaleY(1) perspective(1px);

  /* background-color: yellow; */
  background: #fff;
`;
/*----------- left -----------*/
const Wrapper = styled.div`
  display: flex;
  /* border-radius: 12px; */
  margin: 10px 0px 0 0;
  background-color: #fff;
  margin-bottom: 50px;
  /* height: 100px; */
  /* opacity: 1; */
  transform: scaleX(1) scaleY(1) perspective(1px);
  visibility: visible;
  white-space: nowrap;
  /* overflow: hidden; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: green; */
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  box-sizing: inherit;
  font-size: 14px;
  line-height: 1.4;
  /* height: 30px; */
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 36px;
  padding-left: 36px;
  width: 100%;
`;
const Left = styled.div`
  /* width: 80px; */
  /* height: 40px; */
  padding: 10px;
  margin-right: 15px;
  cursor: pointer;
  img {
    width: 150px;
    height: 40px;
  }
  /* background-color: yellow; */
`;

/*----------- middle -----------*/
const Middle = styled.div`
  background-color: red;
  /* padding-left: 0px !important; */
  /* margin-bottom: 0px !important; */
  flex: 1 1 0% !important;
  display: inline-block !important;
  box-sizing: inherit;
  margin: 0;
  align-items: center;


`;


const SearchContainer = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  width: 100%;
  /* background-color: blue; */
  justify-content: center;
  margin-left: 15px;
  flex: 1 1 0% !important;
`;

const SearchBar = styled.form`
  border-radius: 24px;
  border: 2px solid black;
  margin: 0;
  width: 100%;
  /* max-width: 100vw; */
  background: rgba((255), 255, 255, 0.2);
  display: flex;
  align-items: center;
  border-radius: 25px;
  padding: 5px 10px;
  /* padding-right: 0; */
  

  input {
    background-color: #fff;
    flex: 1;
    border: 0;
    outline: none;
    padding: 10px 20px;
    border-radius: 24px;
    transition: 0.3s;
  }



`;

const SearchIconContainer = styled.div`
/* background-color: blue; */
height: 40px;
width: 40px;
border-radius: 50%;
color: white;
justify-content: center;
display: flex;
align-items: center;
color: black;
font-size: 25px;
margin-right: 10px;
cursor: pointer;
&:hover{

background-color: #f1f1f1;
}
`
/*----------- right -----------*/
const Right = styled.div`
  background-color: inherit;
  /* margin-right: 10px; */
  /* margin-left: 20px; */

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// ITEMS
const RightItem = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  border-radius: 24px;
  font-size: 15px;
  line-height: 1.5;
  min-height: 48px;
  /* min-width: 48px; */
  position: relative;
  text-align: center;
  vertical-align: middle;
  z-index: 10;
  &:hover {
    background-color: #f1f1f1;
  }
  p {
    font-weight: 500;
  }
`;

export {
  Container,
  RightItem,
  Wrapper,
  Right,
  Left,
  Middle,
  SearchContainer,
  SearchBar, SearchIconContainer
};
// HEADER -> LEFT
