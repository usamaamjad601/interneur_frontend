import React from 'react'
import { Autocomplete, Checkbox, FormControl, FormControlLabel, FormLabel, makeStyles, OutlinedInput, Radio, RadioGroup, TextField } from '@mui/material'
import Intern from '../../css/App.module.css'


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
    return (
        <div>
            <div>
                <div className={`${Intern.EFormHead} col-md-12 `}>
                    <h3 className='py-2'>Internship Details</h3>
                    <div className="col-md-8 p-4">
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
                    <div className='pt-1'>
                        <div >
                            <strong>Location</strong>
                        </div>
                        <div>
                            <div className='d-flex gap-5 px-3'>
                                <FormControlLabel value="female" control={<Radio />} label="Regular (In office)" onClick={() => setInternType('Regular')} />
                                <FormControlLabel value="male" control={<Radio />} label="Work From home" onClick={() => setInternType('Home')} />
                                <FormControlLabel value="female" control={<Radio />} label="Regular (In office)" onClick={() => setInternType('Regular')} />
                                <FormControlLabel value="male" control={<Radio />} label="Work From home" onClick={() => setInternType('Home')} />

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default InternshipDetail