import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IRoom {
    currentRoom: string
}

const initialState: IRoom = {currentRoom: ""};

const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        changeRoom: (state, action: PayloadAction<string>) => {
            state.currentRoom = action.payload;
        },
    },
});

export const { changeRoom } = roomSlice.actions;
export default roomSlice.reducer;