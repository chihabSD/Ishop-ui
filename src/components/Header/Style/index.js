import styled from "styled-components";

export const HeaderContainer = styled.div`
  grid-area: header;
  position: sticky;
  top: 0;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  /* z-index: 1; */
  span {
    display: inline-block;
    height: 5px;
    background-color: #f1f1f1;
    width: 100%;
  }
  /* width: 73%;
  height: 100px;
  margin: 10px auto;
  align-items: center;
 
    
  span
  } */
`;
export const HeaderTop = styled.div`
  height: 100px;
  transform: scaleX(1) scaleY(1) perspective(1px);
  visibility: visible;
  display: grid;
  padding: 0 11%;
  padding-top: 10px;
  align-items: center;
  gap: 10px;
  grid-template-areas: "menuIcons logoContainer searchContainer HeaderTopContainer";
  grid-template-columns: auto auto 3fr 1fr;
  flex: 1;

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
   
  }
`;
export const HeaderBottom = styled.div`
  padding-bottom: 20px;
  /* border-bottom: 1px solid; */
  flex: 1;
  transition: all 0.5s;


  z-index: -1;
  display: grid;
  /* gap: 10px; */
  grid-template-areas: "menuIcons categories categories categories";
  /* grid-template-columns: none 1fr; */

  & #searchVisbile {
    display: none;
    }
    & #menuIcons {
        /* visibility: hidden */
        /* display:none */
        background-color: blue;
    }
  @media (max-width: 768px) {
    /* background-color: blue; */

    grid-template-areas: "menuIcons searchContainer";
    grid-template-columns: auto 1fr;
    /* gap: 10; */
    /* searchContainer */
    /* padding: 0 10%; */
    & #searchVisbile {
      /* display: block; */
      /* height: 100px; */
      background-color: blue;
    }

    & #menuIcons {
      visibility: visible;
    }
  }
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
  background-color: #f1f1f1;
  opacity: 0.7;
  grid-area: searchContainer;
  /* border: 2px solid #111; */
  padding: 5px 10px;
  border-radius: 24px;
  position: relative;
  /* margin: 0 20px; */
  cursor: pointer;
&:hover{
  opacity: 1;
}
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchBar = styled.div`
  background-color: inherit;
  display: flex;
  border-radius: inherit;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  input[type="text"]:focus{
    /* outline: none; */
    border: 1px solid #3498db;
        /* box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); */
}

  input[type="text"] {
    flex: 1;
    border: none;
    /* border-radius: inherit; */
    background-color: inherit;
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
  /* background-color: ; */
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
  grid-area: HeaderTopContainer;
  background-color: white;
  border: 1px white;

  /* width: 40vw; */
  display: flex;

  align-items: center;
  padding: 20px 10px;
  height: 70px;
  justify-content: center;

 
`;
export const HeaderTopIconContainer = styled.div`
/* background-color: blue; */
/* margin: 10px; */
/* margin: 10px;
width: 10px;
border-radius: 24px;
display: flex;
border: 1px solid;
align-items: center;
justify-content: center; */

`
// export const HeaderMenuContainer = styled.div`
// background-color: blue;
// margin: 10px;
// display: flex;
// border: 1px solid;

// `


export const MenuItem = styled.div`
  margin-left: 10px;
  /* background-color: blue; */
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
  /* border-bottom: 1px solid #d3d3d3; */
  /* width: 100%; */
  /* background-color: yellow; */
  width: 100vw;
  transition: all 0.5s;
  padding: 0 10%;
  @media (max-width: 768px) {
    display: none;
  }
`;

// export const Hamburger = styled.div`
// grid-area: menuIcons;
// /* background-color: blue; */
// `;
