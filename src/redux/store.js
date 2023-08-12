import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./pcBuilderSlice";

export const store = configureStore({
    reducer: {
        pcBuilder: pcBuilderReducer
    },
});
