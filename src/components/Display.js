import React from 'react'

const Display = props => {
    return (
        <div className='dis'>{props.input ? props.input : ''}</div>
    )
}

export default Display
