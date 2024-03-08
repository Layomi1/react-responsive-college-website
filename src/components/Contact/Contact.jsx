import React from "react";
import style from "./Contact.module.css";
import msg_icon from "../../assets/msg_icon.png";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.png";
import white_arrow from "../../assets/white_arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d28a8d9f-37b9-473f-ba8e-9ff1a0a06b65");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={style.contact} id="contact">
      <div className={style.contactCol}>
        <h3>
          Send us a message <img src={msg_icon} alt="messge icon" />
        </h3>
        <p>
          Feel free to reach out through our contact form or find our
          information below. Your feedbacks, qiestions and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="mail icon" />
            contact@greatinitiative.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="phone icon" />
            +1 124-567-7890
          </li>
          <li>
            <img src={location_icon} alt="location icon" />
            09 Merchant Avenue, Essex <br /> ES 00132, England.
          </li>
        </ul>
      </div>
      <div className={style.contactCol}>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="meassge"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className={style.btnDarkBtn}>
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
