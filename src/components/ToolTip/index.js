
import React from "react";

import styled from "styled-components";

const ToolTip = ({text}) => {
  return (
    <Container id="tooltip"><p>{text}</p></Container>
  )
}

export default ToolTip 



// import React from "react";
// import styled from "styled-components";

// const ToolTip = () => {
//   return (
//     <Container>
//       <p>Tooltip</p>
//     </Container>
//   );
// };

// export default ToolTip;

const Container = styled.div`
  position: absolute;
  color: white;
  text-align: center;
  visibility: hidden;
  z-index: 1;
  top: 2.7em;
  right: -2.7rem;
  color: #fff;
  text-align: center;
  background-color: black;
  width: 120px;
  height: auto;
  padding: 10px;

  text-align: center;
  border-radius: 6px;
  padding: 10px 0;

  p {
    font-size: 13px;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;

    right: 3.6em;
    width: 15px;
    height: 15px;
    top: -0.5em;
    background: black;
    border-right: 2px solid #f1f1f1;
    border-bottom: 2px solid #f1f1f1;
    -webkit-transform: rotate(-136deg);
  }

 
`;
