import React from 'react';
import jCard from '../../css/App2.module.css';
import Chart from 'react-apexcharts';

export default function GraphCard() {
    return (
        <div className={`${jCard.jobCard} d-flex  justify-content-between`}>
            <Chart type="pie" width={500} height={300} series={[25, 25, 25, 25]}
                options={{
                    noData: { text: "Empty Data" },
                    labels: ['Organic', 'Social Media', 'Referal', 'Job Board']
                }}
            ></Chart>
            <div>
                <Chart type="pie" width={500} height={320} series={[25, 25, 25, 25]}
                    options={{
                        noData: { text: "Empty Data" },
                        plotOptions: {
                            "labelDisplay": "none",
                        },
                        legend: {
                            show: false,
                            position: 'bottom',
                            fontSize: '14px',
                        }
                    }}
                ></Chart>

            </div>
        </div >
    )
}
