import React, { useState } from 'react'
import Input from '../Components/Input-Field/Input'

const Form = () => {

    const [state, setState] = useState({
        search: ''
    })

    const handleChange = (e) => {
        const value = e.target.value
        setState(value)
    }
    return (
        <div className='search-form'>
            <Input 
            type='text'
            name='search'
            value= {state.searchedValue}
            handleChange={handleChange}
            label='Search State'
            required/>
        </div>
    )
}

export default Form
