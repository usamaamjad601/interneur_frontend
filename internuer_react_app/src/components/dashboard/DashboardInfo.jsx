import React from 'react'
import prof from '../../assets/img/profile.png'
import DInfoAbout from './DInfoAbout'
import DAcoordion from './DAcoordion'
import DInfo from '../../css/App.module.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


const DashboardInfo = ({ slideMap }) => {




    //Slick Slider
    function Arrow(props) {
        let className = props.type === "next" ? "nextArrow" : "prevArrow";
        className += " arrow";
        const char = props.type === "next" ? ">" : "<";
        return (
            <span className={className} onClick={props.onClick}>
                {char}
            </span>
        );
    }

    return (
        <div>
            <div className={DInfo.InfoParent}>
                {/* <div ref={sliderRef} className="keen-slider"> */}
                <div className="App">
                    <Slider
                        // ref={this.slider}
                        nextArrow={<Arrow type="next" />}
                        prevArrow={<Arrow type="prev" />}

                        afterChange={(index) => {
                            slideMap(index);
                            console.log('object');
                            console.log('current', index);
                        }}


                    >
                        {[...Array(20)].map((x, i) =>
                            <div className="" id={`slide${i}`} key={i}>
                                {/* {slideMap(i)} */}


                                <div className={`${DInfo.dInfoWrapper} col-md-12 p-3 d-flex flex-column`}>
                                    <div className={`${DInfo.dInfoProfile}  d-flex`}>
                                        <div className="d-flex gap-1 align-items-center">
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
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg style={{ width: '20px', hight: '20px', fill: 'green' }}
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

export default DashboardInfo