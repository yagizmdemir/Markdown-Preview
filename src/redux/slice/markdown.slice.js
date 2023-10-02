import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
    name: 'text',
    initialState: {
        text: ''
    },
    reducers: {
        updateText: (state, action) => {
            state.text = action.payload.text
        }
    },
})


// Constant variables
export const textState = (state) => state.text.text;

// Export reducers
export const { updateText } = textSlice.actions;
export default textSlice.reducer;