import React, { useContext } from 'react'
import prof from '../../assets/img/profile.png'
import StarIcon from '@mui/icons-material/Star';
import cv1 from '../../assets/files/cv1.pdf'
import DTable from '../../css/App.module.css'

import MyContext from '../../Context/MyContext';





const DashboardTable = ({ handleClick, handleClick2, button1, button2 }) => {

    const user = useContext(MyContext);
    console.log(user, 'username here plz ')

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
            x.className = `${DTable.shortlist} ${DTable.decision} d-flex align-items-center`
        } else if (e.target.value === 'Reject') {
            x.className = `${DTable.decision}  ${DTable.reject} d-flex  align-items-center `
        }
    }
    const [rowArray, setRowArray] = React.useState([]);

    const rowFunction = (i) => {
        var row = document.getElementById(`tr${i}`)
        console.log(i);

        var tempRowArray = [...rowArray];

        if (tempRowArray.includes(`tr${i}`) === true) {
            row.classList.remove(DTable.trActive);
            document.getElementById(`check${i}`).checked = false;
            const index = tempRowArray.indexOf(`tr${i}`)
            tempRowArray.splice(index, 1)
            console.log('Exists');
        }
        else {
            row.classList.add(DTable.trActive);
            document.getElementById(`check${i}`).checked = true;
            tempRowArray.push(`tr${i}`);
            console.log('Not Exists');
        }
        setRowArray(tempRowArray);
        console.log(tempRowArray, 'tempArray')
    }



    return (
        <div className={DTable.dashboardTable}>
            <table className='col-md-12'>
                <thead className={DTable.dTableHead}>
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
                <tbody className={DTable.dTableBodyy}>
                    {[...Array(20)].map((x, i) =>
                        <tr className={`${DTable.dTableBody}`} key={i} id={`tr${i}`}>
                            <td className={DTable.tableCheck} onClick={() => rowFunction(i)}>
                                <input type="checkbox" name=""
                                    id={`check${i}`} onChange={() => rowFunction(i)} />
                            </td>
                            <td className={DTable.profileTd} onClick={() => rowFunction(i)}>
                                <div href="#profile" className="
                                        d-flex
                                        align-items-center">
                                    <img
                                        src={prof}
                                        alt="Profile"
                                        className={DTable.profileImg}
                                        w />
                                    <div>
                                        <p>Naveed Akhtar</p>

                                    </div>
                                </div>
                            </td>
                            <td className={DTable.tableRating} onClick={() => rowFunction(i)}>
                                <div className={`${DTable.rating} d-flex gap-2 align-items-center
                                            `}>
                                    <StarIcon sx={{ color: 'orange' }} />
                                    <p>3.5</p>
                                </div>
                            </td>
                            <td className={DTable.tableDecision}>
                                <div className={`${DTable.decision} d-flex  align-items-center`}
                                    // ${(Decision === i && Decision1) ? "" : ""}
                                    id={`td${i}`}>

                                    <select className={DTable.decisionSelect}
                                        name="sd" id={`select`} onChange={(e) => changeBorder1(i, e)}>
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
                            <td className={DTable.tableCV}>
                                <div className={`${DTable.decision} d-flex 
                                        align-items-center`}>
                                    <button className={DTable.CVbtn}>
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