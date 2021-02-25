import React from 'react'
import { Link } from 'react-router-dom'
import StateCard from '../../Components/Card/StateCard'
import './DisplayState.css'

const DisplayState = ({userReader}) => {

    const totalcases = userReader()
    const stateData = totalcases.data.states
    return (
        <>
        <small>To return to the home page. Please, <Link to ='/'>click me</Link></small>
        <div className="display-data"> 
            {
                stateData && 
                stateData.map(({...otherprops}) => {
                    return <StateCard otherprops ={otherprops}/>
                })
            }
            <small>To return to the home page. Please, <Link to ='/'>click me</Link></small>
        </div>
        </>
    )
}

export default DisplayState
