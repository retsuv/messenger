import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMessage {
    text: string
    date: string
    author: string
}

interface ICompanion {
    name: string
    messages: IMessage[]
}

interface IInitialState {
    currentCompanionName: string
    currentCompanionMessages: IMessage[],
    companions: ICompanion[],
}

const initialState: IInitialState = {
    currentCompanionName: "Saved Messages",
    currentCompanionMessages: [],
    companions: [{name: "Saved Messages", messages: []}],
}

const companionsSlice = createSlice({
    name: "companions",
    initialState,
    reducers: {
        addCompanion: (state, action: PayloadAction<string>) => {
            state.companions.push({name: action.payload, messages: []});
        },
        setCurrentCompanion: (state, action: PayloadAction<string>) => {
            if(state.currentCompanionName == action.payload) return;
            const prevCompanion = {name: state.currentCompanionName, messages: state.currentCompanionMessages};
            state.companions.forEach((element: ICompanion, index: number) => {
                if(element.name == state.currentCompanionName) state.companions[index] = prevCompanion;
                if(element.name == action.payload) state.currentCompanionMessages = element.messages;
            })
            state.currentCompanionName = action.payload;
        },
        addMessage: (state, action: PayloadAction<IMessage>) => {
            state.currentCompanionMessages.push(action.payload);
        },
    },
});

export const { addCompanion, setCurrentCompanion, addMessage} = companionsSlice.actions;
export default companionsSlice.reducer; 