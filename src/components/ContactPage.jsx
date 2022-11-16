import React, { useState } from "react";

const style = {
  textAlign: "center",
  borderRadius: "25px",
  border: "2px solid #979797",
  marginTop: "50px",
  marginBottom: "80x",
  marginRight: "700px",
  marginLeft: "700px",
};
const ContactPage = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sent");

    alert("Your message is sent!");
  };
  return (
    <div style={style}>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button class="button" type="submit">
          {status}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
