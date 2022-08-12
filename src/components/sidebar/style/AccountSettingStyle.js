import styled from "styled-components";
export const AccountSettingsContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 80vh;
  margin-top: 0;
  display: flex;
  /* padding: 10px; */
  justify-content: space-between;
`;
export const SettingsLeft = styled.div`
  width: 280px;
  padding: 0px 0;
  /* padding-left: 10px; */
  background-color: inherit;
  border-right: 1.4px solid #f1f1f1;
  border-top: 1.4px solid #f1f1f1;
  

   margin: 20px;
  background-color: white;
  margin: 10px;
  margin-left: 0;
  margin-right: 0;
  /* margin-left: 30px; */
  /* height: 100vh; */
    /* background-color: yellow; */
`;
export const SettingsMenu = styled.ul`
padding-top: 10px;
list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  /* padding: 10px; */
  background-color: white;
  text-decoration: none
  ;
  
 li {
  display: flex;
  /* margin-top: 10px; */
  background-color: ${({selected, id}) => (selected === id ? '#f1f1f1':'white')};;
  margin:0;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #f1f1f1;
align-items: center;
  &:hover{
    color: gray;
    p {
    color: gray;
    }
  }
 } 
  h1 {
      font-weight: 600;
      font-size: 0.9rem;
      /* line-height: 20px; */
      margin-left: 10px;
    }

    p {
      /* font-weight: 590; */
      color: #232347;

      /* font-family: "Graphik Webfont", -apple-system, "Helvetica Neue", */
      /* "Droid Sans", Arial, sans-serif; */
      font-weight: 600;
      font-size: 0.8rem;
      margin-left: 10px;
      /* line-height: 18px; */
    } 
`;
export const Right = styled.div`
  margin-left: 15px;
  h1 {
    font-size: 0.7rem;
    font-weight: 400;
  }
`;

/*-------------Right---------------*/
export const SettingsRight = styled.div`
   background-color: #fff;
   margin: 20px;
  
  padding: 15px;
  flex: 1;
`;
