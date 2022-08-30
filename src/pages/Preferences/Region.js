import React from "react";
import styled from "styled-components";
import SecionBodyContainer from "../../components/Settings/SectionBodyContainer";
import SectionHeader from "../../components/Settings/SectionHeader";
import SectionsWraper from "../../components/Settings/SectionWrapper";
import {countryList} from '../../constants/countries'
const Reigon = () => {
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
      <SectionHeader title="Region" />
      <p style={{marginTop:'20px'}}>Set your region to help us show you custom contents from your area </p>
      <LanguageContainer>
        <Select>

          {countryList.map((lang) => (
            <Option>
              {lang}
            </Option>
          ))}
        {/* <Left>
          {countryList.map((lang) => (
            <Lang>
              <Circle />
              <p>{lang}</p>
            </Lang>
          ))}
        </Left> */}

        </Select>
      </LanguageContainer>
    </SecionBodyContainer>
    </SectionsWraper>
  );
};

export default Reigon;
const LanguageContainer = styled.div`
  display: flex;
`;

const Select = styled.select`
padding: 10px;
line-height: 18px;
margin-top: 10px;
`;
const Option = styled.option`
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
