import styled from "styled-components";
export const HeaderContainer = styled.div`
  height: 100px;
  border-bottom: 0.5px solid rgb(231, 228, 228);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
  padding-bottom: 30px;
  max-width: 1400px;

margin: 0 auto;
background:#ffffff;
  /* padding: 0 10 20px 10%; */
  /* padding: 3% 10%; */
  width: 100% !important; 
  padding-left: 10%;
  padding-right: 10%;

/* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {
padding: 10px 100px 30px 100px;
}

/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {
  padding: 10px 10% 20px 10%;
}
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 20px;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  /* position: relative; */
  justify-content: space-between;
`;

// HEADER -> LEFT
export const HeaderLeft = styled.div`
  /* background-color: yellow; */
  flex: 1;
  margin-right: 20px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Logo = styled.div`
  /* flex: 2; */
  margin-right: 20px;
  display: flex;
  align-items: center;
  /* background-color: blue; */
  /* justify-content: center; */
  /* width: 100%; */
  height: 100%;
  h1 {
    font-size: 20px;
    font-weight: 900;
    color: #6439ff;
  }
`;
// SEARCH
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #222;
  justify-content: space-between;
  border-radius: 20px;
  /* padding: 10px; */
  flex: 1;
  /* background-color: blue; */
  padding: 15px;

  input {
    border: none;
    outline: none;
    /* border-radius: 20px; */
    /* border-right: none; */
    /* background: transparent; */
    /* padding: 10px; */
    width: 100%;
    height: 100%;
    &::placeholder {
      /* font-size: 20px; */
      font-size: 1rem;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  /* align-items: flex-end; */

  /* flex: 1; */
`;

export const HeaderRightItem = styled.div`
  /* background-color: blue; */
  /* padding: 10px; */
  /* width: 70px; */
  /* height: 50px; */
  margin-right: 15px;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  /* width: 70px;
  height: 70px;
  border-radius: 50%; */
  position: relative;
  justify-content: center;
  padding: 5px;
  
  background-color: gray;
    /* background-color: #ece8ff; */
  cursor: pointer;
  &:hover {
    border-radius: 50%;
/* padding: 10px; */
  /* overflow: hidden; */
  transition: all 0.7s; 
  /* padding: 10px; */
  /* z-index: 999; */
/* padding: 5px; */
/* height: 50px;
width: 50px; */
  }
  span {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export const Counter = styled.div`
  width: 15px;
  padding: 10px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
  top: -5px;
  right: -5px;
`;
