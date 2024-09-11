import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IMessages {
    messages: string[]
}

const initialState: IMessages = {messages: []};

const messagesSlice = createSlice({
    name: "messageList",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<string>) => {
            state.messages.push(action.payload);
        }
    }
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;