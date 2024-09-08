"use client"

import { store } from "@/components/utils/redux/store";
import { Provider } from "react-redux";

export default function Provide({children} : {children : React.ReactNode}) {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}