import { CiCircleFilled, IeCircleFilled } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import SecionBodyContainer from "../../components/Settings/SectionBodyContainer";
import SectionHeader from "../../components/Settings/SectionHeader";
import SectionsWraper from "../../components/Settings/SectionWrapper";

const Language = () => {
  const [languages, setLngs] = React.useState([
    { id: 1, name: "Arabic" },
    { id: 0, name: "Deutsch" },
    { id: 1, name: "English (UK)" },
    { id: 19, name: "English (US)" },
    { id: 322, name: "Español" },
    { id: 422, name: "Français" },
    { id: 322, name: "Italiano" },
    { id: 30, name: "日本語" },
    { id: 33, name: "Nederlands" },
    { id: 333, name: "Polski" },
    { id: 233, name: "Português" },
  ]);
  return (
    <SectionsWraper>
    <SecionBodyContainer>
      <SectionHeader title="Language" />
      <p style={{marginTop:'20px'}}>Choose your default Language:</p>
      <LanguageContainer>
        <Left>
          {languages.map((lang) => (
            <Lang>
              <Circle />
              <p>{lang.name}</p>
            </Lang>
          ))}
        </Left>

        <Right>
          <p>View the site in English (UK) </p>
        </Right>
      </LanguageContainer>
    </SecionBodyContainer>
    </SectionsWraper>
  );
};

export default Language;
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
