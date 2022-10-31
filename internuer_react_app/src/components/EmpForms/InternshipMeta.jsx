import React from 'react'
import { makeStyles, OutlinedInput, TextField } from '@mui/material'
import Intern from '../../css/App.module.css'


const InternshipMeta = () => {



    return (
        <div>

            <div>
                <div className={`${Intern.EFormHead} col-md-12 `}>
                    <h3 className='py-2'>Internship Meta</h3>
                    <div className="col-md-8 p-4">
                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <strong><strong className='text-danger'>*</strong> SEO Title</strong>

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



                    </div>
                    <div className='px-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <strong>Additional Internship Detail</strong>

                        </div>

                        <TextField
                            sx={{ padding: 0 }}

                            fullWidth
                            multiline={true}


                            variant="outlined"
                        />
                    </div>
                    <div className='px-4 pt-4'>
                        <div className='d-flex gap-3 align-items-center'>
                            <strong><strong className='text-danger'>*</strong> Logo</strong>
                            <input type="file" className={Intern.filesubmit} />


                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default InternshipMeta