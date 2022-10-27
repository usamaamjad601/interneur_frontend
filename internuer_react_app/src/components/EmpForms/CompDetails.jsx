import { makeStyles, OutlinedInput, TextField } from '@mui/material'

import React from 'react'
import comp from '../../css/App.module.css'

const CompDetails = () => {

    const CHARACTER_LIMIT = 100;
    const [values, setValues] = React.useState({
        name: "Hello"
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };


    return (
        <div>
            <div className={`${comp.EFormHead} col-md-12 `}>
                <h3 className='py-2'>Comapny Details</h3>
                <div className="col-md-8 p-4">
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <strong><strong className='text-danger'>*</strong> Comapny Name</strong>

                        </div>
                        <OutlinedInput
                            fullWidth
                            placeholder='What can you bring to the company?'
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            required

                        />
                    </div>
                    <div className='pt-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <strong><strong className='text-danger'>*</strong> Comapny Website</strong>

                        </div>
                        <OutlinedInput
                            fullWidth
                            placeholder='What can you bring to the company?'
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',

                            }}
                            required
                        />
                    </div>
                    <div className='pt-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <strong>Social Media Links</strong>

                        </div>
                        <OutlinedInput
                            fullWidth
                            placeholder='What can you bring to the company?'
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </div>

                </div>
                <div className='px-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <strong>About Company</strong>

                    </div>
                    {/* <OutlinedInput
                        fullWidth
                        multiline={true}
                        label="Limit"
                        placeholder='What can you bring to the company?'
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            maxlength: CHARACTER_LIMIT
                        }}
                        value={values.name}
                        helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                        onChange={handleChange("name")}
                    /> */}
                    <TextField
                        fullWidth
                        multiline={true}
                        inputProps={{
                            maxlength: CHARACTER_LIMIT
                        }}
                        value={values.name}
                        helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                        onChange={handleChange("name")}
                        variant="outlined"
                    />
                </div>
                <div className='px-4 pt-4'>
                    <div className='d-flex gap-3 align-items-center'>
                        <strong><strong className='text-danger'>*</strong> Logo</strong>
                        <input type="file" className={comp.filesubmit} />


                    </div>

                </div>

            </div>
        </div>
    )
}

export default CompDetails