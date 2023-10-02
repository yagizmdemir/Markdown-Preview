import { configureStore } from "@reduxjs/toolkit";
import markdownSlice from "./slice/markdown.slice";

export const store = configureStore({
    reducer: {
        text: markdownSlice
    }
})