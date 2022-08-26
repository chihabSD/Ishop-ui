import styled from "styled-components";

// export const HeaderMenuContainer = styled.div`

// position: relative;
// display: flex;
// align-items: center;
// justify-content: space-between;
// `;





// import styled from "styled-components";

export const HeaderMenuContainer = styled.div`
/* border: 1px solid blue; */
background-color: gray;
grid-area: menusContainer;
margin: 5px;
position: relative;

padding: 10px;
/* overflow: auto; */
border-radius: 24px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s;

/* pointer-events: none; */
cursor: pointer;

 h3 {
    font-size: 30px;
 }
 &:hover #tooltip {
    /* background-color: blue; */
    /* display: none; */
    visibility: visible;
  

}

&:hover{
    background-color: #f1f1f1;
    /* background-color: blue; */
  

}
`;


