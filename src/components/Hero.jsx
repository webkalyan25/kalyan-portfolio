import { useEffect, useState } from "react";
import profileImg from "../assets/me_profile.jpeg";

const Hero = () => {
  const words = ["WEB DESIGNER", "HTML DEVELOPER", "UI/UX DESIGNER"];

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 120); // typing speed

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setText("");
        setWordIndex((wordIndex + 1) % words.length);
      }, 1500); // pause after word complete

      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex]);

  return (
    <section className="hero-section text-white py-5" id="home">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* LEFT CONTENT */}
          <div className="col-md-6">
        <p className="text-uppercase hero-subtitle mb-2">
 HI, I'M A CREATIVE
</p>

<h1 className="display-3 fw-bold hero-title">
  {text}
  <span className="cursor">|</span>
</h1>

<p className="hero-location mt-3">
  based in Himachal Pradesh, India.
</p>


            <div className="mt-4 d-flex gap-3">
             <button className="btn btn-slide-left btn-lg px-4">
  <span>View My Works</span>
</button>

<button className="btn btn-slide-right btn-lg px-4">
  <span>Contact Me</span>
</button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-md-6 text-center mt-5 mt-md-0">
            <div className="hero-img-wrapper">
              <img src={profileImg} alt="profile" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
