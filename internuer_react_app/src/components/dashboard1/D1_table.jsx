import React from 'react'
import prof from '../../assets/img/profile.png'
import cv1 from '../../assets/files/cv1.pdf'
import StarIcon from '@mui/icons-material/Star';

import D1table from '../../css/App.module.css'


const D1_table = () => {
    const changeBorder = (i, e) => {
        var x = document.getElementById(`td${i}`)
        console.log(x.id, 'id')
        console.log(x.className, 'class')
        console.log(e.target.value, 'value');
        if (e.target.value === 'ShortList') {
            x.className = `${D1table.shortlist} ${D1table.decision} d-flex align-items-center`
        } else if (e.target.value === 'Reject') {
            x.className = `${D1table.decision}  ${D1table.reject} d-flex  align-items-center `
        }
        else if (e.target.value === 'unfit') {
            x.className = `${D1table.decision} ${D1table.unfit} d-flex decision align-items-center `
        }
        else {
            x.className = `${D1table.decision} d-flex decision align-items-center`
        }
    }

    return (
        <div className={D1table.dashboardTable}>
            <table className='col-md-12'>
                <thead className={D1table.dTableHead}>
                    <tr >
                        <th className='p-2'>
                            <input type="checkbox" />
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
                        <tr className={D1table.dTableBody} key={i}>
                            <td className={D1table.tableCheck}>
                                <input type="checkbox" name=""
                                    id="" />
                            </td>
                            <td className={D1table.profileTd}>
                                <div href="#profile" className="
                                        d-flex
                                        align-items-center">
                                    <img
                                        src={prof}
                                        alt="Profile"
                                        className={D1table.profileImg}
                                        w />
                                    <div>
                                        <p>Fahad Hussain</p>

                                    </div>
                                </div>
                            </td>
                            <td className={D1table.tableRating}>
                                <div className={`${D1table.rating} d-flex gap-2 align-items-center
                                            `}>
                                    <StarIcon sx={{ color: 'orange' }} />
                                    <p>3.5</p>
                                </div>
                            </td>

                            {/* <td className={D1table.tableDecision}>
                                <div className={`${D1table.decision} d-flex  align-items-center`}
                                    id={`td${i}`}>

                                    <select className={D1table.decisionSelect}
                                        name="sd" id="" onChange={(e) => changeBorder(i, e)}>
                                        <option value="select">
                                            Select
                                        </option>
                                        <option value="ShortList">Unsatisfactory Interview
                                        </option>
                                        <option value="Reject">Week or unfit portfolio
                                        </option>
                                        <option value="unfit">Irrelevant CV
                                        </option>
                                    </select>
                                </div>
                            </td> */}
                            <td className={D1table.interviewTime}>
                                <p>Sun, 11:30 PM</p>
                            </td>
                            <td className={D1table.tableCV}>
                                <div className={`${D1table.resume} d-flex 
                                        align-items-center`}>
                                    <button className={D1table.CVbtn}>
                                        <a href={cv1} target='_blank'>View CV</a>
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