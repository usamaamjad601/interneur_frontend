import { MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import React from 'react'
import after from '../../css/AfterApply.module.css'

const AfterApply = () => {

    const [Gender, setGender] = React.useState('Male');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const CHARACTER_LIMIT = 300;
    const [values, setValues] = React.useState({
        name: "Hello"
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
                            <div className="col-md-3">
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
                                /></div>
                            <div className="col-md-2 d-flex flex-column">
                                <label className='fw-bolder' >Location<span className="text-danger fw-bolder"> *</span></label>
                                <select className={`${after.afterSelect} ${after.AfterShadow}`} aria-label="Default select example">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-11 d-flex flex-column gap-2 pt-3">
                            <label className='fw-bolder' >Location<span className="text-danger fw-bolder"> *</span></label>
                            <TextField id="outlined-basic"
                                variant="outlined"
                                rows={5} multiline={true}
                                placeholder="Characters"
                                inputProps={{
                                    maxlength: CHARACTER_LIMIT
                                }}
                                value={values.name}
                                helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                                onChange={wordLimit("name")}
                            />
                        </div>

                        <div className="col-md-11 d-flex justify-content-between gap-2 pt-3">
                            <div>
                                <label className='fw-bolder' >Location<span className="text-danger fw-bolder"> *</span></label>
                                <TextField id="outlined-basic"
                                    variant="outlined"
                                    rows={5} multiline={true}
                                    placeholder="Characters"
                                    inputProps={{
                                        maxlength: CHARACTER_LIMIT
                                    }}
                                    value={values.name}
                                    helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                                    onChange={wordLimit("name")}
                                />
                            </div>
                            <div>
                                <label className='fw-bolder' >Location<span className="text-danger fw-bolder"> *</span></label>
                                <TextField id="outlined-basic"
                                    variant="outlined"
                                    rows={5} multiline={true}
                                    placeholder="Characters"
                                    inputProps={{
                                        maxlength: CHARACTER_LIMIT
                                    }}
                                    value={values.name}
                                    helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                                    onChange={wordLimit("name")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default AfterApply