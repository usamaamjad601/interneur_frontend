import React from 'react';
import iCard from '../../css/App2.module.css';

export default function InfoCard({ name, num, pending }) {
    return (
        <div className={`${iCard.infoCard} d-flex flex-column py-3 align-items-center`}>
            <h4>{name}</h4>
            <h3>{num}</h3>
            <h6>{pending}</h6>
        </div>
    )
}