import { useState } from "react";
import NiceSq from "./NiceSq";

export default function ButtonsTest() {

const [counter, setCounter] = useState(0);
const [size, setSize] = useState(100);

    const grButton = _ => {
        console.log('GREEN button clicked');
    }

    const blButton = a => {
        console.log('BLUE button clicked', a);
    }

    const redButton = _ => {
        console.log('RED button clicked');
        // setCounter(counter + 1); BLOGAI, nors ir veikia
        setCounter(ct => ct + 1);
    }

    const changeSize = diff => {
        if (diff === null){
            setSize(100);
            return
        }
        setSize(sz => sz + diff);
    }

    return (
        <div>
        <button className="green" onClick={grButton}>Button</button>

        <button className="blue" onClick={_ => blButton('Informacija A')}>Button</button>

        <button className="red" onClick={redButton}>+1</button>

        <button className="yellow" onClick={_ => changeSize(10)}>+10</button>
        <button className="yellow" onClick={_ => changeSize(-12)}>-12</button>

        <button className="yellow" onClick={_ => changeSize(null)}>100 again</button>

        <h1>{counter}</h1>

        <NiceSq size={size} />

        </div>
    );
}