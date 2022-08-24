import styled from "styled-components";

export const HeaderContainer = styled.div`
  grid-area: header;
  position: sticky;
  top: 0;
  height: 200px;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  /* width: 73%;
  height: 100px;
  margin: 10px auto;
  align-items: center;
 
    
  } */
`;
export const HeaderTop = styled.div`
  background-color: inherit;
  height: 100px;
  transform: scaleX(1) scaleY(1) perspective(1px);
  visibility: visible;
  display: grid;
  padding: 0 8.5%;
  padding-top: 10px;
  align-items: center;
  gap: 10px;
  grid-template-areas: "logoContainer searchContainer menusContainer";
  grid-template-columns: auto 1fr auto;
  flex: 1;
`;
export const HeaderBottom = styled.div`
  background-color: white;
  flex: 1;
  transition: all 0.5s;
`;

// LOGO CONTAINER
export const LogoContainer = styled.div`
  grid-area: logoContainer;
  /* background-color: red; */
  display: flex;
  align-items: center;
  padding: 5px 20px;
  h1 {
    font-size: 30px;
    font-weight: 900;
  }
`;
// SEARCH CONTAINER
export const SearchContainer = styled.div`
  /* background-color: yellow; */
  grid-area: searchContainer;
  border: 2px solid #111;
  padding: 5px 10px;
  border-radius: 24px;
  position: relative;
  /* margin: 0 20px; */

  @media (max-width: 768px) {
    /* width: 0vw; */
    width: 90%;
    /* grid-template-rows: 200px auto ; */
    /* grid-template-columns: 100px 1fr ; */
  }
`;

export const SearchBar = styled.div`
  /* background-color: green; */
  display: flex;
  border-radius: inherit;
  align-items: center;
  flex: 1;
  justify-content: space-between;

  input[type="text"] {
    flex: 1;
    border: none;
    /* border-radius: inherit; */
    border-radius: 24px;
    height: 100%;
    display: block;
    padding: 10px;

    &:focus {
      outline: none;
    }
  }
  /* margin: 0 20px; */
`;

export const SearchBarIconsContainer = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const SearchIcon = styled.div`
  border-radius: 50%;
  cursor: pointer;
  padding: 7px;
  display: flex;
  align-items: center;

  justify-content: flex-end;
  &:hover {
    background-color: #f1f1f1;
  }
`;

// MENUS CONTIANER
export const MenusContainer = styled.div`
  grid-area: menusContainer;
  background-color: white;

  /* width: 40vw; */
  display: flex;
  align-items: center;
  padding: 20px 10px;
  height: 70px;
  justify-content: center;

  @media (max-width: 768px) {
    /* width: 0vw; */
    /* width: 95%; */
    /* grid-template-rows: 200px auto ; */
    /* grid-template-columns: 100px 1fr ; */
  }
`;

export const MenuItem = styled.div`
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

// Categories
export const CategoriesContanier = styled.div`
  /* grid-area: categories; */
  border-bottom: 1px solid #d3d3d3;
  /* width: 100%; */
  /* background-color: yellow; */
  width: 100vw;
  transition: all 0.5s;
  /* margin-top: 7px; */
  padding: 0 10%;
  @media (max-width: 768px) {
    display: none;
  }
`;

// export const MainLayoutContainer = styled.div`
//   height: 100vh;
//   display: grid;
//   grid-template-areas:
//     "header header header"
//     "middleContents middleContents middleContents"
//     "footer footer footer";

//   grid-template-columns: 1fr 4fr 1fr;
//   grid-template-rows: auto 1fr 100px;
// `;
