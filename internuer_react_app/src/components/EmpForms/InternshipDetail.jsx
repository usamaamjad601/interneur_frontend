import React from 'react'
import { Autocomplete, Box, Checkbox, Chip, FormControlLabel, FormLabel, OutlinedInput, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import Intern from '../../css/App.module.css'
import { Cancel } from '@mui/icons-material';


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

    const [InternType, setInternType] = React.useState('Regular');

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
                                    <FormControlLabel value="female" control={<Radio />} label="Regular (In office)" onClick={() => setInternType('Regular')} />
                                    <FormControlLabel value="male" control={<Radio />} label="Work From home" onClick={() => setInternType('Home')} />
                                    <FormControlLabel value="female" control={<Radio />} label="Regular (In office)" onClick={() => setInternType('Regular')} />
                                    <FormControlLabel value="male" control={<Radio />} label="Work From home" onClick={() => setInternType('Home')} />
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
                    </div>



                </div>
            </div>
        </div>
    )
}

export default InternshipDetail