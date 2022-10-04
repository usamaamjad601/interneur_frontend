import React, { useState } from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import DashboardNav from '../components/global/DashboardNav'
import D1_table from '../components/dashboard1/D1_table'
import DS_form from '../components/dashShortlisted/DS_form'

import { Button, DialogContentText, DialogTitle, DialogContent, Dialog, DialogActions } from '@mui/material';
import { Link } from 'react-router-dom';



const DashShortlisted = () => {
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


    return (
        <div>
            <Sidebar user={profile} />
            <div className="content">
                <DashboardNav title="UI/UX Designing" applicants={10} applicantstxt="Shortlisted Applicants" btn1="Go Back" btn2="Interviews" btn1class="nav-btn3" btn2class="nav-btn4" link1="#back" link2="#Dashboard3" reject={`(${count})`} handleClick3={handleClick3}
                />

                <div className="col-md-12">
                    <div className="d-flex">
                        <div className="col-md-8">
                            <D1_table />
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