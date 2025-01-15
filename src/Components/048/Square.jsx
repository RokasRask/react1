import { useEffect } from "react";

export default function Square({ sq, deleteSq, changeSqColor }) {
    useEffect(() => {
        console.log('NAUJAS Square komponentas', sq.number);

        return () => {
            console.log('Square komponentas panaikintas', sq.number);
        };

    }, [sq.number]);

    return (
        <div className="sq" onDoubleClick={() => deleteSq(sq.id)} onClick={() => changeSqColor(sq.id)} 
            style={{ backgroundColor: sq.color }}
        >
            {sq.number}
        </div>
    );
}