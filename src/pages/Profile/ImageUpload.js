import { OneToOneOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import ImageCountainer from "../../components/ImageContainer";
// import FormButton from "../../components/Inputs/FormButton";
import { useRedux } from "../../hooks/useRedux";
const ImageUpload = () => {
  const { user } = useRedux();
  return (
    <Container>
      <FileUploadContianer>
        <h1> Profile Picture </h1>
        <div style={{ marginLeft: 200 }}>
          <input type="file" id="actual-btn" />
        </div>
      </FileUploadContianer>
      <div style={{ lineHeight: "20px", padding: "20px" }}>
        <ImageCountainer
          img={
            "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          style={{ width: "100px", height: "100px" }}
        />
        <div>
          <p>
            Must be a .jpg, .gif or .png file smaller than 10 MB and at least
            400px by 400px
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ImageUpload;
const Container = styled.div`
  width: 100%;

  border-bottom: 1px solid #f1f1f1;
  p {
    margin-top: 15px;
    font-weight: 300;
  }
`;

const FileUploadContianer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  width: 100%;
  line-height: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f1f1f1;
  padding: 20px;
  h1 {
    font-size: 16px;
    font-weight: 600;
  }

`;
