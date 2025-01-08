import React, { useState } from 'react';

export default function Mygtukai() {
    const [spalva, setSpalva] = useState('blue');
    const [count, setCount] = useState(5);

    return (
        <>
            <div className="mygtukai">
                <button className="green" onClick={_ => setSpalva('green')}>Pažaliuoti</button>
                <button className="red" onClick={_ => setSpalva('red')}>Paraudonuoti</button>
                <button className="yellow" onClick={_ => setCount(c => c + 1)}>+1</button>
            </div>

            <div style={{
                width: '100px',
                height: '100px',
                backgroundColor: spalva,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>{count}</div>
        </>
    );
}
