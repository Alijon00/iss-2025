import "./headerContent.css";
import Button from "../../../shared/button/button";
import designerImg from "../../../shared/assets/Iss.png";
import { useRocket } from "../../../contexts/rocketContext";
import { useEffect, useState } from "react";

export const HeaderContent = () => {
  const { isRocketFlying } = useRocket();
  const [rocketPosition, setRocketPosition] = useState(0);

  useEffect(() => {
    if (!isRocketFlying) {
      setRocketPosition(0);
      return;
    }

    const interval = setInterval(() => {
      setRocketPosition((prev) => prev + 2); // Бесконечное движение
    }, 50);

    return () => clearInterval(interval);
  }, [isRocketFlying]);

  return (
    <div className="headerContent">
      <div className="mainSection">
        <div className="aboutIssContain">
          <div className="aboutIss">
            <p>HI, WE ARE THE ISS.</p>
            <p className="withImg">A SPACE STATION ORBITING EARTH</p>
            <p>BUILT FOR SCIENCE & EXPLORATION</p>
          </div>

          <div className="btnsContain">
            <Button size="large" color="primary">
              Dive Time ⬇ 
            </Button>
          </div>
        </div>

        <div className="line">

        </div>

        <div
          className={`issLogoContainer ${
            isRocketFlying ? "rocket-active" : ""
          }`}
        >
          <img className="issLogo" src={designerImg} alt="designerImg" />

          {/* Ракетная анимация - НЕ двигает контент */}
          {isRocketFlying && (
            <div className="rocket-orbit-wrapper">
              <div
                className="rocket-orbit"
                style={{ transform: `rotate(${rocketPosition}deg)` }}
              >
                <div className="rocket">🚀</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
