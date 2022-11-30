import { OutlinedInput, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import jCard from '../css/App3.module.css';

export default function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // function loginVal() {
    //     axios.post('https://interneur.herokuapp.com/api/token/', {
    //         username: 'interneur.pk@gmail.com',
    //         password: 'Demo1122334455'
    //     }).then((response) => {
    //         console.log(response, 'response');
    //     })
    //         .catch((error) => {
    //             console.log(error, 'error');
    //         })
    // }
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        await axios({
            method: "post",
            url: 'https://interneur.herokuapp.com/api/token/',
            data: {
                username: email,
                password: password,
            },
            // headers: { 'Access-Control-Allow-Origin': '*' }
        })
            .then(function (response) {
                console.log(response, "response");
                // window.location.href = `/`
                setLoggedIn(true);

                localStorage.setItem("credentials", JSON.stringify({
                    access_token: response.data.access,
                    refresh_token: response.data.refresh,
                }))

            })

            .catch(function (response) {
                console.log(response, "error");
                // window.location.href = "/Login"
            });

    }




    return (
        <div>
            <div className="d-flex col-md-12">
                <div className="col-md-7"></div>
                <div className={`${jCard.signUpCard} col-md-4 mt-5 p-4`}>
                    <h6 >Work Email ID</h6>
                    {/* <input type="email" placeholder="name@yourcompany.com" className='mt-2' style={{ backgroundColor: "#F5F5F5", color: "#B0B0B0", borderRadius: "12px" }} /> */}
                    <form onSubmit={handleSubmit}>
                        <OutlinedInput
                            size='small'
                            sx={{ paddingTop: '0 !important', margin: '5px !important', backgroundColor: "#F3F8FF" }}
                            fullWidth
                            placeholder='name@yourcompany.com'
                            id="email"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                        {/* , borderRadius: "12px" */}
                        <h6 className="mt-3" >Password</h6>
                        <TextField
                            size='small'
                            id="password"
                            sx={{ paddingTop: '0 !important', margin: '5px !important', backgroundColor: "#F3F8FF" }}
                            required
                            fullWidth
                            placeholder='Minimum 7 Characters'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        // autoComplete="current-password"
                        />


                        <p className="mt-4" style={{ fontSize: '13px' }}><Link to="#" style={{ textDecoration: 'none' }}>Forgot Password ? </Link>.</p>
                        <div className=" pt-2">
                            <button className={`${jCard.signUpButton}`} style={{ width: '100%' }}>Login </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}
