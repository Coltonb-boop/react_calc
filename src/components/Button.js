import React from 'react'

const isOperator = val => {
    return !isNaN(val) || val === '.' || val === 'CA';
};

const Button = props => {
    return (
        <button
        className='btn'
        onClick={() => props.clicked(props.text)}
        style={{ backgroundColor: isOperator(props.text) ? 'grey' : 'lightBlue' }}>
            {props.text ? props.text : ''}
        </button>
    )
}

export default Button
