import React, { useState } from 'react'
import prof from '../../assets/img/profile.png'
import DInfoAbout from './DInfoAbout'
import DAcoordion from './DAcoordion'
import DInfo from '../../css/App.module.css'


// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'


import MyContext from '../../Context/MyContext';
// import DashboardTable from './DashboardTable'


const DashboardInfo = (props) => {

    const [user, setUser] = useState("Jesse Hall");
    const provid = () => {
        <MyContext.Provider value="Hello">

        </MyContext.Provider>
    }



    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider(

        {
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        }
    )

    return (
        <div>
            {loaded && instanceRef.current && (
                <div className={DInfo.sliderArrows} >
                    <div className={DInfo.innerArrows}>
                        <Arrow
                            style={{ color: 'red' }}
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />
                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </div>
                </div>
            )}
            <div className={DInfo.InfoParent}>
                <div ref={sliderRef} className="keen-slider">
                    {[...Array(20)].map((x, i) =>
                        <div className="keen-slider__slide number-slide1" id={`slide${i}`} key={i}>
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