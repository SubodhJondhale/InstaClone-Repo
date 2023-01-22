//Run this command in terminal in root folder before starting app -:"npx json-server --watch Mock-data/data.json --port 3004"
import React from "react";
import "./Postview.css";
import ThreeDot from "./icons/icons8-dots-loading-48.png";
import Heart from "./icons/icons8-favorite-30.png";
import Sent from "./icons/icons8-sent-50.png";

function Postviewdata(props) {
  return (
    <div id='cardConatiner'>
      <div id='cardHeader'>
        <div>
          <h1 id='cardHeaderh1'>{props.user.name}</h1>
          <p id='cardHeaderpara'>{props.user.location}</p>
        </div>
        <img id='threeDot' src={ThreeDot} alt='dots'></img>
      </div>
      <div id='imageContainer'>
        <img
          id='PostImage'
          src={`/image/${props.user.file_name}`}
          alt='post'></img>
      </div>
      <div id='cardFooter'>
        <div id='footerIconContainer'>
          <div id='footerIcon'>
            <img id='Heart' src={Heart} alt='Heart'></img>
            <img id='Sent' src={Sent} alt='Sent'></img>
          </div>
          <div id='date'>{props.user.date}</div>
        </div>
        <p id='likes'> {props.user.likes} likes</p>
        <h4 id='description'>{props.user.description}</h4>
      </div>
    </div>
  );
}

export default Postviewdata;
