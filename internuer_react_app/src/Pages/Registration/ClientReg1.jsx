import React from 'react'
import reg1 from '../../css/app2.module.css'

const ClientReg1 = () => {
    return (
        <div >
            <div className={`container ${reg1.RegForm}`}>
                <div className="col-md-12 row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex flex-column gap-3">
                        <div className={reg1.top}>
                            {/* <!-- progress bar --> */}
                            <div className={reg1.stepperWrapper}>
                                <div className={`${reg1.stepperItem} ${reg1.active} `}>
                                    <div className={`${reg1.stepCounter} ${reg1.stepperActive}`}>1</div>
                                    <div > Personal details</div>
                                </div>
                                <div className={`${reg1.stepperItem} ${reg1.active}`}>
                                    <div className={reg1.stepCounter}>2</div>
                                    {/* <div className=" card" style="  width: 50px; height:50px;  border-radius: 50px 50px; background: #4371b5; text-align: center; top: 50%">2</div> */}
                                    <div >Organization details</div>
                                </div>
                                <div className={`${reg1.stepperItem} ${reg1.active}`}>
                                    <div className={reg1.stepCounter}>3</div>
                                    <div>Post Internship</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className={reg1.detail}>
                                <h1 className='fw-bolder pb-2'> Personal details</h1>
                                <div className={reg1.box}>
                                    <form className='d-flex flex-column gap-5'>
                                        <div className="d-flex gap-5">
                                            <div className=''>
                                                <label htmlFor="fname">First Name</label>
                                                <input type="text" id="fname" name="firstname" placeholder="e.g Joseph.." style={{ width: '100%' }} />
                                            </div>
                                            <div className=''>
                                                <label htmlFor="Lname">Last Name</label>
                                                <input type="text" id="fname" name="lastname" placeholder="e.g George.." style={{ width: '100%' }} />
                                            </div>
                                        </div>
                                        <div className='d-flex gap-3'>
                                            <label htmlFor="email">Email</label>
                                            <input type="text" id="email" name="email" placeholder="joseph123@gmail.com.." style={{ width: '100%' }} />

                                        </div>
                                        <div>
                                            <label htmlFor="Mobile Numer">Mobile Numer</label>
                                            <div className='d-flex gap-3'>
                                                <input type="number" id="Mobile Numer" name="Mobile Numer" placeholder="+92" style={{ width: '50%' }} />
                                                <input type="number" id="Mobile Numer" name="Mobile Numer" placeholder="3345673289" style={{ width: '100%' }} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <button type='submit' className={reg1.Next}>
                            Next</button>

                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div >

    )
}

export default ClientReg1