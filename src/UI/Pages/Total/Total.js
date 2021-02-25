import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import fetchCases from '../../../Statement/redux/action/creator/casesActionCreator'
import TotalCard from '../../Components/Card/TotalCard'

const Total = ({userReader}) => {
    
   const totalcases = userReader()
   const dispatch = useDispatch();
    console.log(totalcases.data.states)
    const handledatas = () => {
        dispatch(fetchCases(totalcases))
    }
    useEffect(() => {
        handledatas()
    }, [])

    return (
        <div>
                <TotalCard 
                totalSamplesTested = {totalcases.data.totalSamplesTested} 
                totalConfirmedCases = {totalcases.data.totalConfirmedCases} 
                totalActiveCases = {totalcases.data.totalActiveCases} 
                discharged = {totalcases.data.discharged}
                death = {totalcases.data.death}
                />
            
            <small>To view cases by state. Please, <Link to ='/displayState'>click me</Link></small>
        </div>
    )
}

export default Total
