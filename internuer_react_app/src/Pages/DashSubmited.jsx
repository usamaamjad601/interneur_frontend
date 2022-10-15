import React, { useState } from 'react'
import Sidebar from '../components/global/Sidebar'
import profile_img from '../assets/img/profile.png'
import DashboardNav from '../components/global/DashboardNav'
import DS_form from '../components/dashShortlisted/DS_form'

import Short from '../css/App.module.css'

import { Button, DialogContentText, DialogTitle, DialogContent, Dialog, DialogActions } from '@mui/material';
import { Link } from 'react-router-dom';

import SubmitedTable from '../components/DashSubmited/SubmitedTable'
import SubmitedForm from '../components/DashSubmited/SubmitedForm'

const DashSubmited = () => {

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


    return (
        <div>
            <Sidebar user={profile} />
            <div className={Short.content}>
                <DashboardNav title="UI/UX Designing" applicants={10} applicantstxt="Interviews Submited" btn1="Close job" btn2="Declined list" btn1class={Short.navBtn3} btn2class={Short.navBtn5} link1="#back" link2="#Dashboard3" handleClick3={handleClick3} shortbutton={1} optionsArray={optionsArray}
                />

                <div className="col-md-12">
                    <div className="d-flex">
                        <div className="col-md-8">
                            <SubmitedTable />
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
            </div>
        </div>)
}

export default DashSubmited