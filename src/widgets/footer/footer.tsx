import "./footer.css";
import issLogo from "../../shared/assets/Iss.png";
import inIcon from "../../shared/assets/in.svg";
import twitterIcon from "../../shared/assets/twitter.svg";
import instagramIcon from "../../shared/assets/instagram.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="footerContain">
        <div className="topFooterContent">
          <div className="lightLogo">
            <img src={issLogo} alt="lightLogo" />
          </div>
          <div className="footerList">
            <p>Style Guide</p>
            <p>Licence</p>
            <p>Changelog</p>
          </div>
        </div>
        <div className="lowerFooterContent">
          <p>© Made by Junior's team</p>
          <div className="networks">
            <img src={inIcon} alt="inIcon" />
            <img src={twitterIcon} alt="twitterIcon" />
            <img src={instagramIcon} alt="instagramIcon" />
          </div>
        </div>
      </div>
    </footer>
  );
};
