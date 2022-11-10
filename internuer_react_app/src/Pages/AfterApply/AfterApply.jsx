import { Chip, InputAdornment, MenuItem, OutlinedInput, Paper, Select, TextField } from '@mui/material'
import React from 'react'
import after from '../../css/AfterApply.module.css'
import { styled } from "@mui/material/styles";

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
    return (
        <div>
            <div className="col-md-12 d-flex ">
                <div className="col-md-9">
                    <div className={`${after.back} p-5`}>
                        <h1> <span style={{ color: '#48ACFA' }}> Check your CV details for </span> UI/UX Designer job</h1>
                        <p>You can update your profile information here. </p>


                        <div className={`${after.TopAfter} d-flex gap-2 align-items-center mt-4 pb-5 col-md-11 justify-content-between`}>
                            <div className={`d-flex flex-column col-md-7`}>


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
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default AfterApply