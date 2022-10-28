import React from 'react'
import reg2 from '../../css/App3.module.css'

const ClientReg2 = () => {
    return (
        <div >
            <div className={`container ${reg2.RegForm}`}>
                <div className="col-md-12 row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex flex-column gap-3">
                        <div className={reg2.top}>
                            {/* <!-- progress bar --> */}
                            <div className={reg2.stepperWrapper}>
                                <div className={`${reg2.stepperItem} ${reg2.active}`}>
                                    <div className={`${reg2.stepCounter}  ${reg2.stepperActive}`}>1</div>
                                    <div > Personal details</div>
                                </div>
                                <div className={`${reg2.stepperItem} ${reg2.active}`}>
                                    <div className={`${reg2.stepCounter}  ${reg2.stepperActive}`}>2</div>
                                    {/* <div className=" card" style="  width: 50px; height:50px;  border-radius: 50px 50px; background: #4371b5; text-align: center; top: 50%">2</div> */}
                                    <div >Organization details</div>
                                </div>
                                <div className={`${reg2.stepperItem} ${reg2.active}`}>
                                    <div className={reg2.stepCounter}>3</div>
                                    <div>Post Internship</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className={reg2.detail}>
                                <h2 className='fw-bolder pb-2'> Organizational details</h2>
                                <div className={reg2.box}>
                                    <form className='d-flex flex-column gap-3'>
                                        <div className='d-flex flex-column gap-2'>
                                            <label htmlFor="Lname" className='fw-bolder'>Organization Name</label>
                                            <input id="w3review" name="w3review" placeholder="e.g Arkhitech pvt ltd " style={{ width: '100%' }}></input>
                                        </div>
                                        <div className='d-flex gap-3'>
                                            <input type="checkbox" id="undertake" name="undertake" /> I am here by admitted that i am postig for my self-purpose

                                        </div>
                                        <div className='d-flex flex-column gap-2'>
                                            <label htmlFor="Lname" className='fw-bolder'>Organization Description</label>
                                            <textarea id="w3review" name="w3review" style={{ width: '100%' }}></textarea>
                                        </div>

                                        <div class={`${reg2.uploadBtnWrapper}`}>
                                            <label for="fname" className='fw-bolder'>Organization Logo</label>
                                            <button class={reg2.btn} onclick="myFunction()" style={{ backgroundColor: '#e0f5f3' }}>Upload logo
                                                <input type="file" id="logo" name="myfile" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div >


            {/* Verifications */}
            <div className={`container pt-5 ${reg2.RegForm}`}>
                <div className="col-md-12 row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex flex-column gap-3">
                        <div className="col-md-12">
                            <div className={reg2.detail}>
                                <h2 className='fw-bolder pb-2'> Organizational Verifications</h2>
                                <div className={reg2.box}>
                                    <form className='d-flex flex-column gap-3'>
                                        <div className='d-flex flex-column gap-2'>
                                            <label htmlFor="Lname" className='fw-bolder'>Organization Name</label>
                                            <input id="w3review" name="w3review" placeholder="e.g Arkhitech pvt ltd " style={{ width: '100%' }}></input>
                                        </div>
                                        <div className='d-flex gap-3'>
                                            <input type="checkbox" id="undertake" name="undertake" /> I am here by admitted that i am postig for my self-purpose

                                        </div>
                                        <div className='d-flex flex-column gap-2'>
                                            <label htmlFor="Lname" className='fw-bolder'>Organization Description</label>
                                            <textarea id="w3review" name="w3review" style={{ width: '100%' }}></textarea>
                                        </div>

                                        <div class={`${reg2.uploadBtnWrapper}`}>
                                            <label for="fname" className='fw-bolder'>Organization Logo</label>
                                            <button class={reg2.btn} onclick="myFunction()" style={{ backgroundColor: '#e0f5f3' }}>Upload logo
                                                <input type="file" id="logo" name="myfile" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div >
        </div >

    )
}

export default ClientReg2