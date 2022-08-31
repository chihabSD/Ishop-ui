import { CiCircleFilled, IeCircleFilled } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import Primary from "../../components/Buttons/Primary";
import Secondary from "../../components/Buttons/Secondary";
import SecionBodyContainer from "../../components/Settings/SectionBodyContainer";
import SectionHeader from "../../components/Settings/SectionHeader";
import SectionsWraper from "../../components/Settings/SectionWrapper";

const Notifications = () => {
  const [notifications, setNotifications] = React.useState([
    { id: 1, name: "Someone sends me a message" },
    { id: 0, name: "I send a Message" },
    { id: 1, name: "Someone follows me " },
  ]);
  return (
    <SectionsWraper>
      <SecionBodyContainer>
        <SectionHeader title="Your notifications" />
        <p style={{ marginTop: "20px", marginBottom: "20px", color: "grey" }}>
          EMAIL ME WHEN....
        </p>

        {notifications.map((item) => (
          <LanguageContainer>
            <Circle />

            <p>{item.name}</p>
          </LanguageContainer>
        ))}
      </SecionBodyContainer>

      <SecionBodyContainer>
        <SectionHeader title="Your Subscriptions" />
        <p
          style={{
            marginTop: "20px",
            fontSize: "15px",
            marginBottom: "20px",
            color: "black",
          }}
        >
          Check the subscriptions you would like to receive:
        </p>

        <p style={{ marginTop: "20px", marginBottom: "20px", color: "grey" }}>
          GENERAL ....
        </p>

        {notifications.map((item) => (
          <LanguageContainer>
            <Circle />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
              }}
            >
              <p>{item.name}</p>
              <p>
                Get the very best of Etsy - from new trends and recommendations,
                to our biggest sales events and collaborations - delivered right
                to
              </p>
            </div>
          </LanguageContainer>
        ))}
        <p style={{ marginTop: "30px", marginBottom: "20px", color: "grey" }}>
          FOR SELLERS ....
        </p>

        {notifications.map((item) => (
          <LanguageContainer>
            <Circle />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
              }}
            >
              <p>{item.name}</p>
              <p>
                Get the very best of Etsy - from new trends and recommendations,
                to our biggest sales events and collaborations - delivered right
                to
              </p>
            </div>
          </LanguageContainer>
        ))}
      </SecionBodyContainer>
      <div style={{ margin: "10px" }}>
        <Secondary title="Save settings " />
      </div>
    </SectionsWraper>
  );
};

export default Notifications;
const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
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
  width: 15px;
  margin-right: 5px;
  height: 15px;
  /* border-radius: 50%; */
  border: 1px solid #d1d1d1;
`;
