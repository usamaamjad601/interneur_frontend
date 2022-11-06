import React from 'react'
import reg2 from '../../css/App2.module.css'
import reg22 from '../../css/App.module.css'

import PeopleIcon from '@mui/icons-material/People';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Checkbox, FormControl, FormControlLabel, FormLabel, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const ClientReg2 = () => {


    const icon = <CheckCircleIcon sx={{ color: 'green' }} />

    const [method, setMethod] = React.useState('website');

    const [social, setSocial] = React.useState('linkedin');

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
                                            />
                                        </div>

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
                                    <p >Please verify your organization/company using any of the following options below. Get more visibility with a verified icon. We only promote verified jobs and internships on our website. </p>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="website"
                                        name="radio-buttons-group"
                                        className='pt-3'
                                    >
                                        {/* ################Website####################### */}
                                        <FormControlLabel value="website" control={<Radio onChange={() => { setMethod('website') }} />} label="Active website" />
                                        <p style={{ paddingLeft: '2rem' }}> Verify using your organization's active & functional website
                                        </p>
                                        <div className={`p-4 pt-0 ${method === 'website' ? reg22.displayBlock : reg22.displayNone}`}>

                                            <div className='d-flex gap-3 flex-column'>
                                                <label htmlFor="fname">Enter your website URL</label>
                                                <div>
                                                    <TextField
                                                        fullWidth
                                                        InputProps={{
                                                            endAdornment: icon
                                                        }}
                                                        defaultValue='https://www.'
                                                    />
                                                    <div className='d-flex gap-1' style={{ color: '#FF6174' }}>
                                                        <ErrorIcon sx={{ width: '15px' }} />
                                                        <p>404 error. Please enter valid URL. -  Doesn’t match with your official email domain.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        {/* ################Social####################### */}
                                        <FormControlLabel value="social" control={<Radio onChange={() => { setMethod('social') }} />} label="Active social media page" />
                                        <div>
                                            <p style={{ paddingLeft: '2rem' }}> Verify using your most active social media page of which you are admin with minimum 500-1000 likes/followers.</p>
                                            <div className={`p-4 pt-0 ${method === 'social' ? reg22.displayBlock : reg22.displayNone}`}>

                                                <div className='d-flex gap-3 flex-column'>
                                                    <div className="d-flex justify-content-between mt-4">
                                                        <div className={`${reg2.socialCard} ${social === 'linkedin' ? reg2.socialCardActive : reg2.socialCard} `} onClick={() => setSocial('linkedin')}>
                                                            <LinkedInIcon sx={{ color: 'blue' }} />
                                                            <p>LinkedIn</p>
                                                        </div>
                                                        <div className={`${reg2.socialCard} ${social === 'facebook' ? reg2.socialCardActive : reg2.socialCard} `} onClick={() => setSocial('facebook')}>
                                                            <FacebookIcon sx={{ color: 'blue' }} />
                                                            <p>Facebook</p>
                                                        </div>
                                                        <div className={`${reg2.socialCard} ${social === 'insta' ? reg2.socialCardActive : reg2.socialCard} `} onClick={() => setSocial('insta')}>
                                                            <InstagramIcon sx={{ color: 'red' }} />
                                                            <p>Instagram</p>
                                                        </div>
                                                    </div>
                                                    <div className={`${social === 'linkedin' ? reg22.displayFlex : reg22.displayNone} d-flex gap-3 flex-column`}>
                                                        <div>
                                                            <p className='fw-bold'>Enter LinkedIn page URL</p>
                                                            <OutlinedInput
                                                                fullWidth
                                                                placeholder='https://www.linkedin.com/in/companyname'
                                                                id="outlined-adornment-weight"
                                                                aria-describedby="outlined-weight-helper-text"
                                                                inputProps={{
                                                                    'aria-label': 'weight',
                                                                }}
                                                                required
                                                            />
                                                        </div>
                                                        <p>Make sure your LinkedIn Page is logged in. Copy text below & send us a connection request with a <strong> personalized invite</strong> or <strong> add a note.</strong></p>
                                                        <div className={reg2.preMessage}>
                                                            <p>{`I am from   ${`Idrees Ahmed`} from ${`Company Name`} I verify that I am the owner/representative of this LinkedIn page.`}</p>
                                                        </div>
                                                        <div className='d-flex justify-content-end align-items-center gap-2'>
                                                            <p className='fw-bold' style={{ color: '#48ACFA' }}>Copy text</p>
                                                            <p>and send us a</p>
                                                            <button className={reg2.messageBTN}>Message here</button>
                                                        </div>
                                                        <div>
                                                            <FormControlLabel control={<Checkbox defaultChecked />} label="I have sent the above message" />
                                                            <div className='d-flex gap-1' style={{ color: '#FF6174' }}>
                                                                <ErrorIcon sx={{ width: '15px' }} />
                                                                <p>Required field</p>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className={`${social === 'facebook' ? reg22.displayFlex : reg22.displayNone} d-flex gap-3 flex-column`}>
                                                        <div>
                                                            <p className='fw-bold'>Enter Facebook page URL</p>
                                                            <OutlinedInput
                                                                fullWidth
                                                                placeholder='https://www.linkedin.com/in/companyname'
                                                                id="outlined-adornment-weight"
                                                                aria-describedby="outlined-weight-helper-text"
                                                                inputProps={{
                                                                    'aria-label': 'weight',
                                                                }}
                                                                required
                                                            />
                                                        </div>
                                                        <p>Make sure your Facebook Page is logged in. Copy text below & send us the text.</p>
                                                        <div className={reg2.preMessage}>
                                                            <p>{`I am from   ${`Idrees Ahmed`} from ${`Company Name`} I verify that I am the owner/representative of this LinkedIn page.`}</p>
                                                        </div>
                                                        <div className='d-flex justify-content-end align-items-center gap-2'>
                                                            <p className='fw-bold' style={{ color: '#48ACFA' }}>Copy text</p>
                                                            <p>and send us a</p>
                                                            <button className={reg2.messageBTN}>Message here</button>
                                                        </div>
                                                        <div>
                                                            <FormControlLabel control={<Checkbox defaultChecked />} label="I have sent the above message" />
                                                            <div className='d-flex gap-1' style={{ color: '#FF6174' }}>
                                                                <ErrorIcon sx={{ width: '15px' }} />
                                                                <p>Required field</p>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className={`${social === 'insta' ? reg22.displayFlex : reg22.displayNone} d-flex gap-3 flex-column`}>
                                                        <div>
                                                            <p className='fw-bold'>Enter Instagram page URL</p>
                                                            <OutlinedInput
                                                                fullWidth
                                                                placeholder='https://www.linkedin.com/in/companyname'
                                                                id="outlined-adornment-weight"
                                                                aria-describedby="outlined-weight-helper-text"
                                                                inputProps={{
                                                                    'aria-label': 'weight',
                                                                }}
                                                                required
                                                            />
                                                        </div>
                                                        <p>Make sure your Instagram Page is logged in. Copy text below & send us the text.</p>
                                                        <div className={reg2.preMessage}>
                                                            <p>{`I am from   ${`Idrees Ahmed`} from ${`Company Name`} I verify that I am the owner/representative of this LinkedIn page.`}</p>
                                                        </div>
                                                        <div className='d-flex justify-content-end align-items-center gap-2'>
                                                            <p className='fw-bold' style={{ color: '#48ACFA' }}>Copy text</p>
                                                            <p>and send us a</p>
                                                            <button className={reg2.messageBTN}>Message here</button>
                                                        </div>
                                                        <div>
                                                            <FormControlLabel control={<Checkbox defaultChecked />} label="I have sent the above message" />
                                                            <div className='d-flex gap-1' style={{ color: '#FF6174' }}>
                                                                <ErrorIcon sx={{ width: '15px' }} />
                                                                <p>Required field</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ################documents####################### */}
                                        <FormControlLabel value="documents" control={<Radio onChange={() => { setMethod('documents') }} />} label="Official company documents" />
                                        <p style={{ paddingLeft: '2rem' }}> Verify using your organization's govt. issued business number (NTN number)</p>
                                        <div className={`p-4 pt-0 ${method === 'documents' ? reg22.displayBlock : reg22.displayNone}`}>
                                            <div className='d-flex gap-3 flex-column'>
                                                <label htmlFor="fname">Enter your NTN number</label>
                                                <div>
                                                    <TextField
                                                        placeholder='Please enter the company’s 7 digit NTN'
                                                        fullWidth
                                                    />
                                                    <div className='d-flex gap-1' style={{ color: '#FF6174' }}>
                                                        <ErrorIcon sx={{ width: '15px' }} />
                                                        <p>Required field</p>
                                                    </div>
                                                </div>
                                                <p>Your NTN will be verified online if the business exist till date or not.</p>
                                            </div>

                                        </div>


                                    </RadioGroup>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type='submit' className={`${reg2.Next1} my-3 d-flex `} style={{}}>
                                        Next</button>
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