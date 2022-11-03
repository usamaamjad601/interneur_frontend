import React from 'react'
import reg1 from '../../css/App2.module.css'
import PeopleIcon from '@mui/icons-material/People';
import { OutlinedInput } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PostAddIcon from '@mui/icons-material/PostAdd';


const ClientReg1 = () => {
    return (
        <div>
            <div className={`container ${reg1.RegForm}`}>
                <div className="col-md-12 row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex flex-column gap-3">
                        <div className={reg1.top}>
                            {/* <!-- progress bar --> */}
                            <div className={reg1.stepperWrapper}>
                                <div className={`${reg1.stepperItem} ${reg1.active} `}>
                                    <div className={`${reg1.stepCounter} ${reg1.stepperActive}`}><PeopleIcon /></div>
                                    <div > Personal details</div>
                                </div>
                                <div className={`${reg1.stepperItem} ${reg1.active}`}>
                                    <div className={reg1.stepCounter}><CorporateFareIcon /></div>
                                    <div >Organization details</div>
                                </div>
                                <div className={`${reg1.stepperItem} ${reg1.active}`}>
                                    <div className={reg1.stepCounter}><PostAddIcon /></div>
                                    <div>Post Internship</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className={reg1.detail}>
                                <h1 className='fw-bolder pb-2'> Personal details</h1>
                                <div className={reg1.box}>
                                    <form className='d-flex flex-column gap-5'>
                                        <div className="d-flex gap-5">
                                            <div className=''>
                                                <label htmlFor="fname">First Name</label>
                                                <OutlinedInput
                                                    fullWidth
                                                    placeholder='First Name'
                                                    id="outlined-adornment-weight"
                                                    aria-describedby="outlined-weight-helper-text"
                                                    inputProps={{
                                                        'aria-label': 'weight',
                                                    }}
                                                    required
                                                />
                                            </div>
                                            <div className=''>
                                                <label htmlFor="Lname">Last Name</label>
                                                <OutlinedInput
                                                    fullWidth
                                                    placeholder='Last Name'
                                                    id="outlined-adornment-weight"
                                                    aria-describedby="outlined-weight-helper-text"
                                                    inputProps={{
                                                        'aria-label': 'weight',
                                                    }}
                                                    required
                                                />                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className="d-flex justify-content-between pb-1">

                                                <label htmlFor="email">Email</label>
                                                <div className='d-flex gap-1' style={{ color: '#48ACFA' }}>
                                                    <VerifiedIcon />
                                                    <p>Verified</p>
                                                </div>
                                            </div>
                                            <OutlinedInput
                                                fullWidth
                                                placeholder='abc@123@gmail.com'
                                                id="outlined-adornment-weight"
                                                aria-describedby="outlined-weight-helper-text"
                                                inputProps={{
                                                    'aria-label': 'weight',
                                                }}
                                                required
                                            />

                                        </div>
                                        <div>
                                            <label htmlFor="Mobile Numer">Mobile Numer</label>
                                            <div className='d-flex gap-3 '>
                                                <OutlinedInput
                                                    fullWidth
                                                    id="outlined-adornment-weight"
                                                    aria-describedby="outlined-weight-helper-text"
                                                    inputProps={{
                                                        'aria-label': 'weight',
                                                    }}
                                                    required
                                                    sx={{ width: '30%' }}
                                                    defaultValue={'+92'}
                                                />
                                                <OutlinedInput
                                                    fullWidth
                                                    placeholder='1234567'
                                                    id="outlined-adornment-weight"
                                                    aria-describedby="outlined-weight-helper-text"
                                                    inputProps={{
                                                        'aria-label': 'weight',
                                                    }}
                                                    required
                                                    sx={{ width: '100%' }}
                                                />
                                                <button type='submit' className={reg1.Next}>
                                                    Verify</button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <button type='submit' className={`${reg1.Next1} mt-3`} style={{ margin: 'auto' }}>
                                    Next</button>
                            </div>
                        </div>



                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div >

    )
}

export default ClientReg1