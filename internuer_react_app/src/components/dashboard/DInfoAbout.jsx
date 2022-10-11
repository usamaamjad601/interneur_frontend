import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DAbout from '../../css/App.module.css';

const DInfoAbout = () => {

    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById(DAbout.more);
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
        <div>
            <div className={DAbout.myCard}>
                <div className={`${DAbout.about} p-1`}>
                    <h6 >About me</h6>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasell dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id={DAbout.more}>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.is imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></span>
                    <span id="myBtn" className={DAbout.readMore} style={{ zIndex: '10' }} onClick={myFunction}>Read more...</span>
                </div>
                <div className={`${DAbout.dInfoAboutBtn} col-md-12 d-flex`}>
                    <button className={`${DAbout.infoBtn1}  d-flex gap-1`}>
                        <CheckIcon sx={{ color: '#5fb951' }} />
                        <p>Shortlist</p>
                    </button>
                    <div className={DAbout.infoLine}></div>
                    <button className={`${DAbout.infoBtn2}  d-flex gap-1`} onClick={() => {
                        console.log("Hello Buddy");
                    }}>
                        <CloseIcon sx={{ color: '#fb5a90' }} />
                        <p>Decline</p>
                    </button>
                </div>

            </div>
        </div >
    )
}

export default DInfoAbout