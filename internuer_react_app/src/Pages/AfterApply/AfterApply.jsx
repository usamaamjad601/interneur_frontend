import { Button, Chip, InputAdornment, MenuItem, OutlinedInput, Paper, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import after from '../../css/AfterApply.module.css'
import app1 from '../../css/App.module.css'
import { styled } from "@mui/material/styles";
import AIicon from '../../assets/img/AI.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5)
}));

const AfterApply = () => {

    const [chipData, setChipData] = React.useState([
        { key: 1, label: 'MS-Word' },
        { key: 2, label: 'Presentation' },
    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (event.target.value === '') {
                alert('Plz Insert a value first')
            }
            else if (chipData.find((element) => {
                return element.label === event.target.value
            })) {
                alert('Already Exist')
            }
            else {
                setChipData([...chipData, { key: chipData.length + 1, label: event.target.value }])
            }
        }
    }


    const [Gender, setGender] = React.useState('Male');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const CHARACTER_LIMIT = 300;
    const [values, setValues] = React.useState({
        name: "This text is 300 characters. This text is 300 characters. Loriam ipsum dolor amit sit. This text is 300 characters. This text is 300 characters. This text is 300 characters. This text is 300 characters. This text is 300 characters. This text is 300 characters. This text is 300 characters. Characters"
    });

    const wordLimit = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    //Image Uloader
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    return (
        <div>
            <div className="col-md-12 d-flex ">
                <div className="col-md-1"></div>
                <div className="col-md-8">
                    <div className={`${after.back} p-5`}>
                        <h1> <span style={{ color: '#48ACFA' }}> Check your CV details for </span> UI/UX Designer job</h1>
                        <p>You can update your profile information here. </p>


                        <div className={`${after.TopAfter} d-flex gap-2 align-items-center mt-4 pb-5 col-md-11 justify-content-between`}>
                            {/* <div className={`d-flex flex-column col-md-7`}>
                                <label className='fw-bolder' >Your Name<span className="text-danger fw-bolder"> *</span></label>
                                <OutlinedInput
                                    fullWidth
                                    className={after.AfterShadow}
                                    placeholder='Enter your Name'
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                    required
                                    size='small'
                                />
                            </div> */}
                            <div className={`d-flex flex-column col-md-7`}>
                                <div className="d-flex gap-4 align-items-center">
                                    <div>
                                        {!selectedFile &&
                                            <div>
                                                <input id='actual-btn' type='file' onChange={onSelectFile} hidden />
                                                <label className={`${after.picInput} `} for="actual-btn">Edit Photo</label>
                                            </div>
                                        }
                                        {selectedFile && <img src={preview} alt='img' className={after.FormProfile} />}
                                    </div>
                                    <div>
                                        <h1>Wajahat Rauf</h1>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-1"></div>

                            <div className={`d-flex flex-column col-md-3`}>
                                <label className='fw-bolder' >Location<span className="text-danger fw-bolder"> *</span></label>
                                <OutlinedInput
                                    fullWidth
                                    className={after.AfterShadow}
                                    placeholder='Current Location'
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                    required
                                    size='small'
                                />
                            </div>
                        </div>
                        <div className="col-md-11 d-flex pt-4 justify-content-between">
                            <div className="col-md-5">
                                <label className='fw-bolder' >Email Address<span className="text-danger fw-bolder"> *</span></label>
                                <OutlinedInput
                                    fullWidth
                                    className={after.AfterShadow}
                                    defaultValue='example@gmail.com'
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                    required
                                    size='small'
                                />
                            </div>
                            <div className="col-md-3">
                                <label className='fw-bolder' >Phone Number<span className="text-danger fw-bolder"> *</span></label>
                                <OutlinedInput
                                    fullWidth
                                    className={after.AfterShadow}
                                    defaultValue='+923301234567'
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                    required
                                    size='small'
                                /></div>
                            <div className="col-md-2 d-flex flex-column">
                                <label className='fw-bolder' >Gender<span className="text-danger fw-bolder"> *</span></label>
                                <select className={`${after.afterSelect} ${after.AfterShadow}`} aria-label="Default select example">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-11 d-flex flex-column gap-2 pt-3">
                            <label className='fw-bolder' >Profile Summary</label>
                            <TextField id="outlined-basic"
                                variant="outlined"
                                rows={5}
                                multiline={true}
                                inputProps={{
                                    maxLength: CHARACTER_LIMIT
                                }}
                                value={values.name}
                                helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                                onChange={wordLimit("name")}
                            />
                        </div>

                        <div className="col-md-11 d-flex justify-content-between gap-2 pt-3">
                            <div className='col-md-5 d-flex flex-column gap-2'>
                                <label className='fw-bolder' >Education<span className="text-danger fw-bolder"> *</span></label>
                                <TextField id="outlined-basic"
                                    variant="outlined"
                                    rows={5} multiline={true}
                                    placeholder="Characters"
                                    inputProps={{
                                        maxLength: CHARACTER_LIMIT
                                    }}
                                    value={values.name}
                                    helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                                    onChange={wordLimit("name")}
                                />
                            </div>
                            <div className='col-md-5 d-flex flex-column gap-2'>
                                <label className='fw-bolder' >Job Experience<span className="text-danger fw-bolder"> *</span></label>
                                <TextField id="outlined-basic"
                                    variant="outlined"
                                    rows={5} multiline={true}
                                    placeholder="Characters"
                                    inputProps={{
                                        maxLength: CHARACTER_LIMIT
                                    }}
                                    value={values.name}
                                    helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                                    onChange={wordLimit("name")}
                                />
                            </div>
                        </div>
                        <div className="col-md-11 d-flex flex-column gap-2 pt-3">
                            <label className='fw-bolder' >Projects/Portfolio<span className="text-danger fw-bolder"> *</span></label>
                            <TextField id="outlined-basic"
                                variant="outlined"
                                rows={5} multiline={true}
                                placeholder="Characters"

                                inputProps={{
                                    maxLength: CHARACTER_LIMIT
                                }}
                                value={values.name}
                                helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                                onChange={wordLimit("name")}
                            />
                        </div>
                        {/* //Skilss */}
                        <div className="col-md-11 d-flex flex-column gap-2 pt-3">
                            <label className='fw-bolder' >Skills<span className="text-danger fw-bolder"> *</span></label>
                            <TextField id="outlined-basic"

                                className={after.AfterShadow}
                                variant="outlined"
                                onKeyDown={handleKeyDown}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment variant='standard' position='end' sx={{ listStyleType: 'none' }}>

                                            {chipData && chipData.map((data, index) => {
                                                return (
                                                    <ListItem key={index} >
                                                        <Chip
                                                            color="primary"
                                                            variant="filled"
                                                            sx={{ borderRadius: '5px', backgroundColor: '#007BBE', color: 'white', fontWeight: 'bold' }}
                                                            label={data.label}
                                                            onDelete={data.label === '' ? undefined : handleDelete(data)}
                                                        />
                                                    </ListItem>
                                                );

                                            })}


                                        </InputAdornment>
                                    ),
                                }}

                            />
                        </div>
                        <div className="col-md-11 d-flex justify-content-around pt-5">
                            <button className={after.afterBTN1}>
                                SUBMIT & APPLY
                            </button>
                            <button className={after.afterBTN2}>
                                APPLY & CREATE PROFILE
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 p-3">
                    <div className={after.HelpBox}>
                        <div className={`d-flex flex-column gap-2 justify-content-center align-items-center p-2 ${after.HelpHead} `}>
                            <img src={AIicon} alt="" />
                            <h3 className='fw-bolder'>Let us help you!</h3>
                            <p className='fw-bolder'>Help our AI to match you with best recruiters. </p>
                        </div>
                        <div className="d-flex flex-column p-2">
                            <div className='d-flex align-items-center gap-4 mb-4'>
                                <CheckCircleIcon sx={{ color: '#2EA6FC', fontSize: "2rem", stroke: "#007BBE", strokeWidth: 1 }} />
                                <p className='fw-bold'>Speed up the application process with Quick Apply. Apply to jobs with your updated CV every time. </p>
                            </div>
                            <div className='d-flex align-items-center gap-4 mb-4'>
                                <CheckCircleIcon sx={{ color: '#2EA6FC', fontSize: "2rem", stroke: "#007BBE", strokeWidth: 1 }} />
                                <p className='fw-bold'>See jobs with similar skills as yours.</p>
                            </div>
                            <div className='d-flex align-items-center gap-4 mb-4'>
                                <CheckCircleIcon sx={{ color: '#2EA6FC', fontSize: "2rem", stroke: "#007BBE", strokeWidth: 1 }} />
                                <p className='fw-bold'>Be visible to 1000s of recruiters. </p>
                            </div>
                            <div className='d-flex align-items-center gap-4 mb-4'>
                                <CheckCircleIcon sx={{ color: '#2EA6FC', fontSize: "2rem", stroke: "#007BBE", strokeWidth: 1 }} />
                                <p className='fw-bold'>Virtual video interviews. Reduce pre-screening time. </p>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className={`d-flex flex-column gap-3 ${after.premium}`}>
                                <OutlinedInput
                                    fullWidth
                                    placeholder='Set password'
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                    required
                                    size='small'
                                />
                                <Button variant="contained" sx={{ padding: '0.6rem 0' }}>CREATE PREMIUM PROFILE (free)</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AfterApply