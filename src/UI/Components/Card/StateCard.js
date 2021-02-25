import React from 'react'
import './StateCard.css'

const StateCard = ({otherprops}) => {
    return (
        <div className='state-cases'>
            <h1 className='what-state'>{otherprops.state}</h1>
            <div className="confirmed-cases">
                <div className="c-c1 cases">
                    <h2 className='tem1'>Confirmed cases</h2>
                </div>
                <div className="c-c2 cases">
                    <h2 className='tem1'>{otherprops.confirmedCases}</h2>
                </div>
            </div>
            <div className="cases-on-admission">
                <div className="c-o-a1 cases">
                    <h2 className='tem2'>Cases on Admission</h2>
                </div>
                <div className="c-o-a2 cases">
                    <h2 className='tem2'>{otherprops.casesOnAdmission}</h2>
                </div>
            </div>

            <div className="discharged">
                <div className="dis-1 cases">
                    <h2 className='tem3'>Discharged</h2>
                </div>
                <div className="dis-1 cases">
                    <h2 className='tem3'>{otherprops.discharged}</h2>
                </div>
            </div>
            <div className="state-death">
                <div className="deat1 cases">
                    <h2 className='tem4'>Death</h2>
                </div>
                <div className="deat1 cases">
                    <h2 className='tem4'>{otherprops.death}</h2>
                </div>
            </div>
        </div>
    )
}

export default StateCard
