import React from 'react'
import { Link } from 'react-router-dom'
import reg3 from '../../css/app2.module.css'

const PostInternship = () => {
    return (
        <div >
            <div className={`container ${reg3.RegForm}`}>
                <div className="col-md-12 row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex flex-column gap-3">
                        <div className={reg3.top}>
                            {/* <!-- progress bar --> */}
                            <div className={reg3.stepperWrapper}>
                                <div className={`${reg3.stepperItem} ${reg3.active} `}>
                                    <div className={`${reg3.stepCounter} ${reg3.stepperActive}`}>1</div>
                                    <div > Personal details</div>
                                </div>
                                <div className={`${reg3.stepperItem} ${reg3.active}`}>
                                    <div className={`${reg3.stepCounter} ${reg3.stepperActive}`}>2</div>
                                    <div >Organization details</div>
                                </div>
                                <div className={`${reg3.stepperItem} ${reg3.active}`}>
                                    <div className={`${reg3.stepCounter} ${reg3.stepperActive}`}>3</div>
                                    <div>Post Internship</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className={reg3.detail}>
                                <h2 className='fw-bolder pb-2'>Post an Internship</h2>
                                <p>Need Help? (visit for <Link to="#popup1" style={{ color: '#4a8ed3' }}>Guidlines</Link>)</p>
                                <br />
                                <h4 className='fw-bolder text-start p-2'>Internship details</h4>
                                <div className={`${reg3.box} p-3`}>
                                    <h6 className='fw-bolder'>Category</h6>
                                    <div class="radioslct">
                                        <p class="radioleft"></p>
                                    </div>
                                    <div class='d-flex gap-2 p-1'>
                                        <input type="radio" id="rd" name="radio" />
                                        <span class={reg3.checkmark}></span>Web Designing & Development
                                    </div>

                                </div>
                            </div>
                        </div>

                        <button type='submit' className={reg3.Next}>
                            Next</button>

                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div >

    )
}

export default PostInternship