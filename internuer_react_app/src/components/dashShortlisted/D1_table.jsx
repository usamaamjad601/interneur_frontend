import React from 'react'
import prof from '../../assets/img/profile.png'
import cv1 from '../../assets/files/cv1.pdf'
import StarIcon from '@mui/icons-material/Star';

import D1table from '../../css/App.module.css'
import { Link } from 'react-router-dom';


const D1_table = ({ selectAll, rowFunction }) => {

    return (
        <div className={D1table.dashboardTable}>
            <table className='col-md-12'>
                <thead className={D1table.dTableHead}>
                    <tr >
                        <th className='p-2'>
                            <input type="checkbox" id="Allcheck" className={D1table.checkBoxes} onChange={selectAll} />
                        </th>
                        <th>
                            Applicant Name
                        </th>
                        <th>
                            Rating
                        </th>
                        <th>
                            Interview
                        </th>
                        <th>
                            CV/Resume
                        </th>

                    </tr>
                </thead>
                <tbody className={D1table.dTableBody}>
                    {[...Array(20)].map((x, i) =>
                        <tr className={D1table.dTableBody} key={i} id={`tr${i}`}>
                            <td className={D1table.tableCheck} onClick={() => rowFunction(i)}>
                                <input type="checkbox" name=""
                                    id={`check${i}`} onChange={() => rowFunction(i)} className={D1table.checkBoxes} />
                            </td>
                            <td className={D1table.profileTd} onClick={() => rowFunction(i)}>
                                <div href="#profile" className="
                                        d-flex
                                        align-items-center">
                                    <img
                                        src={prof}
                                        alt="Profile"
                                        className={D1table.profileImg}
                                    />
                                    <div>
                                        <p>Naveed Akhtar</p>

                                    </div>
                                </div>
                            </td>
                            <td className={D1table.tableRating} onClick={() => rowFunction(i)}>
                                <div className={`${D1table.rating} d-flex gap-2 align-items-center
                                            `}>
                                    <StarIcon sx={{ color: 'orange' }} />
                                    <p>3.5</p>
                                </div>
                            </td>


                            <td className={D1table.interviewTime} onClick={() => rowFunction(i)}    >
                                <p>Sun, 11:30 PM</p>
                            </td>
                            <td className={D1table.tableCV}>
                                <div className={`${D1table.resume} d-flex 
                                        align-items-center`}>
                                    <button className={D1table.CVbtn}>
                                        <Link to={cv1} target='_blank'>View CV</Link>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>


        </div >
    )
}

export default D1_table