import React from 'react'
import jCard from '../../css/App2.module.css';
import profileImg from '../../assets/img/profile.png';
import Rating from '@mui/material/Rating';

export default function ReviewCard({ name, rating }) {
    return (
        <div className={` d-flex flex-row py-3 align-items-center`}>
            <a href="#profile" className="mx-3">
                <img
                    src={profileImg}
                    alt="Profile"
                    height="50px"
                    width="70px" />
            </a>
            <div className="d-flex flex-column">
                <h5>{name}</h5>
                <div className="d-flex flex-row gap-2 ">
                    <Rating name="half-rating" defaultValue={rating} precision={0.5} />
                    <h5>{rating}</h5>
                </div>
                <p className="my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sequi ipsa ducimus vitae modi est facilis illum accusantium voluptas officiis blanditiis nisi, nam consequuntur earum.</p>
            </div>
        </div>
    )
}
