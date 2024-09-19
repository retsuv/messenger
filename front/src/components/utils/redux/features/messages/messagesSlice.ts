import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IMessage {
    message: string
    date: string
    author: string
}

interface IMessages {
    messages: IMessage[]
}

const initialState: IMessages = {messages: []};

const messagesSlice = createSlice({
    name: "messageList",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<IMessage>) => {
            state.messages.push(action.payload);
        }
    }
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;