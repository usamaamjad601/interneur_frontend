import React from 'react'
import positionIcon from '../../assets/icons/No of positions icon.svg'
import Open from '../../css/App.module.css'

const OpenPosition = (props) => {
    return (
        <div >
            <div className={`d-flex p-2 py-3 ${Open.NoPosition}`}>
                <img src={positionIcon} alt="positionIcon" width={50} />
                <div className='d-flex flex-column'>
                    <p>Open Position</p>
                    <h4>{props.NumofPosition}</h4>
                </div>
            </div>
        </div >
    )
}

export default OpenPosition