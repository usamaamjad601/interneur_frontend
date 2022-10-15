import React from 'react'
import prof from '../../assets/img/profile.png'
import cv1 from '../../assets/files/cv1.pdf'
import StarIcon from '@mui/icons-material/Star';

import D1table from '../../css/App.module.css'


const DeclineTable = ({ handleClick, handleClick2, button1, button2, drop }) => {
    const [statusArray, setStatusArray] = React.useState([]);

    const changeBorder1 = (i, e) => {
        var x = document.getElementById(`td${i}`)
        // console.log(e.target.value, i)
        // console.log(statusArray)
        const tempArray = [...statusArray];
        tempArray[i] = e.target.value;
        setStatusArray(tempArray);
        // console.log(tempArray)
        handleClick(tempArray.filter((item) => item === 'ShortList').length);
        handleClick2(tempArray.filter((item) => item === 'Reject').length);

        button1(tempArray.filter((item) => item === 'ShortList').length);

        if (tempArray.filter((item) => item === 'ShortList').length !== 0) {
            button1(1)
        }
        if (tempArray.filter((item) => item === 'Reject').length !== 0) {
            button2(1)
        }
        if (e.target.value === 'ShortList') {
            x.className = `${D1table.shortlist} ${D1table.decision} d-flex align-items-center`
        } else if (e.target.value === 'Reject') {
            x.className = `${D1table.decision}  ${D1table.reject} d-flex  align-items-center `
        }
    }
    const [rowArray, setRowArray] = React.useState([]);
    var tempRowArray = [];

    const rowFunction = (i) => {
        var row = document.getElementById(`tr${i}`)
        // console.log(i);

        tempRowArray = [...rowArray];

        if (tempRowArray.includes(`tr${i}`) === true || row.checked) {
            row.classList.remove(D1table.trActive);
            document.getElementById(`check${i}`).checked = false;
            const index = tempRowArray.indexOf(`tr${i}`)
            tempRowArray.splice(index, 1)
            // console.log("exist")
        }
        else {
            row.classList.add(D1table.trActive);
            document.getElementById(`check${i}`).checked = true;
            tempRowArray.push(`tr${i}`);
            // console.log("not exist")
        }
        setRowArray(tempRowArray);
        // console.log(tempRowArray, 'tempArray')
    }
    const selectAll = () => {
        var check = document.getElementById('Allcheck');
        for (var i = 0; i < 20; i++) {
            if (check.checked) {
                document.getElementById(`check${i}`).checked = true;
                document.getElementById(`tr${i}`).classList.add(D1table.trActive);
                // console.log("cheked");
                tempRowArray.push(`tr${i}`);


            }
            else {
                document.getElementById(`check${i}`).checked = false;
                document.getElementById(`tr${i}`).classList.remove(D1table.trActive);
                // console.log("not cheked");
                const index = tempRowArray.indexOf(`tr${i}`)
                tempRowArray.splice(index, 1)
            }
            setRowArray(tempRowArray);
        }
    }

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
                                        w />
                                    <div>
                                        <p>Naveed Akhtar</p>

                                    </div>
                                </div>
                            </td>
                            {/* <td className={D1table.tableRating} onClick={() => rowFunction(i)}>
                                <div className={`${D1table.rating} d-flex gap-2 align-items-center
                                            `}>
                                    <StarIcon sx={{ color: 'orange' }} />
                                    <p>3.5</p>
                                </div>
                            </td> */}

                            <td className={D1table.tableDecision}>
                                <div className={`${D1table.decision} d-flex  align-items-center`}
                                    id={`td${i}`}>

                                    <select className={D1table.decisionSelect}
                                        name="sd" id="" onChange={(e) => changeBorder1(i, e)}>
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
                            </td>
                            {/* <td className={D1table.interviewTime} onClick={() => rowFunction(i)}    >
                                <p>Sun, 11:30 PM</p>
                            </td> */}
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

export default DeclineTable