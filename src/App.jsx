import './crud.scss';
import axios from 'axios';
import Create from './Components/crud/Create';
import { useEffect, useState } from 'react';
import { URL } from './Constants/crud'

export default function App() {

    console.log('APP RENDER');

    const [storeData, setStoreData] = useState(null);

    useEffect(_ => {
        if (null === storeData) {
            return;
        }

        axios.post(URL, storeData)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });

    }, [storeData])
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Create setStoreData={setStoreData}/>
                </div>
                <div className="col-8">
                    List
                </div>
            </div>
        </div>
    );
}
