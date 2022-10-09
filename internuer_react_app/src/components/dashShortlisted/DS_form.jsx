import React, { useEffect, useState } from 'react'


import { Radio, RadioGroup, FormControlLabel, FormControl, TextField, InputLabel, MenuItem, Select, Checkbox, Button, DialogContentText, DialogTitle, DialogContent, Dialog, DialogActions } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/Logo.png'

import Dform from '../../css/App.module.css'



const DS_form = () => {



    const [form, setform] = useState('In-office');

    const formHandler = (e) => {
        setform(e)
    }
    console.log(form, 'form');

    const [liveform, setLiveform] = useState('Whatsapp');

    const liveformHandler = (e) => {
        setLiveform(e)
    }


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
            <div className="container p-4 pt-2">
                <h4>Let's Invite them for interviews</h4>
                <p>Choose how you want to interview them?</p>
                <p>Send emails to selected candidates</p>
                <FormControl sx={{ ml: '1rem' }}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="In-office"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="In-office" control={<Radio />} id="check1" label="In-office Interview" onClick={() => formHandler('In-office')} />
                        <FormControlLabel value="Live" control={<Radio />} label="Live Interview" onClick={() => formHandler('Live')} />
                        <FormControlLabel value="Recorded" control={<Radio />} label="Recorded Interview" onClick={() => formHandler('Recorded')} />
                    </RadioGroup>
                </FormControl>
                <div className={Dform.formline}></div>
                {/* /////////In-Office-Form/////css class : inoffice-form// */}
                <div className={` ${form === 'In-office' ? Dform.inofficeForm : Dform.displayNone}`} >
                    <TextField id="outlined-basic" label="Contact Person Name" variant="outlined" fullWidth={true} />
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth={true} />
                    <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth={true} multiline={true} />
                    <TextField
                        id="datetime-local"
                        fullWidth={true}
                        label="Choose Date and Time"
                        type="datetime-local"
                        defaultValue=""
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt magni facilis blanditiis ea similique, velit doloremque? Autem deserunt nobis laudantium,</p>
                    <div className="d-flex col-md-12 align-items-center gap-2 justify-content-between">
                        <FormControl sx={{ Width: '250px' }} className="col-md-8">
                            <InputLabel id="demo-simple-select-helper-label">Time Increment</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Time Increment"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <button className={Dform.googleMapBtn}>Google Map</button>
                    </div>
                    <Button variant="outlined" sx={{ width: '33%', margin: 'auto', fontWeight: 'bolder', border: '2px solid #4794ec', color: '#4794ec' }} onClick={handleClick3}>Preview</Button>
                </div>

                {/* //////Live Interview Form//////// */}
                <div className={` ${form === 'Live' ? Dform.inofficeForm : Dform.displayNone}`} >

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum autem accusamus a eligendi ea, veritatis est nemo dicta error esse explicabo sint dolorem voluptatum necessitatibus hic reiciendis numquam labore?</p>
                    <div className="d-flex flex-column">
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Whatsapp"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="Whatsapp" control={<Radio />} label="Whatsapp" onClick={() => liveformHandler('Whatsapp')} />
                            <FormControlLabel value="Cloud" control={<Radio />} label="Cloud video conferencing" onClick={() => liveformHandler('Cloud')} />
                        </RadioGroup>
                    </div>
                    {/* ////////Whatsapp Form////// */}
                    <div className={`${liveform === 'Whatsapp' ? Dform.whatsappForm : Dform.displayNone}`}>
                        <TextField id="outlined-basic" label="Contact Person Name" variant="outlined" fullWidth={true} />
                        <TextField id="outlined-basic" label="Whatsapp Number" variant="outlined" fullWidth={true} helperText="(include country code without '+' symbol. Eg.92)" />
                    </div>
                    {/* /////////////Cloud Form//////////////// */}
                    <div className={`${liveform === 'Cloud' ? Dform.displayBlock : Dform.displayNone}`}>
                        <TextField id="outlined-basic" label="Video meeting link" variant="outlined" fullWidth={true} helperText="(Paste the link here)" />
                    </div>
                    <TextField
                        id="datetime-local"
                        fullWidth={true}
                        label="Choose Date and Time"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <FormControl sx={{ Width: '250px' }} className="col-md-12">
                        <InputLabel id="demo-simple-select-helper-label">Time Increment</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Time Increment"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" sx={{ width: '33%', margin: 'auto', fontWeight: 'bolder', border: '2px solid #4794ec', color: '#4794ec' }} onClick={handleClick3}>Preview</Button>

                </div>

                <div className={`${form === 'Recorded' ? Dform.inofficeForm : Dform.displayNone}`} >
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus harum autem accusamus a eligendi ea, veritatis est nemo dicta error esse explicabo sint dolorem voluptatum necessitatibus hic reiciendis numquam labore?</p>

                    <div className="d-flex flex-column gap-4 mt-3">
                        <div className="d-flex flex-column gap-1">
                            <InputLabel id="demo-simple-select-helper-label">Question 1</InputLabel>
                            <TextField id="outlined-basic" label="Type here" variant="outlined" fullWidth={true} />
                        </div>
                        <div className="d-flex flex-column gap-1">
                            <InputLabel id="demo-simple-select-helper-label">Question 2</InputLabel>
                            <TextField id="outlined-basic" label="What can you bring to the company" variant="outlined" fullWidth={true} />
                        </div>
                        <div className="d-flex flex-column gap-1">
                            <InputLabel id="demo-simple-select-helper-label">Question 3</InputLabel>
                            <TextField id="outlined-basic" label="Type here" variant="outlined" fullWidth={true} />
                        </div>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Randomize the Questions" />
                        <TextField
                            id="date"
                            label="Last Date"
                            type="date"
                            defaultValue="2017-05-24"

                            fullWidth={true}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button variant="outlined" sx={{ width: '33%', margin: 'auto', fontWeight: 'bolder', border: '2px solid #4794ec', color: '#4794ec' }} onClick={handleClick3}>Preview</Button>
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
                    <img src={logo} className={Dform.sidebarLogo} alt="" />
                </DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <p>Your Interview is sheduled</p>


                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>

                    <Button variant="contained" sx={{ backgroundColor: '#49b09b' }} onClick={handleClose}>Send Email</Button>

                </DialogActions>
            </Dialog>
        </div >
    )
}

export default DS_form