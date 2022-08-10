import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* background-color: rebeccapurple; */
  margin: 0;
  padding-bottom: 10px;

  /* box-shadow: 0px 10px 15px -20px  #111;   */
  /* box-shadow: 0px 15px 10px -15px #111;    */
  /* opacity: 1; */
  box-shadow: 0 -6px 5px 2px rgba(0, 0, 0, 0.5);
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
  width: 80px;
  height: 40px;
  background-color: yellow;
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

  /* flex-wrap: wrap; */
  /* border-radius: 24px; */
  /* width: 100%; */
  /* width: auto; */

  /* input {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  border-radius: 24px;
  background: white;
width: 100%;
} */
`;

const SearchForm = styled.form`
  box-shadow: 1px 2px 4px 0 rgba(34, 34, 34, 0.1) inset;
  color: #555;
  margin: 0 auto;
  /* padding: 10px; */
  /* width: 155px; */
  /* flex: 1; */
  flex: 1 1 0% !important;
  background-color: white;
  display: flex;
  /* padding: 2px; */
  /* border: 2px solid #3D3C42; */
  border: 2px solid #3d3c42;
  border-radius: 24px;
  outline: none;
  text-align: center;

  input[type="search"] {
    border: none;
    flex: 1;
    /* background: #f1f1f1; */
    background: transparent;
    margin: 10;
    padding: 10px 19px;
    font-size: 14px;
    color: inherit;
    border: 1px solid transparent;
    border-radius: inherit;
    outline: none;
    &:focus {
      outline: none;
    }
  }
  input:focus {
    outline: none;
  }
  input[type="search"]::placeholder {
    color: #bbb;
  }
  button[type="submit"] {
    text-indent: -999px;
    overflow: hidden;
    width: 40px;
    padding: 0;
    background: blue;
    margin: 0;
    border: 1px solid transparent;
    border-radius: 0px 20px 20px 0px;
    background: #f1f1f1
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
      no-repeat center;
    cursor: pointer;
    opacity: 0.7;
  }

  button[type="submit"]:hover {
    opacity: 1;
  }
  button[type="submit"]:focus,
  input[type="search"]:focus {
    box-shadow: 0 0 3px 0 #1183d6;
    border-color: #1183d6;
    outline: none;
  }
`;
const SearchContainer = styled.div`
  /* background-color: green; */
  /* border-radius:24px; */
  /* padding: 10px; */
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;

  margin-left: 15px;
`;

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
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  border-radius: 24px;
  display: inline-block;
  font-size: 15px;
  line-height: 1.5;
  min-height: 48px;
  min-width: 48px;
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
  SearchForm,
};
// HEADER -> LEFT
