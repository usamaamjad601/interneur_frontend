import React, { useState } from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import DashboardNav from '../components/global/DashboardNav'
import DS_form from '../components/dashShortlisted/DS_form'
import playOld from '../assets/icons/Play_old.svg'

import Short from '../css/App.module.css'

import { Button, DialogContentText, DialogTitle, DialogContent, Dialog, DialogActions } from '@mui/material';
import { Link } from 'react-router-dom';

import SubmitedTable from '../components/DashSubmited/SubmitedTable'
import SubmitedForm from '../components/DashSubmited/SubmitedForm'
import OutlinedInput from '@mui/material/OutlinedInput';
import Rating from '@mui/material/Rating';

import audio from '../assets/Audios/audio1.mp3'






const DashSubmited = () => {

    //popup
    const [openPop, setOpenPop] = useState(false);
    const [index, setIndex] = useState('');

    const handleClickOpenPop = (i) => {
        setOpenPop(true);
        setIndex(i)
    };

    const handleClosePop = () => {
        setOpenPop(false);
    };

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
    // const [oldIcon, setOldIcon] = useState(false)
    const changePlayIcon = (i) => {
        document.getElementById(`icon${i}`).src = playOld;
    }

    const [interviewPopup, setInterviewPopup] = useState(false);
    const openInterviews = (i) => {
        setInterviewPopup(true);
    }

    return (
        <div>
            <Sidebar user={profile} />
            <div className={Short.content}>
                <DashboardNav title="UI/UX Designing" applicants={10} applicantstxt="Interviews Submited" btn1="Close job" btn2="Declined list" btn1class={Short.navBtn3} btn2class={Short.navBtn5} link1="#back" link2="#Dashboard3" handleClick3={handleClick3} shortbutton={1} optionsArray={optionsArray}
                />
                <div className="col-md-12">
                    <div className="d-flex">
                        <div className="col-md-8">
                            <SubmitedTable selectAll={selectAll} rowFunction={rowFunction} changePlayIcon={changePlayIcon} openInterviews={openInterviews} handleClickOpenPop={handleClickOpenPop} />
                        </div>
                        <div className="col-md-4">
                            <SubmitedForm />
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

                {/* -------Interview popup ----- */}
                <Dialog
                    open={openPop}
                    onClose={handleClosePop}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth
                    maxWidth="md"
                >
                    <div className="container p-4 px-5 d-flex flex-column gap-3">
                        <div className=''>
                            <div className="d-flex gap-1 align-items-center col-md-12">
                                <img
                                    src={profile.img}
                                    alt="Profile"
                                    className={Short.profileImg}
                                />
                                <div>
                                    <h4>Danish Kaneria {index}</h4>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div >
                                <strong>Question No 1</strong>
                                <OutlinedInput
                                    fullWidth
                                    maxWidth="xl"
                                    placeholder='What can you bring to the company?'
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                                <Rating name="half-rating" defaultValue={3} precision={0.5} className="pt-2" />
                            </div>
                            <div >
                                <iframe width="300" height="150" src="https://www.youtube.com/embed/gKhx9I9z7BE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div >
                                <strong>Question No 2</strong>
                                <OutlinedInput
                                    fullWidth
                                    maxWidth="xl"
                                    placeholder='What can you bring to the company?'
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                                <Rating name="half-rating" defaultValue={3} precision={0.5} className="pt-2" />
                            </div>
                            <div >
                                <audio controls autoplay>
                                    <source src={audio} type="audio/mp3" />

                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div >
                                <strong>Question No 3</strong>
                                <OutlinedInput
                                    fullWidth
                                    maxWidth="xl"
                                    placeholder='What can you bring to the company?'
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                                <Rating name="half-rating" defaultValue={3} precision={0.5} className="pt-2" />
                            </div>
                            <div >
                                <iframe width="300" height="150" src="https://www.youtube.com/embed/gKhx9I9z7BE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                </Dialog>
            </div>
        </div>)
}

export default DashSubmited