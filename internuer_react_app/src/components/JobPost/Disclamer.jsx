import React from 'react'
import { Link } from 'react-router-dom'
import Disc from '../../css/App.module.css'

const Disclamer = () => {
    return (
        <div className={Disc.Disclamer}>
            <h6>Save your self from fraud</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <strong> Rerum, reiciendis. </strong> Quod hic possimus corrupti deserunt nostrum voluptas <Link to='#'><strong> notify us</strong></Link> incidunt quia praesentium? <strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, fuga?</strong></p>
        </div>
    )
}

export default Disclamer