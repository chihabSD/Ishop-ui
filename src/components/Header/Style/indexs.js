import styled from "styled-components";

export const HeaderContainer = styled.div`
  grid-area: header;
  background-color: #fff;
  width: 100%;
  /* padding: 16px 10%; */
  align-items: center;
  display: grid;
  /* overflow: auto;o */
  margin-bottom: 10px;

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
  

   & #menuIcons {

    visibility: visible;
  }
  
  }
  /* align-items: center; */
`;


// LOGO CONTAINER 
export const LogoContainer = styled.div`
  grid-area: logoContainer;
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
background-color: yellow;

  grid-area: searchContainer;
  border: 2px solid #111;
  padding: 5px 10px;
  border-radius: 24px;
  position: relative;
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

  /* width: 40vw; */
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
  border-bottom: 1px solid #d3d3d3;
  /* width: 100%; */
  background-color: yellow;
  /* width: 100vw; */
  /* padding: 10px; */
  margin-top: 10px;
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
