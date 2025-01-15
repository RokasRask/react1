import './app.css';
import './buttons.scss';
import { useEffect, useState } from 'react';
import rand from './Functions/rand.js';
import Square from './Components/048/Square';
import randomColor from './Functions/randomColor.js';

function App() {

    const [sq, setSq] = useState([]);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const disableEnableButton = (d) => {
        setButtonDisabled(d);
    };

    useEffect(() => {
        if (sq.length >= 5) {
            console.log('Per daug kvadratų');
            disableEnableButton(true);
        } else {
            disableEnableButton(false);
        }
    }, [sq]);

    const addSq = () => {
        setSq((s) => [
            ...s,
            {
                id: Date.now(),
                number: rand(1000, 9999),
                color: randomColor(),
            },
        ]);
    };

    const deleteSq = (id) => {
        setSq((s) => s.filter((sq) => sq.id !== id));
    };

    const changeSqColor = (id) => {
        setSq((s) => s.map((sq) => 
            sq.id === id ? { ...sq, color: randomColor() } : sq
        ));
    };

    const clearAllSquares = () => {
        setSq([]);
    };

    return (
        <div className="app">
            <header className="app-header">
                <div className='sq-bin'>
                    {
                        sq.map((s) => (
                            <Square key={s.id} sq={s} deleteSq={deleteSq} changeSqColor={changeSqColor} />
                        ))
                    }
                </div>

                <button className='yellow' onClick={addSq} disabled={buttonDisabled}>ADD</button>
                <button className='red' onClick={clearAllSquares}>CLEAR ALL</button>
            </header>
        </div>
    );
}

export default App;