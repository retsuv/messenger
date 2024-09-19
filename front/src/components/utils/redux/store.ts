import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from './features/messages/messagesSlice'
import userNameReducer from './features/username/userNameSlice'
import companionsSlice from './features/companions/companionsSlice';

export const store = configureStore({
    reducer: {
        companions: companionsSlice,
        messageList: messagesReducer,
        username: userNameReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;