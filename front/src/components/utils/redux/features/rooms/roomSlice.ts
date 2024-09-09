import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IRoom {
    currentRoom: string
    rooms: string[]
}

const initialState: IRoom = {currentRoom: "", rooms: []};

const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        changeCurrentRoom: (state, action: PayloadAction<string>) => {
            state.currentRoom = action.payload;
        },
        addRoom: (state, action: PayloadAction<string>) => {
            state.rooms.push(action.payload);
        }
    },
});

export const { changeCurrentRoom, addRoom } = roomSlice.actions;
export default roomSlice.reducer;