import React, { useState } from 'react'
import SForm from '../../css/App.module.css'
import prof from '../../assets/img/profile.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';



const SubmitedForm = (props) => {
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById(SForm.more);
        var btnText = document.getElementById("myBtn");
        console.log("Calling Mu Bfu");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }


    return (
        <div className={SForm.InfoParent}>
            <div className={`${SForm.dInfoWrapper} col-md-12 p-3 d-flex flex-column`}>
                <div className={`${SForm.dInfoProfile}  d-flex`}>
                    <div className="d-flex gap-1 align-items-center">
                        <img
                            src={prof}
                            alt="Profile"
                            className={SForm.profileImg}
                        />
                        <div>
                            <h4>Danish Kaneria</h4>
                            <p>Ui Designer</p>
                        </div>
                    </div>
                </div>
                <div className={`${SForm.about} p-1`}>
                    <h6 >About me</h6>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasell dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id={SForm.more}>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.is imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></span>
                    <span id="myBtn" className={SForm.readMore} style={{ zIndex: '10' }} onClick={myFunction}>Read more...</span>
                </div>
                <div className={`${SForm.SubmitForm} pt-2`}>
                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <strong>Question No 1</strong>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

                        </div>
                        <OutlinedInput
                            fullWidth
                            multiline={true}
                            placeholder='What can you bring to the company?'
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </div>

                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <strong>Question No 2</strong>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

                        </div>
                        <OutlinedInput
                            fullWidth
                            multiline={true}
                            placeholder='What can you bring to the company?'
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </div>

                    <div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <strong>Question No 3</strong>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

                        </div>
                        <OutlinedInput
                            fullWidth
                            multiline={true}
                            placeholder='What can you bring to the company?'
                            id="outlined-adornment-weight"
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </div>

                    <div className='d-flex mt-3'>
                        <Button variant="outlined" sx={{
                            ':hover': {
                                bgcolor: '#dd4e67',
                                color: 'white',
                                border: 'none',
                            },
                            width: '33%', margin: 'auto', fontWeight: 'bolder', border: '2px solid #dd4e67', color: '#dd4e67'
                        }} >Decline</Button>
                        <Button variant="contained" sx={{
                            ':hover': {
                                bgcolor: '#74adf1',
                                color: 'black',
                                border: 'none'

                            },
                            width: '33%', margin: 'auto', fontWeight: 'bolder'
                        }}>Send offer</Button>




                    </div>
                </div>

            </div>
        </div >
    )
}



export default SubmitedForm