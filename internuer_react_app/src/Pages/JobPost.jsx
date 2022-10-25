import React from 'react'
import { Link } from 'react-router-dom'
import companyLogo1 from '../assets/img/companyLogo1.png'
import Deadline from '../components/JobLive/JobDeadline'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';

import DateObject from "react-date-object";

import Post from '../css/App.module.css'
import PostDesc from '../components/JobPost/PostDesc';


const JobPost = () => {
    var date = new DateObject();
    var skillTags = ['HTML', 'CSS', 'Graphic Designing', 'UI/UX']
    var Perks = ['Office Lunch', ' Transport', 'Certificates', 'Comissions & Bonuses']


    return (

        <div className=''>
            <div className={`p-3 ${Post.Postnav} `}>
                <div className='d-flex justify-content-center'>
                    <h3 className='text-align-center'>SEO UI/UX Designing Internship Job at XYZ Company in Islamabad</h3>
                </div>
                <div className="col-md-12 d-flex pt-4">
                    <div className="col-md-2 d-flex justify-content-center">
                        <img src={companyLogo1} className={Post.cmpLogo} />
                    </div>
                    <div className="col-md-8 d-flex flex-column gap-2 px-4">
                        <h4 className='fw-bolder'>UI/UX Designing</h4>
                        <a href='https://10pearls.com/' target='_blank' rel='s' className='text-decoration-none color-primary'><strong> 10 Pearls</strong></a>
                        <div className="d-flex gap-3">
                            <LocationOnIcon />
                            <p>Islamabad</p>
                        </div>
                        <Deadline stipend="13000-20000" months="6" deadline={date.format("DD MMM YYYY")} displayClass={Post.displayNone}
                        />
                    </div>
                    <div className="col-md-4">
                        <div class={Post.dropdown}>
                            <span><ShareIcon sx={{ color: 'blue' }} xs={3} /></span>
                            <div class={Post.dropdowncontent}>
                                <div className="d-flex align-items-center">
                                    <FacebookIcon sx={{ color: 'blue' }} />
                                    <p>Facebook</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-md-12 d-flex pt-2 px-4">
                <div className="col-md-2"></div>
                <div className="col-md-8 px-4"><PostDesc cmpName='10 Pearls' Perks={Perks} skillTags={skillTags} title1="Skills Required" title2="Perks" /></div>
                <div className="col-md-4"></div>
            </div>
        </div>

    )
}

export default JobPost