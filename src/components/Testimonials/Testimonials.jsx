// import React from "react";
import style from "./Testimonials.module.css";
import next_icon from "../../assets/next_icon.png";
import back_icon from "../../assets/back_icon.png";
import user_1 from "../../assets/user_1.png";
import user_2 from "../../assets/user_2.png";
import user_3 from "../../assets/user_3.png";
import user_4 from "../../assets/user_4.png";
import { useRef } from "react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className={style.testimonials} id="testimonials">
      <img
        src={next_icon}
        alt="next icon"
        className={style.nextBtn}
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="back icon"
        className={style.backBtn}
        onClick={slideBackward}
      />
      <div className={style.slider}>
        <ul ref={slider}>
          <li>
            <div className={style.slide}>
              <div className={style.userInfo}>
                <img src={user_1} alt="user one" />
                <div>
                  <h3>Cynthia Moore</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choose to pursue my degree in Edusity was one of the best
                decisions I ahve ever made. The supportive community, the
                stae-of-the-art facilities and commitment to academic excellence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className={style.slide}>
              <div className={style.userInfo}>
                <img src={user_2} alt="user two" />
                <div>
                  <h3>Will armstrong</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choose to pursue my degree in Edusity was one of the best
                decisions I ahve ever made. The supportive community, the
                stae-of-the-art facilities and commitment to academic excellence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className={style.slide}>
              <div className={style.userInfo}>
                <img src={user_3} alt="user three" />
                <div>
                  <h3>Julia Roberts</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choose to pursue my degree in Edusity was one of the best
                decisions I ahve ever made. The supportive community, the
                stae-of-the-art facilities and commitment to academic excellence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className={style.slide}>
              <div className={style.userInfo}>
                <img src={user_4} alt="user four" />
                <div>
                  <h3>Anthony Green</h3>
                  <span>Educity, USA</span>
                </div>
              </div>
              <p>
                Choose to pursue my degree in Edusity was one of the best
                decisions I ahve ever made. The supportive community, the
                stae-of-the-art facilities and commitment to academic excellence
                have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
