import { useEffect, useState } from "react";
import { FaPhoneAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaPhone, FaYoutube, FaBehance  } from "react-icons/fa6";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";




const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header py-3 ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">

            {/* LOGO */}
            <a
              href="mailto:webkalyan334@gmail.com"
              className="m-0 fw-bold logo text-decoration-none fs-5"
            >
              webkalyan334@gmail.com
            </a>

            {/* RIGHT */}
            <div className="d-flex align-items-center gap-4 hamburger_outer">
              <a
                href="tel:+918278887302"
                className="fw-medium phone text-decoration-none"
              >
                <FaPhoneAlt /> +91 82788-87302
              </a>

              {/* HAMBURGER */}
              <span
                className="fs-4 cursor-pointer menu"
                onClick={() => setMenuOpen(true)}
              >
                <RxHamburgerMenu />
              </span>
            </div>

          </div>
        </div>
      </header>

      {/* 🔥 OVERLAY */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* 🔥 SIDEBAR */}
      <div className={`offcanvas-menu ${menuOpen ? "active" : ""}`}>

        <div className="offcanvas-header">
          <h5>Kalyan Singh</h5>
          <span onClick={() => setMenuOpen(false)}><RxCross2 className="fs-3" /></span>
        </div>

        <div className="offcanvas-body">
          <p>
            Creative Developer building modern & responsive websites.
          </p>

          <ul className="menu-links py-3">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about_me" onClick={() => setMenuOpen(false)}>About Us</a></li>
            <li><a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a></li>
            <li><a href="#skill" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#project" onClick={() => setMenuOpen(false)}>porjects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>

          </ul>

          <div className="contact-info mt-4">
            <a href="tel:+918278887302"><FaPhone className="fs-4 me-2" />  8278887302 </a>
            <a href="mailto:webkalyan334@gmail.com"><AiOutlineMail className="fs-4 me-2" /> webkalyan334@gmail.com</a>
          </div>

          <div className="social_icon mt-4 position-fixed d-flex gap-3">
           <a href="https://www.linkedin.com/in/kalyan-singh" target="_blank" rel="noopener noreferrer">
  <FaLinkedin className="fs-4 "/>
</a>

<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
  <FaInstagram className="fs-4"/>
</a>

<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
  <FaYoutube className="fs-4"/>
</a>

<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
  <FaBehance className="fs-4"/>
</a>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;