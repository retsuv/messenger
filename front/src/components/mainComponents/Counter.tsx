import { incrementByAmount } from "../utils/redux/features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../utils/redux/store";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <>
            <p className="text-3xl">
                {count}
            </p>
            <button
                className="mr-5"
                onClick={() => dispatch(incrementByAmount(1))}
            >
                increment
            </button>
            <button
                onClick={() => dispatch(incrementByAmount(-1))}
            >
                decrement
            </button>
        </>
    )
}