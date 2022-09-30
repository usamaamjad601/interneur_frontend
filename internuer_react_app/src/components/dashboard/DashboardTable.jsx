import React from 'react'
import prof from '../../assets/img/profile.png'
import StarIcon from '@mui/icons-material/Star';
import cv1 from '../../assets/files/cv1.pdf'



const DashboardTable = () => {
    const [Decision, setDecision] = React.useState(-1)
    const [Decision1, setDecision1] = React.useState()
    const changeBorder = (i, e) => {
        var x = document.getElementById(`td${i}`)
        console.log(x.id, 'id')
        console.log(x.className, 'class')
        console.log(e.target.value, 'value');
        setDecision(i)
        if (e.target.value === 'ShortList') {
            x.className = "d-flex decision align-items-center shortlist"
        } else if (e.target.value === 'Reject') {
            x.className = "d-flex decision align-items-center reject"
        }
        else {
            x.className = "d-flex decision align-items-center"
        }
    }



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
                <tbody className='d-table-body'>
                    {[...Array(20)].map((x, i) =>
                        <tr className='d-table-body' key={i}>
                            <td className='table-check'>
                                <input type="checkbox" name=""
                                    id="" />
                            </td>
                            <td className='profile-td'>
                                <div href="#profile" className="
                                        d-flex
                                        align-items-center">
                                    <img
                                        src={prof}
                                        alt="Profile"
                                        className="profile-img"
                                        w />
                                    <div>
                                        <p>Fahad Hussain</p>

                                    </div>
                                </div>
                            </td>
                            <td className='table-rating'>
                                <div className="rating d-flex gap-2 align-items-center
                                            ">
                                    <StarIcon sx={{ color: 'orange' }} />
                                    <p>3.5</p>
                                </div>
                            </td>
                            <td className='table-decision'>
                                <div className={`d-flex decision align-items-center`}
                                    // ${(Decision === i && Decision1) ? "" : ""}
                                    id={`td${i}`}>

                                    <select className="decision-select"
                                        name="sd" id="" onChange={(e) => changeBorder(i, e)}>
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
                                <div className=" d-flex resume
                                        align-items-center">
                                    <button className="cv-btn">
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

export default DashboardTable