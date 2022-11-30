import React, { useEffect, useState } from 'react'
import Deadline from '../components/JobLive/JobDeadline'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';

import Post from '../css/App.module.css'
import PostDesc from '../components/JobPost/PostDesc';
import OpenPosition from '../components/JobPost/OpenPosition';
import axios from 'axios';


const JobPost = () => {
    useEffect(() => {
        getData();
        getPerks();
    }, []);

    var skillTags = ['HTML', 'CSS', 'Graphic Designing', 'UI/UX']

    const [Pdata, setPdata] = useState([]);

    function getData() {
        axios({
            method: "get",
            url: 'https://interneur.herokuapp.com/api/internship-listings/',
        })
            .then(function (response) {
                setPdata(response.data[0]);
                // console.log(response, 'response')
                // console.log(Pdata, 'Pdata')
            })

            .catch(function (response) {
                console.log(response, 'error');
            });
    }

    const [perks, setPerks] = useState([]);

    function getPerks() {
        axios({
            method: "get",
            url: 'https://interneur.herokuapp.com/api/perk-listings/',
        })
            .then(function (res) {
                setPerks(res.data);
                // console.log(res.data, 'response')
                // console.log(perks, 'Perks')
            })

            .catch(function (res) {
                console.log(res, 'error');
            });
    }



    var perksdata = []
    perks.map((perk) => {
        Pdata.perks.map((perkId, i) => {

            if (perk.id === Pdata.perks[i]) {
                perksdata.push(perk.name)
            }
        })
    })






    return (
        <div className=''>
            <div className={`p-3 ${Post.Postnav} `}>
                <div className='d-flex justify-content-center'>
                    <h3 className='text-align-center'>{Pdata.seo_title} at {Pdata.company_name}</h3>
                </div>
                <div className="col-md-12 d-flex pt-4">
                    <div className="col-md-2 d-flex justify-content-center">
                        <img src={Pdata.logo} className={Post.cmpLogo} alt="CmpLogo" />
                    </div>
                    <div className="col-md-8 d-flex flex-column gap-2 px-4">
                        <h4 className='fw-bolder'>{Pdata.title}</h4>
                        <a href={Pdata.website} target='_blank' rel='noreferrer' className='text-decoration-none color-primary'><strong>{Pdata.company_name}</strong></a>
                        <div className="d-flex gap-3">
                            <LocationOnIcon />
                            <p>{Pdata.city}</p>
                        </div>
                        <Deadline stipend={Pdata.amount} months={Pdata.internship_duration} deadline={Pdata.dead_line} displayclassName={Post.displayNone}
                        />
                    </div>
                    <div className="col-md-2">
                        <div className={Post.dropdown}>
                            <span><ShareIcon sx={{ color: 'blue' }} xs={3} /></span>
                            <div className={Post.dropdowncontent}>
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
                <div className="col-md-8 px-4"><PostDesc cmpName={Pdata.company_name} cmpDesc={Pdata.about} addInternDetail={Pdata.additional_internship_detail} responsibilities={Pdata.responsibilities} whoCanApply={Pdata.who_can_apply} Perks={perksdata} skillTags={skillTags} title1="Skills Required" title2="Perks" /></div>
                <div className="col-md-2 px-4 pt-5">
                    <OpenPosition NumofPosition={Pdata.no_of_position} />
                </div>
            </div>
        </div>
    )
}

export default JobPost