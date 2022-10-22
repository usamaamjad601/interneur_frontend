import React from 'react'
import { Link } from 'react-router-dom';
import nav from '../../css/App.module.css';
import CircleIcon from '@mui/icons-material/Circle';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Nav2 = (props) => {



    return (
        <div>
            <div className={`${nav.dashboard1navbar} d-flex col-md-12 pb-2`}>
                <div className={`${nav.heading} col-md-7 p-4 pt-1 pb-0 d-flex flex-column justify-content-between`}>
                    <div >
                        <h2>{props.title}</h2>
                        <div className='d-flex gap-5'>
                            <div className='d-flex gap-3'>
                                <CircleIcon style={{ color: props.color, width: '10px' }} />
                                <strong style={{ color: `${props.color}` }}>{props.status}</strong>
                            </div>
                            <strong>Posted {props.days} ago</strong>
                        </div>
                        <div className="d-flex gap-2">
                            <p>{props.views} views |</p>
                            <p>{props.candidates} candidates |</p>
                            <p>{props.jobtype} </p>
                        </div>
                        <span className={nav.stage}>
                            {props.stage}
                        </span>

                    </div>
                    {/* <br /> */}
                    <div className="d-flex gap-2">


                    </div>
                </div>

                <div className="col-md-5 p-1">
                    <div className="d-flex justify-content-end gap-5 pt-5 px-5">
                        <FormControl fullWidth sx={{ width: '10vw' }} className={props.displayClass}>
                            <Select
                                sx={{
                                    color: "#4974ec",
                                    fontWeight: 'bold',
                                    '.MuiOutlinedInput-notchedOutline': {
                                        border: '3px solid #4974ec',
                                        borderRadius: '10px'
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#4974ec',
                                        color: "#4974ec"
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        border: '4px solid #4974ec',
                                    },
                                    '.MuiSvgIcon-root ': {
                                        fill: "#4974ec !important",
                                    }
                                }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                defaultValue="More Actions"

                            >
                                {props.moreActions.map((action) => {
                                    return (
                                        <MenuItem value={action}>{action}</MenuItem>
                                    )
                                }
                                )}


                            </Select>
                        </FormControl>
                        <Link to={props.rejectbutton === 0 ? null : props.link2}>
                            <button type="button" className={`${nav.nav2btn}  p-3 + ${props.rejectbutton === 0 ? nav.disableClass : props.btn2class}
                                `}  >{props.btn2} {props.reject}</button>
                        </Link>
                        {/* {console.log(props.button1, 'Button 1 TXT')} */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Nav2