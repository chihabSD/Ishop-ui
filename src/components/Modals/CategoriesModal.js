import {
  CaretLeftFilled,
  CaretRightFilled,
  CloseOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { categories } from "../../constants/categories";
import { useRedux } from "../../hooks/useRedux";
import { toggleCategoriesModal } from "../../redux/reducers/modals";
// import { categories, data } from "./categories";
import "./test.css";
// import "./style.css";

const CategoriesModal = () => {
  const { dispatch } = useRedux();

  const [topLevel, setTopLevel] = useState("Browse categories");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectedCategory = (data) => {
    // console.log('selected item', data);
    setTopLevel(data.name);
    // setSelectedCategory()
    setSelectedCategory({ ...selectedCategory, ...data });
  };

  return (
    <OverLayContainer>
      <Wrapper>
        <Header
          dispatch={dispatch}
          toggleCategoriesModal={toggleCategoriesModal}
        />
        {/* <ParentWrapper> */}
        <Parent
          categories={categories}
          topLevel={topLevel}
          selectedCategory={selectedCategory}
          handleSelectedCategory={handleSelectedCategory}
          setSelectedCategory={setSelectedCategory}
          dispatch={dispatch}
          toggleCategoriesModal={toggleCategoriesModal}
        />
        {/* </ParentWrapper> */}
      </Wrapper>
    </OverLayContainer>
  );
};
const Header = ({ dispatch, toggleCategoriesModal }) => {
  return (
    <ModalHeader>
      <h1>DUKAN</h1>
      <CloseOutlined
        onClick={() => dispatch(toggleCategoriesModal())}
        style={{ fontSize: "25px" }}
      />
    </ModalHeader>
  );
};

const Child = ({
  child,
  childrenExist,
  handleSelectedCategory,
  dispatch,
  toggleCategoriesModal,
  toggleChild,
}) => {
  const [childVisible, setChildVisible] = useState(false);
  const handleSelection = (child) => {
    setChildVisible((prev) => !prev);
    handleSelectedCategory(child);
    toggleChild();
  };
  return (
    <>
      {childrenExist && childVisible && (
        <div className="child">
          <Header
            dispatch={dispatch}
            toggleCategoriesModal={toggleCategoriesModal}
          />
          <CategoriesHeader>
            <LeftOutlined onClick={() => handleSelection(child)} />
            {/* <LeftOutlined /> */}
            <p style={{ fontWeight: "500", fontSize: "20px", marginLeft: 30 }}>
              {child.name}
            </p>
          </CategoriesHeader>
          {/* <p onClick={() => handleSelection(child)}>Back</p> */}
          <Parent
            categories={child}
            handleSelectedCategory={handleSelectedCategory}
          />
        </div>
      )}

      <div style={{ backgroundColor: "white" }}>
        {childrenExist && (
          <div
            className={`${childVisible ? "parentInactive" : ""}`}
            // onClick={() => setChildVisible((prev) => !prev)}
            onClick={() => handleSelection(child)}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              // margin: 10,
            }}
          >
            <p>{child.name}</p>

            {<RightOutlined />}
          </div>
        )}
      </div>
    </>
  );
};

const Parent = ({
  categories,
  topLevel,
  selectedCategory,
  handleSelectedCategory,
  setSelectedCategory,
  dispatch,
  toggleCategoriesModal,
}) => {
  const [childClicked, setChildClicked] = useState(false);

  const toggleChild = () => {
    setChildClicked((v) => !v);
  };
  console.log(topLevel);
  return (
    <div
      style={{
        // lineHeight: "20px",
        // margin: 10,
        padding: "20px",
        // backgroundColor: "yellow",
        height: "100vh",
        width: "100%",
        padding: "20px",
      }}
    >
      <div style={{ backgroundColor: "white" }}>
        {topLevel ? (
          topLevel != "Browse categories" ? (
            <CategoriesHeader
            style={{
              backgroundColor: "white",
              height: "100%",
              padding: 20,
              marginBottom: "30px",
            }}
          >
            <p style={{ fontWeight: "500", fontSize: "20px" }}>
              Browese categories
            </p>
          </CategoriesHeader>
          ) : null
        ) : null}
      
        {categories.children.map((child) => {
          const childrenExist = child.children ? true : false;
          return (
            <Child
              toggleChild={toggleChild}
              dispatch={dispatch}
              toggleCategoriesModal={toggleCategoriesModal}
              child={child}
              childrenExist={childrenExist}
              handleSelectedCategory={handleSelectedCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

const style = {
  backgroundColor: "orange",
  margin: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
};

export default CategoriesModal;
const OverLayContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  /* top: 10;
  right: 0;
  over
  bottom: 100;
  left: 0; */
  z-index: 1000;
  /* background-color: black; */
  display: flex;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  background-color: rgba(0, 0, 0, 0.5);

  align-items: center;
`;
const Wrapper = styled.div`
  height: 100%;
  background-color: white;
  padding: 20px;
  width: 20%;
  /* cursor: pointer; */
  h4 {
    text-align: center;
    font-weight: 600;
    margin-bottom: 15px;
  }
`;

const ModalHeader = styled.div`
  margin-bottom: 20px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
  }
`;

const CategoriesHeader = styled.div`
  background-color: white;
  /* margin-bottom: 35px; */
  align-items: center;
  display: flex;
  justify-content: center;
`;
