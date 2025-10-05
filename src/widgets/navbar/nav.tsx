import "./nav.css";
import logo from "../../shared/assets/Iss.png";
import Button from "../../shared/button/button";
import { Link } from "react-router-dom";
import { useRocket } from "../../contexts/rocketContext";

export const Navbar = () => {
  const { isRocketFlying, startRocket } = useRocket();

  return (
    <>
      <div className="navContain">
        <img src={logo} alt="logo" />
        <div className="navList">
          <ul>
            <Link className="liList" to="/">
              <li>Home</li>
            </Link>
            <Link className="liList" to="/about">
              <li>About</li>
            </Link>
            <Link className="liList" to="/gallery">
              <li>Gallery</li>
            </Link>
          </ul>
        </div>

        <Button 
          size="small" 
          color={isRocketFlying ? "secondary" : "primary"}
          onClick={startRocket}
        >
          {isRocketFlying ? "Stop" : "Start"}
        </Button>
      </div>
    </>
  );
};