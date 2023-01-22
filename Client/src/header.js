import React from "react";
import "./Postview.css";
import { Link } from "react-router-dom";
import NameIcon from "./icons/Instagram-name-logo-transparent-PNG.png";
import CameraIcon from "./icons/icons8-compact-camera-50.png";
function Header(props) {
  return (
    <div className='mainContainer'>
      <header className='flex' id='headerConatiner'>
        <img id='headImg1' src={NameIcon} alt='NameIcon'></img>
        <Link to='/userData'>
          <img id='headImg2' src={CameraIcon} alt='CameraIcon'></img>
        </Link>
      </header>
    </div>
  );
}

export default Header;
