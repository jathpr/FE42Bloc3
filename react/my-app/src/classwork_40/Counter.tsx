import { useEffect, useState } from "react"

type CounterProps = {
    initialCount: number
}

export const Counter = (props: CounterProps) => {
    const [count, setCount] = useState(props.initialCount || 0)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => console.log("effect"))

    return (
        <>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>++</button>
            <button onClick={() => setCount(count - 1)}>--</button>
            <button onClick={() => setCount(0)}>reset</button>
            <input type="text" onChange={(event) => setInputValue(event.target.value)}></input>
            <button onClick={() => setCount(count + Number(inputValue))}>add from input</button>
        </>
    )
}
