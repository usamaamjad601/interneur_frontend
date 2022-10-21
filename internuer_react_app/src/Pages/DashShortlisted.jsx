import React, { useState } from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import DashboardNav from '../components/global/DashboardNav'
import D1_table from '../components/dashShortlisted/D1_table'
import DS_form from '../components/dashShortlisted/DS_form'

import Short from '../css/App.module.css'

import { Button, DialogContentText, DialogTitle, DialogContent, Dialog, DialogActions } from '@mui/material';
import { Link } from 'react-router-dom';

const DashShortlisted = () => {
    var optionsArray = ['Move to declined list', 'Send interview invites'];

    var profile = {
        name: "John Doe",
        img: profile_img,
    }
    let count = 3;

    ///popup function
    const [open, setOpen] = useState(false);
    const handleClick3 = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [statusArray, setStatusArray] = React.useState([]);

    const changeBorder1 = (i, e) => {
        var x = document.getElementById(`td${i}`)
        // console.log(e.target.value, i)
        // console.log(statusArray)
        const tempArray = [...statusArray];
        tempArray[i] = e.target.value;
        setStatusArray(tempArray);
        // console.log(tempArray)
        // handleClick(tempArray.filter((item) => item === 'ShortList').length);
        // handleClick2(tempArray.filter((item) => item === 'Reject').length);

        // button1(tempArray.filter((item) => item === 'ShortList').length);

        if (tempArray.filter((item) => item === 'ShortList').length !== 0) {
            // button1(1)
        }
        if (tempArray.filter((item) => item === 'Reject').length !== 0) {
            // button2(1)
        }
        if (e.target.value === 'ShortList') {
            x.className = `${Short.shortlist} ${Short.decision} d-flex align-items-center`
        } else if (e.target.value === 'Reject') {
            x.className = `${Short.decision}  ${Short.reject} d-flex  align-items-center `
        }
    }
    const [rowArray, setRowArray] = React.useState([]);
    var tempRowArray = [];

    const rowFunction = (i) => {
        var row = document.getElementById(`tr${i}`)
        // console.log(i);

        tempRowArray = [...rowArray];

        if (tempRowArray.includes(`tr${i}`) === true || row.checked) {
            row.classList.remove(Short.trActive);
            document.getElementById(`check${i}`).checked = false;
            const index = tempRowArray.indexOf(`tr${i}`)
            tempRowArray.splice(index, 1)
            // console.log("exist")
        }
        else {
            row.classList.add(Short.trActive);
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
                document.getElementById(`tr${i}`).classList.add(Short.trActive);
                // console.log("cheked");
                tempRowArray.push(`tr${i}`);


            }
            else {
                document.getElementById(`check${i}`).checked = false;
                document.getElementById(`tr${i}`).classList.remove(Short.trActive);
                // console.log("not cheked");
                const index = tempRowArray.indexOf(`tr${i}`)
                tempRowArray.splice(index, 1)
            }
            setRowArray(tempRowArray);
        }
    }


    return (
        <div>
            <Sidebar user={profile} />
            <div className={Short.content}>
                <DashboardNav title="UI/UX Designing" applicants={10} applicantstxt="Shortlisted Applicants" btn1="Go Back" btn2="Interviews" btn1class={Short.navBtn3} btn2class={Short.navBtn4} link1="#back" link2="/DashSubmited" reject={`(${count})`} handleClick3={handleClick3} shortbutton={1} optionsArray={optionsArray}
                />

                <div className="col-md-12">
                    <div className="d-flex">
                        <div className="col-md-8">
                            <D1_table selectAll={selectAll} rowFunction={rowFunction} />
                        </div>
                        <div className="col-md-4">
                            <DS_form />
                        </div>
                    </div>
                </div>
                {/* ------POPUP------ */}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle sx={{ fontWeight: 'bolder', textAlign: 'center' }} id="alert-dialog-title">
                        {'Save Changes?'}
                    </DialogTitle>
                    <DialogContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <DialogContentText id="alert-dialog-description" sx={{ maxWidth: '400px' }}>
                            <span style={{ typography: 'subtitle2', fontWeight: ' bolder', color: '#49b09b', minWidth: '50px', marginRight: '5px' }}>Yes -</span>
                            Save changes and triger will lose dataer will lose dataer will lose data
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description" sx={{ display: 'flex', alignItems: 'flex-start', maxWidth: '400px' }}>
                            <span style={{ typography: 'subtitle2', fontWeight: ' bolder', color: '#e55d76', marginRight: '5px' }}>No -</span>
                            Go back and make changes
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" sx={{ backgroundColor: '#49b09b' }} onClick={handleClose}>Yes</Button>
                        </Link>
                        <Button variant="contained" sx={{ backgroundColor: '#e55d76' }} onClick={handleClose} autoFocus>
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default DashShortlisted