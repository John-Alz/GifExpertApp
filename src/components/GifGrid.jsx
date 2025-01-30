import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useState } from "react";

export default function GifGrid({ category }) {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        getGifs(category)
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>Plus</button>
        </>
    )
}
