import React from 'react'
import { Autocomplete, Box, Checkbox, Chip, createStyles, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material'
import Intern from '../../css/App.module.css'
import { Cancel } from '@mui/icons-material';
import { Link } from 'react-router-dom';




const InternshipDetail = () => {
    const catag = [
        { label: 'Web' },
        { label: 'Mobile' },
        { label: 'Desktop' },
        { label: 'Machine Learning' },
        { label: 'Data Science' },
        { label: 'Cloud Computing' },
        { label: 'Cyber Security' },
        { label: 'Artificial Intelligence' },
        { label: 'Internet of Things' },
        { label: 'Blockchain' },
        { label: 'Robotics' },
        { label: 'Augmented Reality' },
        { label: 'Virtual Reality' },
        { label: 'Game Development' },
        { label: 'Embedded Systems' },
        { label: 'UI/UX' },
        { label: 'Digital Marketing' },
        { label: 'Graphic Design' },
        { label: 'Video Editing' },
        { label: 'Content Writing' },
        { label: 'Photography' },
        { label: 'Animation' },
        { label: '3D Modelling' },
        { label: '3D Printing' },
        { label: '3D Animation' },
        { label: '3D Rendering' },
        { label: '3D Sculpting' },
        { label: '3D Texturing' },
        { label: '3D VFX' },
        { label: '3D VR' },
    ];

    const [InternType, setInternType] = React.useState('Fix');

    const catag1 = [
        { label: 'Afghanistan' },
        { label: 'Albania' },
        { label: 'Algeria' },
        { label: 'Andorra' },
        { label: 'Angola' },
        { label: 'Antigua and Barbuda' },
        { label: 'Argentina' },
        { label: 'Armenia' },
        { label: 'Australia' },
        { label: 'Austria' },
        { label: 'Azerbaijan' },
        { label: 'Bahamas' },
        { label: 'Bahrain' },
        { label: 'Bangladesh' },
        { label: 'Barbados' },
        { label: 'Belarus' },
        { label: 'Belgium' },
        { label: 'Belize' },
        { label: 'Benin' },
    ];

    const Tags = () => {
        return (
            <Box
                sx={{
                    background: "#283240",
                    height: "100%",
                    display: "flex",
                    padding: "0.4rem",
                    margin: "0 0.5rem 0 0",
                    justifyContent: "center",
                    alignContent: "center",
                    color: "#ffffff",
                }}
            >
                <Stack direction='row' gap={1}>
                    <Typography>Tags</Typography>
                    <Cancel />

                </Stack>
            </Box>
        );
    };

    const [age, setAge] = React.useState('USD');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [pay, setPay] = React.useState('Per Month');

    const handleChange1 = (event) => {
        setPay(event.target.value);
    };



    return (
        <div>
            <div>
                <div className={`${Intern.EFormHead} col-md-12 `}>
                    <h3 className='py-2'>Internship Details</h3>
                    <div className="col-md-8 p-4 pb-1">
                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <strong><strong className='text-danger'>*</strong> Title</strong>
                            </div>
                            <OutlinedInput
                                sx={{ padding: '0 !important', margin: '0 !important' }}
                                fullWidth
                                placeholder='SEO Title?'
                                id="outlined-adornment-weight"
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                required
                            />
                        </div>
                        <div className='pt-4'>
                            <div >
                                <strong><strong className='text-danger'>*</strong> Catagory</strong>

                            </div>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={catag}
                                renderInput={(params) => <TextField {...params} placeholder="Select Catagory" />}
                            />
                        </div>
                        <div className="pt-4">
                            <strong>Internship Type</strong>
                            <RadioGroup
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <div className='d-flex gap-5 px-3'>
                                    <FormControlLabel value="female" control={<Radio />} label="Regular (In office)" onClick={() => setInternType('Regular')} />
                                    <FormControlLabel value="male" control={<Radio />} label="Work From home" onClick={() => setInternType('Home')} />
                                </div>

                            </RadioGroup>
                            <div className='pt-1'>
                                <div >
                                    <strong>Location</strong>


                                </div>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-"
                                    options={catag1}
                                    renderInput={(params1) => <TextField {...params1} placeholder="Select Country" />}
                                />
                            </div>
                        </div>
                        <div className='pt-2 px-2'>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Decline applicant from the neighbouring cities" />
                        </div>
                        <div>
                            <div >
                                <strong>No. of Post</strong>
                            </div>
                            <OutlinedInput
                                sx={{ padding: '0 !important', margin: '0 !important' }}
                                fullWidth
                                placeholder='eg: 103'
                                id="outlined-adornment-weight"
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div className=' p-4'>
                        <div className=''>
                            <div >
                                <strong>Stipend</strong>
                            </div>
                            <div className={Intern.EmpFormBox}>
                                <div className='d-flex gap-5 px-3'>
                                    <RadioGroup
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        defaultValue="Fix"
                                    >
                                        <div className='d-flex gap-5 px-3'>
                                            <FormControlLabel value="Fix" control={<Radio onChange={() => setInternType('Fix')} />} label="Fix" />
                                            <FormControlLabel value="Negotiable" control={<Radio onChange={() => setInternType('Negotiable')} />} label="Negotiable" />
                                            <FormControlLabel value="Performance Based" control={<Radio onChange={() => setInternType('Performance')} />} label="Performance Based" />
                                            <FormControlLabel value="Unpaid" control={<Radio onChange={() => setInternType('Unpaid')} />} label="Unpaid" />
                                        </div>
                                    </RadioGroup>
                                </div>


                                <div className={InternType === 'Fix' ? Intern.displayBlock : Intern.displayNone}>
                                    <div className='d-flex gap-5 p-3'>
                                        <div className='d-flex'>
                                            <select class={`${Intern.selectStipend}`} aria-label="Default select example">
                                                <option value="USD">USD</option>
                                                <option value="PKR">PKR</option>
                                            </select>
                                            <div class="input-group p-0 m-0">
                                                <input type="text" class="px-3" style={{ width: '8vw' }} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='eg: 1000' />
                                            </div>
                                        </div>

                                        <select class={`${Intern.selectStipend} p-0 m-0`} aria-label="Default select example">
                                            <option value="Per Month">Per Month</option>
                                            <option value="Per Week">Per Week</option>
                                            <option value="Per Project">Per Project</option>
                                        </select>

                                    </div>
                                </div>
                                <div className={InternType === 'Negotiable' ? Intern.displayBlock : Intern.displayNone}>
                                    <div className='d-flex gap-5 p-3 '>

                                        <div className='d-flex align-items-center'>
                                            <div className='d-flex align-items-center'>
                                                <p className='px-3'>From</p>
                                                <select class={`${Intern.selectStipend}`} aria-label="Default select example">
                                                    <option value="USD">USD</option>
                                                    <option value="PKR">PKR</option>
                                                </select>
                                                <div class="input-group p-0 m-0">
                                                    <input type="text" class="" style={{
                                                        width: '8vw', padding: '8px 7px'
                                                    }} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='eg: 1000' />
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <p className='px-3'>To</p>
                                                <select class={`${Intern.selectStipend}`} aria-label="Default select example">
                                                    <option value="USD">USD</option>
                                                    <option value="PKR">PKR</option>
                                                </select>
                                                <div class="input-group p-0 m-0">
                                                    <input type="text" class="" style={{
                                                        width: '8vw', padding: '8px 7px'
                                                    }} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='eg: 1000' />
                                                </div>
                                            </div>

                                        </div>

                                        <select class={`${Intern.selectStipend} p-0 m-0`} aria-label="Default select example">
                                            <option value="Per Month">Per Month</option>
                                            <option value="Per Week">Per Week</option>
                                            <option value="Per Project">Per Project</option>
                                        </select>

                                    </div>
                                </div>

                                {/* //Preformance */}
                                <div className={InternType === 'Performance' ? Intern.displayBlock : Intern.displayNone}>
                                    <p className='px-3'>For performance-based internships, such as Business Development(sales), etc, we  insist
                                        on minimum assured stipend e.g 5000 and the rest could be incentive-based (commisions)</p>

                                    <div className='d-flex gap-5 m-3 '>

                                        <div className='d-flex flex-column gap-3 '>
                                            <div className='d-flex flex-column gap-2'>
                                                <p className='mx-3'>Minimum Assured</p>
                                                <div className="d-flex gap-5">
                                                    <div className="d-flex">
                                                        <select class={`${Intern.selectStipend}`} aria-label="Default select example">
                                                            <option value="USD">USD</option>
                                                            <option value="PKR">PKR</option>
                                                        </select>
                                                        <div class="input-group p-0 m-0">
                                                            <input type="text" class="" style={{
                                                                width: '8vw', padding: '8px 7px'
                                                            }} placeholder='eg: 1000' />
                                                        </div>
                                                    </div>
                                                    <select class={`${Intern.selectStipend} p-0 m-0`} aria-label="Default select example">
                                                        <option value="Per Month">Per Month</option>
                                                        <option value="Per Week">Per Week</option>
                                                        <option value="Per Project">Per Project</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='d-flex flex-column gap-2'>
                                                <p className='mx-3'>Commission Based</p>
                                                <div className="d-flex gap-5">
                                                    <div className="d-flex">
                                                        <select class={`${Intern.selectStipend}`} aria-label="Default select example">
                                                            <option value="USD">USD</option>
                                                            <option value="PKR">PKR</option>
                                                        </select>
                                                        <div class="input-group p-0 m-0">
                                                            <input type="text" class="" style={{
                                                                width: '8vw', padding: '8px 7px'
                                                            }} placeholder='eg: 1000' />
                                                        </div>
                                                    </div>
                                                    <select class={`${Intern.selectStipend} p-0 m-0`} aria-label="Default select example">
                                                        <option value="Per Month">Choose Scale</option>
                                                        <option value="Per Week">Per Week</option>
                                                        <option value="Per Project">Per Project</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>



                                    </div>
                                </div>
                                {/* Unpaid */}
                                <div className={InternType === 'Unpaid' ? Intern.displayBlock : Intern.displayNone}>
                                    <div className='p-3 d-flex'>
                                        <p>We allow unpaid internships only in case of NGOs or </p>
                                        <Link to='#' style={{ color: 'black' }}>niche Internship</Link>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <div >
                                <strong>Perks</strong> <span>(Optional)</span>
                            </div >
                            <div className={`${Intern.EmpFormBox} `}>
                                <div className={`px-3 `}>
                                    <div className={`d-flex justify-content-between`}>
                                        <div className='d-flex flex-column'>
                                            <FormControlLabel control={<Checkbox />} label="Certificates" />
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Free snaks & bevrages" />
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Flexible work hours" />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <FormControlLabel control={<Checkbox />} label="5 Day a week" />
                                            <FormControlLabel control={<Checkbox />} label="Informal dress Code" />
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Career development" />
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <FormControlLabel control={<Checkbox />} label="Remote Work" />
                                            <FormControlLabel control={<Checkbox />} label="Transport allowance" />
                                        </div>

                                    </div>

                                </div>
                                <FormControlLabel
                                    value="start"
                                    control={<Checkbox />}
                                    label="Does this Internship offer future job?"
                                    labelPlacement="start"
                                />


                            </div>
                        </div>
                        <div className='pt-4'>
                            <div >
                                <strong>Skills</strong> <span>(Optional)</span>
                            </div >
                            <div className={`${Intern.EmpFormBox} `}>
                                <p className='fw-light'>Recomended Skills</p>
                                <p>(Optional)</p>

                                <div>
                                    {/* <Box sx={{ flexGrow: 1 }}>
                                        <TextField
                                            fullWidth
                                            variant='standard'
                                            size='small'
                                            sx={{ margin: "1rem 0" }}
                                            margin='none'
                                            placeholder="Enter Tags here"
                                            InputProps={{
                                                startAdornment: (
                                                    <Box sx={{ margin: "0 0.2rem 0 0", display: "flex" }}>
                                                        <Tags />
                                                    </Box>
                                                ),
                                            }}
                                        />
                                    </Box> */}

                                    {/* <Chip variant="outlined" label='hello' /> */}

                                </div>


                            </div>
                        </div>
                        <div className='pt-4'>
                            <div >
                                <strong>Internship Duration</strong> <span></span>
                            </div >
                            <div className={`${Intern.EmpFormBox} `}>
                                <div className='d-flex justify-content-between p-3'>
                                    <div className='d-flex align-items-center gap-3'>
                                        <p className='px-3'>From</p>
                                        <select style={{ width: '10vw' }} className='fw-light'>
                                            <option className='fw-light' value="USD">USD</option>
                                            <option value="PKR">PKR</option>
                                        </select>

                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <p className='px-3'>Last date
                                            to apply</p>
                                        <input type="date" name="j" id="" />
                                        {/* <select className='fw-light' style={{ width: '10vw' }}>
                                            <option className='fw-light' value="USD">USD</option>
                                            <option value="PKR">PKR</option>
                                        </select> */}

                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <p className='px-3'>Joining date</p>
                                        <input type="date" name="j" id="" />

                                        {/* <select className='fw-light' style={{ width: '10vw' }}>
                                            <option className='fw-light' value="USD">USD</option>
                                            <option value="PKR">PKR</option>
                                        </select> */}

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default InternshipDetail