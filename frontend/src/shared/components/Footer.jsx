import React from "react";


export const Footer=()=>{
    return(
        <div className="Footer_whole">
            <div className="footer_1">
                <div className="skill_logo">
                <img src="https://skillrisers.com/_next/image?url=%2Flogo.png&w=96&q=75" alt="" />
                </div>
                <div className="social_icons">
                    <img src="https://cdn-icons-png.flaticon.com/128/174/174883.png" alt="" />&nbsp;&nbsp;&nbsp;
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />&nbsp;&nbsp;&nbsp;
                    <img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="" />
                    <h6>Contact: support@skillrisers.com</h6>
                </div>
            </div>
            <hr />
            <div className="footer_1">
                <div>
                    <h6>Company</h6>
                    <h6>About us</h6>
                    <h6>Contact Us</h6>
                </div>
                <div>
                    <h6>Resources</h6>
                    <h6>Cancellation and Refund</h6>
                    <h6>Shipping and Delivery Policy</h6>
                </div>
                <div>
                    <h6>Legal</h6>
                    <h6>Privacy policy</h6>
                    <h6>Terms of use</h6>
                    <h6>Disclaimer</h6>
                </div>
                <div className="social_icons">
                    <h6>© 2024 Skillrisers Infotech</h6>
                </div>
            </div>
        </div>
    );
}
