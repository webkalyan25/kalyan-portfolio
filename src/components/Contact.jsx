import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f0r2gys",
        "template_kobm3jc",
        form.current,
        "KPlwndlUlgvL5Do0O"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message!");
        }
      );
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container">
          <div className="row gy-5">

            {/* LEFT CONTENT */}
            <div className="col-md-6">
              <h2 className="contact-title">Let's get in touch</h2>

              <p className="contact-text mt-4">
                I enjoy discussing new projects and design challenges.
                Please share as much info as possible so we can get the
                most out of our first catch-up.
              </p>

              <div className="contact-info mt-5">
                <h6>Living In:</h6>
                <p>Mohali, Punjab</p>

                <h6 className="mt-3">Call:</h6>
                <p>+91 8278887302</p>
              </div>

              {/* SOCIAL ICONS */}
              <div className="contact-social mt-4">
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fas fa-basketball-ball"></i></a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-md-6">
              <h2 className="contact-title">Estimate your Project?</h2>

             <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className="mb-4">
        <label>What is Your Name:</label>
        <input type="text" name="name" required />
      </div>

      <div className="mb-4">
        <label>Your Email Address:</label>
        <input type="email" name="email" required />
      </div>

      <div className="mb-4">
        <label>How can I Help you?</label>
        <textarea name="message" rows="4" required></textarea>
      </div>

      <button type="submit" className="send-btn">
        Send <span>→</span>
      </button>
    </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container d-flex justify-content-between align-items-center">
          <p>
            Copyright © 2023 <span>Kalyan</span>. All Rights Reserved.
          </p>
          <p>
            Designed by <span>Kalyan Singh</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
