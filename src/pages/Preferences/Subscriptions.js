import { CiCircleFilled, IeCircleFilled } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import SecionBodyContainer from "../../components/Settings/SectionBodyContainer";
import SectionHeader from "../../components/Settings/SectionHeader";
import SectionsWraper from "../../components/Settings/SectionWrapper";

const PostMail = () => {
  const [languages, setLngs] = React.useState([
    { id: 1, name: "Receive postal mail from us ?" },
    { id: 0, name: "Receive phone calls from us ?" },
  ]);
  return (
    <SectionsWraper>
    <SecionBodyContainer>
      <SectionHeader title="Postal mailing" />
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

export default PostMail;
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
