import React from "react";
import styled from "styled-components";
import SecionBodyContainer from "../../components/Settings/SectionBodyContainer";
import SectionHeader from "../../components/Settings/SectionHeader";
import SectionsWraper from "../../components/Settings/SectionWrapper";
const currency =  '../../constants/currency.json'
const Currency = () => {
  const [languages, setLngs] = React.useState([
    { id: 1, name: "United States Dollar (USD)" },
    { id: 0, name: "Canadia Dollar (CAD)" },
    { id: 1, name: "Euro (EURO)" },
    { id: 19, name: "British Pound (GBP)" },
    { id: 322, name: "Austrailian Dollar (AUD)" },
    { id: 422, name: "Japaense Yen (JPY) " },
  ]);
  return (
    <SectionsWraper>
    <SecionBodyContainer>
      <SectionHeader title="Currency" />
      <p style={{marginTop:'20px'}}>Choose your default currency:</p>
      <LanguageContainer>
        <Left>
          {languages.map((lang) => (
            <Lang>
              <Circle />
              <p>{lang.name}</p>
            </Lang>
          ))}
        </Left>

      </LanguageContainer>
    </SecionBodyContainer>
    </SectionsWraper>
  );
};

export default Currency;
const LanguageContainer = styled.div`
  display: flex;
`;

const Left = styled.div`
  padding: 15px;
  line-height: 18px;
  border-right: 1px solid #f1f1f1;
`;
const Lang = styled.div`
display: flex;
margin-top: 10px;
align-items: center;
`;
const Right = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Circle = styled.div`
width: 20px;
margin-right: 5px;
height: 20px;
border-radius: 50%;
border: 1px solid #d1d1d1;
`;
