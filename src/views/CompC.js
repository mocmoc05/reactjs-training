import React, { useEffect } from 'react';

const CompC = (props) => {
    useEffect(() => {
        console.log('comp C');
    }, [props.name])
    return (
        <div>
            <p>Component C</p>
            <p>Name {props.name}</p>
            <p>Value {props.value}</p>
        </div>
    )
};

export default CompC;