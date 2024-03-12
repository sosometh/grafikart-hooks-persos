import { useState } from "react";

export function useIncrement(initial){
    const [state, setState] = useState(initial)

    const increment = () => {
        setState(v => v + 1)
    }

    const decrement = () => {
        setState(v => v - 1)
    }

    return [state, increment, decrement]
}