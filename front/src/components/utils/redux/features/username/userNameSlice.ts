import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUserName {
    userName: string
}

const initialState:IUserName = {userName: ""}; 

const userNameSlice = createSlice({
    name: "username",
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        }
    }
});

export const { setUserName } = userNameSlice.actions;
export default userNameSlice.reducer;