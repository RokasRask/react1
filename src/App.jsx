import './app.css';
import './buttons.scss';
import { useEffect, useState } from 'react';
import rand from '.Functions/rand.js';
import Square from './Components/048/Square';

function App() {

    // console.log('App komponentas');

    const [sq, setSq] = useState([]);
    const [buttonDisabled, setButtonDisabled]

    const disableEnableButton = d => {
        setButtonDisabled(d);
    }

    useEffect (_ => {
        if (sq.length >= 5) {
            console.log('Per daug kvadratų');
            disableEnableButton(true);
        } else [
            disableEnableButton(false);
        ]
    }, [sq])

    const addSq = _ => {
        setSq(s => [...s, {
            id: Date.now(),
            number: rand(1000, 9999)
        }])
    }

    const deleteSq = id => {
        setSq(s => s.filter(sq => sq.id !== id))
    }


    return (
        <div className="app">
            <header className="app-header">
                <div className='sq-bin'>
                    {
                        sq.map(s => <Square key={s.id}) />
                    }
                </div>


                <button className='yellow' onClick={addSq} >ADD</button>
            </header>
        </div>

    );
}

export default App;