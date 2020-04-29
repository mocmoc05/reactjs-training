import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increaseNumber } from '../redux/actions';

const RdxB = (props) => {
    console.log({ props })
    return (
        <div style={{ width: '50%', textAlign: 'center' }}>
            <p>Redux B</p>
            <p>Number: {props.number}</p>
            <button
                onClick={() => { props.onIncrease() }}>
                Update
            </button>
        </div>
    )
};
const mapStateToProps = state => ({
    number: state.reducer1.number
});

const mapDispatchToProps = dispatch => ({
    onIncrease: () => dispatch(increaseNumber())
})

export default connect(mapStateToProps, mapDispatchToProps)(RdxB);