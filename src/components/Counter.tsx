import { useState } from "react";
import css from "./Counter.module.scss";

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className={css.btn}>+</button>
            <button onClick={decrement} className={css.btn}>-</button>
        </div>
    );
};

export default Counter;