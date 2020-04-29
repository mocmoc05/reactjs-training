import React, { useState, useEffect } from 'react';

function CompA(props) {
    const [number, setNumber] = useState(5);
    const [text, setText] = useState('');

    const getData = () => {

    }

    useEffect(getData, []); // did mount

    useEffect(() => {
        console.log('comp A')
    }, [number]) // did update

    return (
        <div>
            <p>Component A: {number}</p>
            <button onClick={() => setNumber(number + 1)}>
                Change number CompA
            </button>
            <input
                placeholder={'nhap text'}
                value={text}
                onChange={event => { setText(event.target.value) }}
            />
        </div>
    );
};

export default CompA;

// su dung function component;
