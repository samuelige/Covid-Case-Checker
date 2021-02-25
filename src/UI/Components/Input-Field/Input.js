import React from 'react'
import './Input.scss'

const Input = ({handleChange, label, value, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input'  onChange={(e) => handleChange(e)} {...otherProps}/>
            {
                label && 
            (<label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>{label}</label>)
            }
        </div>
    )
}

export default Input
