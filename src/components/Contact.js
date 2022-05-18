import React from "react";

const formContainerStyle = {
    width: '50%',
    margin: 'auto'
}

function Contact() {
  return (    
    <section className="formContainer" style={formContainerStyle}>
      <h2>Contact</h2>
      <form>
      <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="messageInput">Message:</label>
          <textarea
            className="form-control"
            id="messageInput"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </section>
  );
}

export default Contact;
