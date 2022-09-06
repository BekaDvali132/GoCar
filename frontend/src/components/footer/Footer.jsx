import React from "react";
import "./Footer.scss";
import GoCarWhiteLogo from "../resources/GoCarWhiteLogo.svg";
import {ReactComponent as Mail} from "../resources/mail.svg";
import {ReactComponent as SocialNetworks} from "../resources/SocialNetworks.svg";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={GoCarWhiteLogo} alt="GoCar Logo" />
          </div>
          <div className="footer-lists">
            <ul>
              <li>ჩვენს შესახებ</li>
              <li>წესები და პირობები</li>
              <li>უსაფრთხოება</li>
            </ul>
            <ul>
              <li>მანქანის განთავსება</li>
              <li>ფასიანი განცხადება</li>
            </ul>
            <div className="credits">
              © 2020 GoCar, Inc. All rights reserved
            </div>
          </div>
        </div>
        <div className="socials">
          <div className="mail">
            <Mail/> Hello@gocar.ge
          </div>
          <div className="social-networks">
            <SocialNetworks/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
