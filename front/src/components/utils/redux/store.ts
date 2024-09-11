import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './features/rooms/roomSlice';
import messagesReducer from './features/messages/messagesSlice'

export const store = configureStore({
    reducer: {
        room: roomReducer,
        messageList: messagesReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;