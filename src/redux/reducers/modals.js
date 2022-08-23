import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categoriesModal: false,
};
export const modalSlicer = createSlice({
  name: "modals",
  initialState,
  reducers: {
       toggleCategoriesModal: (state, action) => {
      state.categoriesModal = !state.categoriesModal;
    },
  },
});
export const { toggleCategoriesModal } = modalSlicer.actions;
export default modalSlicer.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//  categoriesModdal: false,
// };
// export const modalReducer = createSlice({
//   name: "modal",
//   initialState,
//   reducers: {
//     toggleCategoriesModal: (state, action) => {
//       state.categoriesModdal = !state.categoriesModdal;
//     },
   
//   },
// });
// export const {
// toggleCategoriesModal
// } = modalReducer.actions;
// export default modalReducer.reducer;
