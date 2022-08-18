import styled from "styled-components";

export const HeaderContainer = styled.div`
  grid-area: header;
  background-color: #fff;
  border-bottom: 1px solid #d3d3d3;
  padding: 16px 10%;
  align-items: center;
  display: grid;
  margin-bottom: 10px;
  border-bottom: 1px solid #d3d3d3;
  transform: scaleX(1) scaleY(1) perspective(1px);
  visibility: visible;
  /* grid-template-areas: "logoContainer searchContainer menusContainer"; */
  /* height: 100px; */
 
  grid-template-areas:
    "logoContainer searchContainer menusContainer"
    " categories categories categories";
  grid-template-columns: auto 4fr auto;

  gap: 10px;
  @media (max-width: 768px) {
    grid-template-areas:
      "logoContainer menusContainer menusContainer"
      "categories searchContainer searchContainer";
    /* grid-template-rows: 250px auto 250px; */
    grid-template-columns: auto 1fr;
    gap: 10px;
  padding: 16px 15px;
    /* grid-template-rows: 200px auto ; */
    /* grid-template-columns: 100px 1fr ; */
  }
  /* align-items: center; */
`;

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

export const SearchContainer = styled.div`
  grid-area: searchContainer;
  /* background-color: yellow; */
  border: 2px solid #111;
  padding: 5px 10px;
  border-radius: 24px;
  /* margin: 0 20px; */
`;

export const SearchBar = styled.div`
  /* background-color: green; */
  display: flex;
  border-radius: inherit;
  align-items: center;
  flex: 1;
  justify-content: space-between;
 
  
  input[type=text]{
    flex: 1;
 border: none;
  /* border-radius: inherit; */
  border-radius: 24px;
  height: 100%;
  display: block;
  padding: 10px ;
  
  &:focus{
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
&:hover{
  background-color: #f1f1f1;
}
`;

// MENUS CONTIANER 
export const MenusContainer = styled.div`
  grid-area: menusContainer;
  /* background-color: orange; */

  display: flex;
  align-items: center;
  padding: 20px 10px;
  height: 70px;
  justify-content: center;


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
  grid-area: categories;
  background-color: pink;
  padding: 10px;
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
