import React from 'react'
import prof from '../../assets/img/profile.png'
import DInfoAbout from './DInfoAbout'
import DAcoordion from './DAcoordion'
import DInfo from '../../css/App.module.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box, Button, MobileStepper, Paper } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'

// import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Navigation } from 'swiper';
// import 'swiper/swiper.min.css';
// import 'swiper/modules/autoplay/autoplay.min.css';
// import 'swiper/modules/keyboard/keyboard.min.css';
// import 'swiper/modules/pagination/pagination.min.css';
// import 'swiper/modules/scrollbar/scrollbar.min.css';
// import 'swiper/modules/zoom/zoom.min.css';
// import 'swiper/modules/navigation/navigation.min.css';
// import 'swiper/css/hash-navigation.css'
// import { useSwiper } from 'swiper/react';
// const swiper = useSwiper();
// import '@ionic/react/css/ionic-swiper.css';


// import Button from "@material-ui/cor/Button";
// import MobileStepper from "@material-ui/core/MobileStepper";
// import  from "@material-ui/core/Paper";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import Typography from "@material-ui/core/Typography";
// import { useTheme } from "@material-ui/core/styles";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import { useTheme } from "@material-ui/styles";








const DashboardInfo = () => {

    const MyCollection = [
        {
            label: "First Picture",
            imgPath:
                "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
        },
        {
            label: "Second Picture",
            imgPath:
                "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
        },
        {
            label: "Third Picture",
            imgPath:
                "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
        },
    ];



    // const swiper = useSwiper();
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}onClick={() => swiper.slideNext()}

    return (
        <div>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><div className={`${DInfo.dInfoWrapper} col-md-12 p-3 d-flex flex-column`}>
                        <div className={`${DInfo.dInfoProfile}  d-flex gap-2`}>
                            <div className="d-flex gap-3 align-items-center">
                                <ArrowCircleLeftIcon fontSize="large" sx={{ cursor: "pointer" }} />
                                <ArrowCircleRightIcon fontSize="large" sx={{ cursor: "pointer" }} />
                                <img
                                    src={prof}
                                    alt="Profile"
                                    className={DInfo.profileImg}
                                />
                                <div>
                                    <h4>Danish Kaneria</h4>
                                    <p>Ui Designer</p>
                                </div>

                            </div>
                        </div>

                        <div className="mt-2">
                            <DInfoAbout />
                        </div>
                        <div className="mt-2">
                            <DAcoordion />
                        </div>
                    </div>
                    </div>
                    <div class="swiper-slide"><div className={`${DInfo.dInfoWrapper} col-md-12 p-3 d-flex flex-column`}>
                        <div className={`${DInfo.dInfoProfile}  d-flex gap-2`}>
                            <div className="d-flex gap-3 align-items-center">
                                <ArrowCircleLeftIcon fontSize="large" sx={{ cursor: "pointer" }} />
                                <ArrowCircleRightIcon fontSize="large" sx={{ cursor: "pointer" }} />
                                <img
                                    src={prof}
                                    alt="Profile"
                                    className={DInfo.profileImg}
                                />
                                <div>
                                    <h4>Danish Kaneria</h4>
                                    <p>Ui Designer</p>
                                </div>

                            </div>
                        </div>

                        <div className="mt-2">
                            <DInfoAbout />
                        </div>
                        <div className="mt-2">
                            <DAcoordion />
                        </div>
                    </div>
                    </div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <div class="swiper-scrollbar"></div>
            </div>

        </div>
    )
}

export default DashboardInfo