import React, { useContext, useEffect } from 'react'
import prof from '../../assets/img/profile.png'
import StarIcon from '@mui/icons-material/Star';
import cv1 from '../../assets/files/cv1.pdf'
import DTable from '../../css/App.module.css'

import MyContext from '../../Context/MyContext';





const DashboardTable = ({ handleClick, handleClick2, button1, button2, drop }) => {

    const data = [
        {
            "id": 1,
            "title": "first",
            "category": "Web development",
            "seo_title": "first title",
            "logo": "/media/logos/westandn.com_4.png",
            "website": "https://www.google.com/",
            "external_link": "https://www.google.com/",
            "additional_internship_detail": "<p>first title</p>",
            "about": "first title",
            "responsibilities": "<p>first title</p>",
            "city": "Rawalpindi",
            "location": "rawalpindi",
            "amount": 1,
            "company_name": "first title",
            "dead_line": "2022-10-28",
            "no_of_position": 1,
            "intern_education": "first title",
            "skills": "first title",
            "joining_date": "2022-10-06",
            "internship_type": "paid",
            "internship_duration": "6 months",
            "who_can_apply": "<p>first title</p>",
            "status": "approved",
            "slug": "first-title",
            "created_at": "2022-10-07T06:23:55.341031Z",
            "updated_at": "2022-10-07T06:27:57.634251Z",
            "user": 82,
            "perks": [
                1,
                5,
                6
            ]
        }
    ]
    // console.log(data[0].who_can_apply, 'Data 0');

    const user = useContext(MyContext);
    // console.log(user, 'username here plz ')

    const [statusArray, setStatusArray] = React.useState([]);

    drop = (i) => {
        console.log(i);
    }

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
    var tempRowArray = [];

    const rowFunction = (i) => {
        var row = document.getElementById(`tr${i}`)
        // console.log(i);

        tempRowArray = [...rowArray];

        if (tempRowArray.includes(`tr${i}`) === true || row.checked) {
            row.classList.remove(DTable.trActive);
            document.getElementById(`check${i}`).checked = false;
            const index = tempRowArray.indexOf(`tr${i}`)
            tempRowArray.splice(index, 1)
            // console.log("exist")
        }
        else {
            row.classList.add(DTable.trActive);
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
                document.getElementById(`tr${i}`).classList.add(DTable.trActive);
                // console.log("cheked");
                tempRowArray.push(`tr${i}`);


            }
            else {
                document.getElementById(`check${i}`).checked = false;
                document.getElementById(`tr${i}`).classList.remove(DTable.trActive);
                // console.log("not cheked");
                const index = tempRowArray.indexOf(`tr${i}`)
                tempRowArray.splice(index, 1)
            }
            setRowArray(tempRowArray);
        }
    }



    return (
        <div className={DTable.dashboardTable}>
            <table className='col-md-12'>
                <thead className={DTable.dTableHead}>
                    <tr >
                        <th className='p-2'>
                            <input type="checkbox" id="Allcheck" className={DTable.checkBoxes} onChange={selectAll} />
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
                                    id={`check${i}`} onChange={() => rowFunction(i)} className={DTable.checkBoxes} />
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