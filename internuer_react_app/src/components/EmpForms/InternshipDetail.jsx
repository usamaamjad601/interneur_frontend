import React, { useState } from 'react'
import { Autocomplete, Box, Checkbox, Chip, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material'
import Intern from '../../css/App.module.css'
import { Cancel } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';


const InternshipDetail = () => {

    const [chipData, setChipData] = React.useState([
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const PushData = (e) => {

        const values = document.getElementById("wage");
        // var joined = chipData.concat([{ key: (chipData.length + 1), label: values.value }]);

        //chipData.push();
        setChipData([...chipData, { key: chipData.length + 1, label: values.value }])
        //setChipData({ chipData: joined });


        console.log(e.target.value)
        //console.log(joined, 'chipData');


    }



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

    // function search(e) {
    //     if (e.keyCode == 13) {
    //         alert("should get the innerHTML or text value here");
    //     }
    // }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const values = document.getElementById("wage");
            if (values.value === '') {
                alert('Plz Insert a value first')
            }
            else if (chipData.find((element) => {
                return element.label === values.value
            })) {
                alert('Already Exist')
            }
            else {
                setChipData([...chipData, { key: chipData.length + 1, label: values.value }])
            }
        }
    }
    const AddInfoBox = () => {

    }
    const [inputList, setInputList] = useState([
        <div>
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
    ]);
    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Input key={inputList.length} />));
    };

    const Input = () => {
        return <div>
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

        </div>;
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
                                    <FormControl>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            defaultValue="Fix"
                                        >
                                            <FormControlLabel value="Fix" control={<Radio onChange={() => setInternType('Fix')} />} label="Fix" />
                                            <FormControlLabel value="Negotiable" control={<Radio onChange={() => setInternType('Negotiable')} />} label="Negotiable" />
                                            <FormControlLabel value="Performance Based" control={<Radio onChange={() => setInternType('Performance')} />} label="Performance Based" />
                                            <FormControlLabel value="Unpaid" control={<Radio onChange={() => setInternType('Unpaid')} />} label="Unpaid" />

                                        </RadioGroup>
                                    </FormControl>
                                </div>

                                <div className=''>
                                    <div className={InternType === 'Fix' ? Intern.displayBlock : Intern.displayNone}>
                                        <div className='d-flex justify-content-around p-3'>
                                            <div className='d-flex gap-3 align-items-center'>
                                                <p className=' fw-bold'>From</p>
                                                <div className='d-flex'>
                                                    <select className={Intern.EmpFormSelect}>
                                                        <option selected>PKR</option>
                                                        <option value="1">USD</option>
                                                    </select>
                                                    <input type="text" style={{ width: '10vw' }} />
                                                </div>
                                            </div>


                                            <select className={Intern.EmpFormSelect} >
                                                <option selected>Per month</option>
                                                <option value="1">USD</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className={InternType === 'Negotiable' ? Intern.displayBlock : Intern.displayNone}>
                                        <p className='px-3 '>The Stipend must be negotiated and finalized before the internship starts</p>
                                        <div className='d-flex justify-content-around p-3'>
                                            <div className='d-flex gap-3 align-items-center'>
                                                <p className=' fw-bold'>From</p>
                                                <div className='d-flex'>
                                                    <select className={Intern.EmpFormSelect}>
                                                        <option selected>PKR</option>
                                                        <option value="1">USD</option>
                                                    </select>
                                                    <input type="text" style={{ width: '10vw' }} />
                                                </div>
                                            </div>
                                            <div className='d-flex gap-3 align-items-center'>
                                                <p className=' fw-bold'>To</p>
                                                <div className='d-flex'>
                                                    <select className={Intern.EmpFormSelect}>
                                                        <option selected>PKR</option>
                                                        <option value="1">USD</option>
                                                    </select>
                                                    <input type="text" style={{ width: '10vw' }} placeholder='5000.0' />
                                                </div>
                                            </div>


                                            <select className={Intern.EmpFormSelect} >
                                                <option selected>Per month</option>
                                                <option value="1">USD</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className={InternType === 'Performance' ? Intern.displayBlock : Intern.displayNone}>
                                        <p className='px-3 '>For performance-based internships, such as Business Development(sales), etc, we  insist
                                            on minimum assured stipend e.g 5000 and the rest could be incentive-based (commisions)</p>
                                        <div className='d-flex justify-content-around p-3'>
                                            <div className='d-flex gap-3 flex-column '>
                                                <p className=' fw-bold'>Minimum Assured</p>
                                                <div className='d-flex gap-3'>
                                                    <div className='d-flex'>
                                                        <select className={Intern.EmpFormSelect}>
                                                            <option selected>PKR</option>
                                                            <option value="1">USD</option>
                                                        </select>
                                                        <input type="text" style={{ width: '10vw' }} />
                                                    </div>
                                                    <select className={Intern.EmpFormSelect} style={{ width: '100%' }}>
                                                        <option selected>Per month</option>
                                                        <option value="1">USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='d-flex gap-3 flex-column '>
                                                <p className=' fw-bold'>Minimum Assured</p>
                                                <div className='d-flex gap-3'>
                                                    <div className='d-flex'>
                                                        <select className={Intern.EmpFormSelect}>
                                                            <option selected>PKR</option>
                                                            <option value="1">USD</option>
                                                        </select>
                                                        <input type="text" style={{ width: '10vw' }} />
                                                    </div>
                                                    <select className={Intern.EmpFormSelect} style={{ width: '100%' }}>
                                                        <option selected>Choose Scale</option>
                                                        <option value="1">USD</option>
                                                    </select>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className={InternType === 'Unpaid' ? Intern.displayBlock : Intern.displayNone}>
                                        <div className="d-flex gap-1 p-3">
                                            <p>We allow unpaid internships only in case of NGOs or </p>
                                            <Link to='#' style={{ color: 'black', }}> niche internships</Link>
                                        </div>
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
                                <strong>Skills</strong>
                            </div >
                            <div className={`${Intern.EmpFormBox} d-flex flex-column  p-3`}>
                                <div className='d-flex mb-2'>
                                    <p className='fw-light'>Recomended Skills</p>
                                    <p>(Optional)</p>
                                </div>
                                <div>
                                    <div className={`d-flex ${Intern.EmpFormBox}`} style={{ height: '8vh' }}>
                                        {chipData && chipData.map((data, index) => {
                                            return (
                                                <ListItem key={index} >
                                                    <Chip
                                                        sx={{ borderRadius: '5px' }}
                                                        label={data.label}
                                                        onDelete={data.label === '' ? undefined : handleDelete(data)}
                                                    />
                                                </ListItem>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className=' mb-2'>
                                    <p className='fw-light'>Skills Required</p>

                                </div>
                                <div>
                                    <input type="text" id='wage' onKeyDown={handleKeyDown} style={{ padding: '10px', width: '100%' }} />


                                </div>

                            </div>
                        </div>
                        <div className='pt-4'>
                            <div >
                                <strong>Internship Duration</strong>
                            </div >
                            <div className={`${Intern.EmpFormBox} d-flex flex-column  p-3`}>
                                <div className='d-flex justify-content-around p-3'>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <p className='fw-light'>Duration</p>
                                        <select style={{ width: '7vw' }}>
                                            <option selected>2 Weeks</option>
                                            <option value="1">1 month</option>
                                            <option value="1">3 month</option>

                                        </select>
                                    </div>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <p className='fw-light'>Last Date to Apply</p>
                                        <input type="date" style={{ width: '7vw' }} />

                                    </div>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <p className='fw-light'>Joining date</p>
                                        <input type="date" style={{ width: '7vw' }} />

                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className='pt-4'>
                            <div className='d-flex gap-2'>
                                <strong>Education</strong>
                                <p>(Optional)</p>
                            </div >
                            <div className={`${Intern.EmpFormBox} d-flex flex-column  p-3 px-5`}>
                                <div className='d-flex flex-column gap-3'>
                                    {inputList}
                                </div>
                                <div className='d-flex justify-content-end p-1'>
                                    <p className='text-align-center fw-bolder' onClick={onAddBtnClick} style={{ cursor: 'pointer', color: 'blue' }}>+ Add info</p>
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