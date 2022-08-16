import { OneToOneOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import ImageCountainer from "../../components/ImageContainer";
import FormButton from "../../components/Inputs/FormButton";
import { useRedux } from "../../hooks/useRedux";
const ImageUpload = () => {
  const { user } = useRedux();
  return (
    <Container>
      <div style={{display:'flex'}}>
        <ImageCountainer
          img={user.picture}
          style={{ width: "100px", height: "100px" }}
        />

        <div>
          <FormButton
            label="Update picture"
            textColor={"#111"}
            style={{ borderRadius: "3px" }}
          />
          <FormButton
            label="Delete"
            textColor={"#111"}
            style={{ borderRadius: "3px", marginTop: "20px" }}
          />
        </div>
      </div>

      <p>
        {" "}
        Must be a .jpg, .gif or .png file smaller than 10 MB and at least 400px
        by 400px.{" "}
      </p>
    </Container>
  );
};

export default ImageUpload;
const Container = styled.div`
  /* background-color: yellow; */
  width: 100%;
  /* height: 200px; */
  padding: 20px;
  /* display: flex; */
  border-bottom: 1px solid #f1f1f1;
p {
    margin-top: 15px;
    font-weight: 300;

}
`;
