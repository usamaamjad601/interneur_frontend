import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



const DS_form = () => {
    return (
        <div>
            <div className="container p-4 pt-2">
                <h4>Let's Invite them for interviews</h4>
                <p>Choose how you want to interview them?</p>
                <p>Send emails to selected candidates</p>
                <FormControl sx={{ ml: '1rem' }}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="In-office" control={<Radio />} label="In-office Interview" />
                        <FormControlLabel value="Live" control={<Radio />} label="Live Interview" />
                        <FormControlLabel value="Recorded" control={<Radio />} label="Recorded Interview" />
                    </RadioGroup>
                </FormControl>
                <div className="form-line "></div>
                <div className="form-inputs d-flex flex-column gap-3" >







                    <TextField id="outlined-basic" label="Contact Person Name" variant="outlined" fullWidth={true} autoFocus />
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth={true} />
                    <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth={true} multiline={true} />
                    <TextField
                        id="datetime-local"
                        fullWidth={true}
                        label="Choose Date and Time"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt magni facilis blanditiis ea similique, velit doloremque? Autem deserunt nobis laudantium, simil</p>
                    <div className="d-flex col-md-12">
                        <FormControl sx={{ m: 1, minWidth: 250 }} className="col-md-8">
                            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"

                                label="Age"

                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <button className="col-md-4 button">Outlined</button>
                    </div>




                </div>


            </div>
        </div>
    )
}

export default DS_form