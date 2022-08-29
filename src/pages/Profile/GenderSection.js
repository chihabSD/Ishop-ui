import React, { useState } from "react";
import styled from "styled-components";
// import { AuthContainer } from "../../styles/Containers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import FormInputs from "../../components/Inputs/FormInputs";
// import FormButton from "../../components/Inputs/FormButton";
import { Checkbox, Divider } from "antd";
import TextArea from "../../components/Form/TextArea";
import FormInputs from "../../components/Form/FormInput";
import Primary from "../../components/Buttons/Primary";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants/theme";
// import TextArea from "../../components/Inputs/TextArea";

const RegisterSchema = yup.object().shape({
  city: yup.string().required("City is required"),
  birthdate: yup.date().required("Required"),
  description: yup
    .string()
    .min(50, "Must be more than 10 characters")
    .required("This field is requried"),
});

const GenderSection = () => {
const [selectedItem , setSelectedItem]= useState(null)
  const [gender, setGender] = useState([
    { id: 0, name: "male" },
    { id: 1, name: "female" },
  ]);
  const {
    register,
    formState: { errors, isValid, isDirty, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });
  const onSubmit = async ({ city, birthdate, description }) => {
    // Submit data to server
    try {
    } catch (error) {
      console.log(error);
    }
  };
const handleSelectedItem = (item) => {
setSelectedItem(item.id)
    console.log(item);
}
  return (
    <Container>
      {/* <div>Please select a categroy </div> */}
      <span> Gender </span>
      {gender.map((item) => (
        <CheckBox key={item.id} onClick={(() => handleSelectedItem(item))}>
          <Circle selectedItem={selectedItem} id={item.id}/>
          <span>{item.name}</span>
        </CheckBox>
      ))}
    </Container>
  );
};

export default GenderSection;
const Container = styled.div`
  /* background-color: yellow; */
  width: 100%;
  /* height: 200px; */
  padding: 20px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  span {
    font-weight: 300;

    font-weight: 700;
    font-size: 17px;
    margin-left: 20px;
    margin-right: 30px;
  }
`;
const CheckBox = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 140px;
  align-items: center;
  span {
    font-weight: 400;

    margin: 4px;
    font-size: 15px;
  }
  /* margin-right: 20px; */
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 0px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ selectedItem, id }) => (selectedItem  === null ?  'white' : selectedItem === id ? 'blue':'white')};
  border: 1px solid grey;
`;
