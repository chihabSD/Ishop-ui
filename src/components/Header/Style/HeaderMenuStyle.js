import styled from "styled-components";

export const HeaderMenuContainer = styled.div`
/* border: 1px solid blue; */
margin: 5px;
position: relative;
padding: 10px;
border-radius: 24px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s;
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


// visibility: hidden;
// width: 120px;
// background-color: black;
// color: #fff;
// text-align: center;
// border-radius: 6px;
// padding: 5px 0;

// /* Position the tooltip */
// position: absolute;
// z-index: 1;