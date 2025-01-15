import './app.css';
import './buttons.scss';
import { useCallback, useEffect, useState } from 'react';
import rand from './Functions/rand.js';
import Square from './Components/048/Square';
import randomColor from './Functions/randomColor.js';

export default function App() {
   

    const [sq, setSq] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [count, setCount] = useState(1);

    const disableEnableButton = useCallback(d => {
        setButtonDisabled(d);
    }, [setButtonDisabled]);

    useEffect(_ => {
        console.log('App komponentas');
    }, [count]);

    useEffect(_ => {
        if (sq.length >= 5) {
            console.log('Per daug kvadratu');
            disableEnableButton(true);
        } else {
            setButtonDisabled(false);
        }

    }, [sq, disableEnableButton, setButtonDisabled]);

    const addSq = _ => {
        setSq(s => [...s, {
            id: Date.now(),
            number: rand(1000, 9999),
            color: randomColor()
        }]);
    }

    const deleteSq = id => {
        setSq(s => s.filter(sq => sq.id !== id));
    }

    const changeColor = id => {
        setSq(s => s.map(sq => sq.id === id ? { ...sq, color: randomColor() } : sq));
    }


    return (
        <div className="app">
            <header className="app-header">
                <h1>{count}</h1>
                <div className="sq-bin">
                    {
                        sq.map(s => <Square key={s.id} sq={s} deleteSq={deleteSq}  changeColor={changeColor} />)
                    }
                </div>
                <button onClick={addSq} className="yellow" disabled={buttonDisabled}>ADD</button>
                <button onClick={_ => setSq([])} className="red">DELETE ALL</button>
                <button onClick={_ => setCount(c => c + 1)}>+1</button>

            </header>
        </div>
    );
}