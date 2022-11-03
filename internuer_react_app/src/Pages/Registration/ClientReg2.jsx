import React from 'react'
import reg2 from '../../css/App2.module.css'
import PeopleIcon from '@mui/icons-material/People';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { OutlinedInput, TextField } from '@mui/material';


const ClientReg2 = () => {
    return (
        <div >
            <div className={`container ${reg2.RegForm}`}>
                <div className="col-md-12 row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex flex-column gap-3">
                        <div className={reg2.top}>
                            {/* <!-- progress bar --> */}
                            <div className={reg2.stepperWrapper}>
                                <div className={`${reg2.stepperItem} ${reg2.active} `}>
                                    <div className={`${reg2.stepCounter} ${reg2.stepperActive}`}><PeopleIcon /></div>
                                    <div > Personal details</div>
                                </div>
                                <div className={`${reg2.stepperItem} ${reg2.active}`}>
                                    <div className={`${reg2.stepCounter}  ${reg2.stepperActive}`}><CorporateFareIcon /></div>
                                    {/* <div className=" card" style="  width: 50px; height:50px;  border-radius: 50px 50px; background: #4371b5; text-align: center; top: 50%">2</div> */}
                                    <div >Organization details</div>
                                </div>
                                <div className={`${reg2.stepperItem} ${reg2.active}`}>
                                    <div className={reg2.stepCounter}><PostAddIcon /></div>
                                    <div>Post Internship</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className={reg2.detail}>
                                <h2 className='fw-bolder pb-2'> Organizational details</h2>
                                <div className={reg2.box}>
                                    <form className='d-flex flex-column gap-3'>
                                        <div className='d-flex flex-column gap-2'>
                                            <label htmlFor="Lname" className='fw-bolder'>Organization Name</label>
                                            <OutlinedInput
                                                fullWidth
                                                placeholder='Company or Organization Name'
                                                id="outlined-adornment-weight"
                                                aria-describedby="outlined-weight-helper-text"
                                                inputProps={{
                                                    'aria-label': 'weight',
                                                }}
                                                required
                                            />                                        </div>
                                        <div className='d-flex gap-3'>
                                            <input type="checkbox" id="undertake" name="undertake" /> I am independent freelancer or practitioner

                                        </div>
                                        <div className='d-flex flex-column gap-2'>
                                            <label htmlFor="Lname" className='fw-bolder'>About Organization</label>
                                            <TextField type="text" id="fname" name="fname"
                                                multiline={true}
                                                rows={5}

                                                sx={{ padding: '0 !important' }}
                                            />                                       </div>

                                        <div className={`${reg2.uploadBtnWrapper} flex-column`}>
                                            <label for="fname" className='fw-bolder'>Organization Logo</label>
                                            <button class={reg2.btn} onclick="myFunction()" style={{ backgroundColor: '#e0f5f3', padding: '1.5rem 2.5rem' }}>Click to Upload
                                                <input type="file" id="logo" name="myfile" /></button>
                                        </div>
                                        <p>Max file size 1Mb and file type JPEG, JPG, PNG supported. Recommended resolution: 200px x 200px.</p>
                                    </form>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div >


            {/* Verifications */}
            <div className={`container pt-5 ${reg2.RegForm}`}>
                <div className="col-md-12 row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex flex-column gap-3">
                        <div className="col-md-12">
                            <div className={reg2.detail}>
                                <h2 className='fw-bolder pb-2'> Organizational Verifications</h2>
                                <div className={reg2.box}>
                                    <form className='d-flex flex-column gap-3'>
                                        <div className='d-flex flex-column gap-2'>
                                            <label htmlFor="Lname" className='fw-bolder'>Organization Name</label>
                                            <input id="w3review" name="w3review" placeholder="e.g Arkhitech pvt ltd " style={{ width: '100%' }}></input>
                                        </div>
                                        <div className='d-flex gap-3'>
                                            <input type="checkbox" id="undertake" name="undertake" /> I am here by admitted that i am postig for my self-purpose

                                        </div>
                                        <div className='d-flex flex-column gap-2'>
                                            <label htmlFor="Lname" className='fw-bolder'>Organization Description</label>
                                            <textarea id="w3review" name="w3review" style={{ width: '100%' }}></textarea>
                                        </div>

                                        <div class={`${reg2.uploadBtnWrapper}`}>
                                            <label for="fname" className='fw-bolder'>Organization Logo</label>
                                            <button class={reg2.btn} onclick="myFunction()" style={{ backgroundColor: '#e0f5f3' }}>Upload logo
                                                <input type="file" id="logo" name="myfile" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div >
        </div >

    )
}

export default ClientReg2