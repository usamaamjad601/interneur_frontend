import React from 'react'
import prof from '../assets/img/profile.png'
import StarIcon from '@mui/icons-material/Star';
import cv1 from '../assets/files/cv1.pdf'



const DashboardTable = () => {



    return (
        <div className='dashboard-table'>
            <table className='col-md-12'>
                <thead className='d-table-head'>
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
                            Decision
                        </th>
                        <th>
                            CV/Resume
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr className='d-table-body'>
                        <td className='table-check'>
                            <input type="checkbox" name=""
                                id="" />
                        </td>
                        <td className='profile-td'>
                            <div href="#profile" class="
                                                d-flex
                                                align-items-center">
                                <img
                                    src={prof}
                                    alt="Profile"
                                    class="profile-img"
                                    w />
                                <div>
                                    <p>Fahad Hussain</p>

                                </div>
                            </div>
                        </td>
                        <td className='table-rating'>
                            <div class="rating d-flex gap-2 align-items-center
                                                ">
                                <StarIcon sx={{ color: 'orange' }} />
                                <p>3.5</p>
                            </div>
                        </td>
                        <td className='table-decision'>
                            <div class="d-flex decision
                                                align-items-center">
                                <select class="decision-select"
                                    name="sd" id="">
                                    <option value="Moveto">Move
                                        to
                                    </option>
                                    <option value="ShortList">ShortList
                                    </option>
                                    <option value="Reject">Reject
                                    </option>
                                </select>
                            </div>
                        </td>
                        <td className='table-cv'>
                            <div class=" d-flex resume
                                                align-items-center">
                                <button class="cv-btn">
                                    <a href={cv1} target='_blank'>View CV</a>
                                </button>

                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>


        </div>
    )
}

export default DashboardTable