import React from 'react'
import './TotalCard.css'

const TotalCard = ({...otherprops}) => {
    return (
        <div className='total-cases'>
            
            <div className="total-sample-tested">
                <div className="t-s-t1 border">
                    <h2 className='item1'>Total Sample Tested</h2>
                </div>
                <div className="t-s-t1 border">
                    <h2 className='item1'>{otherprops.totalSamplesTested}</h2>
                </div>
            </div>

            <div className="total-confirmed-cases">
                <div className="t-c-c1 border">
                    <h2 className='item2a'>Total Confirmed Cases</h2>
                </div>
                <div className="t-c-c1 border">
                    <h2 className='item2b'>{otherprops.totalConfirmedCases}</h2>
                </div>
            </div>
            <div className="total-active-cases">
                <div className="t-a-c1 border">
                    <h2 className='item3'>Total Active Cases</h2>
                </div>
                <div className="t-a-c2 border">
                    <h2 className='item3'>{otherprops.totalActiveCases}</h2>
                </div>
            </div>
            <div className="total-discharged">
                <div className="t-d1 border">
                    <h2 className='item4'>Total Discharged</h2>
                </div>
                <div className="t-d1 border">
                    <h2 className='item4'>{otherprops.discharged}</h2>
                </div>
            </div>
            <div className="death">
                <div className="d1 border">
                    <h2 className='item5'>Death</h2>
                </div>
                <div className="d1 border">
                    <h2 className='item5'>{otherprops.death}</h2>
                </div>
            </div>
        </div>
    )
}

export default TotalCard
