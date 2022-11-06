import { OutlinedInput, TextField } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import jCard from '../css/App3.module.css';
// import { makeStyles } from '@material-ui/core/styles';

export default function EmpSignUp() {

    // const useStyles = makeStyles({
    //     input: {
    //         '& input[type=number]': {
    //             '-moz-appearance': 'textfield'
    //         },
    //         '& input[type=number]::-webkit-outer-spin-button': {
    //             '-webkit-appearance': 'none',
    //             margin: 0
    //         },
    //         '& input[type=number]::-webkit-inner-spin-button': {
    //             '-webkit-appearance': 'none',
    //             margin: 0
    //         }
    //     },
    // });

    // const classes = useStyles();

    return (
        <div>
            <div className="d-flex col-md-12">
                <div className="col-md-7"></div>
                <div className={`${jCard.signUpCard} col-md-4 mt-5 p-4`}>
                    <h6 >Work Email ID</h6>
                    {/* <input type="email" placeholder="name@yourcompany.com" className='mt-2' style={{ backgroundColor: "#F5F5F5", color: "#B0B0B0", borderRadius: "12px" }} /> */}
                    <form action='#'>
                        <OutlinedInput
                            size='small'
                            sx={{ paddingTop: '0 !important', margin: '5px !important', backgroundColor: "#F3F8FF" }}
                            fullWidth
                            placeholder='name@yourcompany.com'
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            required
                        />
                        {/* , borderRadius: "12px" */}
                        <h6 className="mt-3" >Password</h6>
                        <TextField
                            size='small'
                            id="outlined-password-input"
                            sx={{ paddingTop: '0 !important', margin: '5px !important', backgroundColor: "#F3F8FF" }}
                            required
                            fullWidth
                            placeholder='Minimum 7 Characters'
                            type="password"
                        // autoComplete="current-password"
                        />
                        <h6 className="mt-3" >Your Name</h6>
                        <div className="d-flex">
                            <TextField
                                size='small'
                                id="outlined-text-input"
                                sx={{ paddingTop: '0 !important', margin: '5px !important', backgroundColor: "#F3F8FF" }}
                                required
                                // fullWidth
                                placeholder='First Name'
                                type="text"
                            // autoComplete="current-password"
                            />
                            <TextField
                                size='small'
                                id="outlined-text-input"
                                sx={{ paddingTop: '0 !important', margin: '5px !important', backgroundColor: "#F3F8FF" }}
                                required
                                // fullWidth
                                placeholder='Last Name'
                                type="text"
                            // autoComplete="current-password"
                            />
                        </div>
                        <h6 className="mt-3" >Mobile Number</h6>
                        <div className="d-flex">
                            <TextField
                                size='small'
                                id="outlined-number-input"
                                sx={{ paddingTop: '0 !important', margin: '5px !important', width: "20%", backgroundColor: "#F3F8FF" }}
                                required
                                // className={classes.input}
                                // fullWidth
                                placeholder='+92'
                                type="number"
                            // autoComplete="current-password"
                            />
                            {/* <input type="number" sx={{ paddingTop: '0 !important', margin: '5px !important', width: "20%", backgroundColor: "#F3F8FF" }} */}
                            {/* /> */}
                            <TextField
                                size='small'
                                id="outlined-number-input"
                                sx={{ paddingTop: '0 !important', margin: '5px !important', width: "80%", backgroundColor: "#F3F8FF" }}
                                required
                                // fullWidth
                                placeholder='10 digit Mobile Number'
                                type="number"
                            // autoComplete="current-password"
                            />
                        </div>
                        <p className="mt-4" style={{ fontSize: '13px' }}>By registering, you agree to our <Link to="#" style={{ textDecoration: 'none' }}>Terms of Service</Link>.</p>
                        <div className="d-flex pt-2">
                            <button className={`${jCard.signUpButton}`} style={{ width: '100%' }} type="submit">Register Now</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}
