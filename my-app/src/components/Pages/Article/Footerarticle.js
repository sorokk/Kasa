import React from "react";
import kasa from "../../assets/kasafooter.png";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
            <img src={kasa} alt="kasa-footer" />
        </div><div className="right">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;