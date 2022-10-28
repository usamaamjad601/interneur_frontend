import React from 'react';
import { Link } from 'react-router-dom';
import jCard from '../../css/app2.module.css';
import jTag from '../../css/app2.module.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import jSep from '../../css/app2.module.css';
import jSep2 from '../../css/app2.module.css';

export default function JobCard({ time, link, title, tag, views, viewsNo, no1, text1, no2, text2, no3, text3, no4, text4 }) {

    return (
        <div className={`${jCard.jobCard} d-flex flex-column `}>
            <div className={` d-flex justify-content-between px-3 pt-3`}>
                <p style={{ color: '#B0B0B0' }}>{time} </p>
                <Link to="#">{link}</Link>
            </div>
            <h2 className="pt-3 px-3" style={{ color: 'black' }}>{title}</h2>
            <div className="d-flex gap-3 px-3 pb-3 ">
                <p style={{ color: '#6D6D6D' }} className={`${jTag.jobCardTag}`}>{tag}</p>
                {views ?
                    [<RemoveRedEyeIcon sx={{ color: 'bbb' }} />, <p>{viewsNo}</p>] :
                    null
                }

            </div>
            {/* <div className={`${jSep.jobCardSep} mt-3 d-flex col-md-12 align-items-center`} >
                <div className='d-flex align-items-center justify-content-between col-md-3 '>
                    <div className={`${jSep2.jobCardSep2} text-align-center d-flex flex-column justify-content-center `}>
                        <h2>{no1}</h2>
                        <h6>{text1}</h6>
                    </div>
                    <div style={{ borderRight: '1px solid black', height: '15vh' }}></div>
                </div>
                <div className='d-flex align-items-center justify-content-between col-md-3'>
                    <div className={`${jSep2.jobCardSep2}   text-align-center `}>
                        <h2>{no1}</h2>
                        <h6>{text1}</h6>
                    </div>
                    <div style={{ borderRight: '1px solid black', height: '15vh' }}></div>

                </div>
                <div className='d-flex align-items-center justify-content-between col-md-3'>
                    <div className={`${jSep2.jobCardSep2}   text-align-center `}>
                        <h2>{no1}</h2>
                        <h6>{text1}</h6>
                    </div>
                    <div style={{ borderRight: '1px solid black', height: '15vh' }}></div>
                </div>
                <div className='d-flex align-items-center justify-content-between col-md-3'>
                    <div className={`${jSep2.jobCardSep2}   text-align-center `}>
                        <h2>{no1}</h2>
                        <h6>{text1}</h6>
                    </div>
                    <div style={{ borderRight: 'none', height: '15vh' }}></div>
                </div>
            </div> */}

            <table >
                <tr className={jTag.tableRow}>
                    <td className={jTag.tableTD} width="25%">
                        <h3>{no1}</h3>
                        <h4>{text1}</h4>
                    </td>
                    <td className={jTag.tableTD} width="25%">
                        <h3>{no2}</h3>
                        <h4>{text2}</h4>
                    </td>
                    <td className={jTag.tableTD} width="25%">
                        <h3>{no3}</h3>
                        <h4>{text3}</h4>
                    </td>
                    <td width="25%">
                        <h3>{no4}</h3>
                        <h4>{text4}</h4>
                    </td>
                </tr>
            </table>
        </div>


    )
}
