import { Link } from "react-router-dom";
import "./loading.css";

const Loding = () => {
  return (
    <div className='loding-parent'>
      <div className='loding-page'>
        <h2>Hii...I am Subodh </h2>
        <h3>
          I built this Instagram clone web application using
          React,NodeJs,ExpressJs,MongoDB and AWS
        </h3>
        <h4>Click On Enter to view Posts</h4>
        <h4>Click on Camera icon to add new post</h4>
        <div className='enter-section'>
          <h2 className='x-heading'>10X team 04</h2>

          <Link to='/posts'>
            <button className='enter-button'>Enter</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Loding;
