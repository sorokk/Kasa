import React from "react";
import kasa from "../../assets/kasafooter.png";
import "./Footerpropos.css";

const Footerpropos = () => {
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

export default Footerpropos;