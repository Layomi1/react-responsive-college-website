// import React from "react";
import "./About.css";
import about from "../../assets/about.png";
import play_icon from "../../assets/play_icon.png";
import PropTypes from "prop-types";

const About = ({ setPlayState }) => {
  const clickHandler = () => {
    setPlayState(true);
  };

  return (
    <div className="about ">
      <div className="about-left">
        <img src={about} alt="about-img" className="about-img" />
        <img
          src={play_icon}
          alt="play-icon"
          className="play-icon"
          onClick={clickHandler}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow &#39;s Leaders </h2>
        <p>
          Emark on a transformative educational journey with our university
          &#39;s comprehensive educational programs. Our cutting-edge currilum
          is desgned to empower students with the knowledge, skills and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning and mentorship, our
          programs aspiring educators to make a meaningful impact in classrooms,
          schools and communities.
        </p>
        <p>
          Whether you aspire to a teacher, administrator, counselor, or
          educational leader, our diverse range of program offers the perfect
          pathway to achieve our goals and unlock your full potential in sharing
          the future of education.
        </p>
      </div>
    </div>
  );
};
About.propTypes = {
  setPlayState: PropTypes.func.isRequired,
};
export default About;
