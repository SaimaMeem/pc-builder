const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    categories: [],
};
const pcBuilderSlice = createSlice({
    initialState,
    name: "pc-builder",
    reducers: {
        addToBuild: (state, action) => {
            state.categories = [...state.categories, action.payload];
        },
    },
});

export const { addToBuild } = pcBuilderSlice.actions;
export default pcBuilderSlice.reducer;
