const About = () => {
    return(
        <>
      <section className="about-section common_space" id="about_me">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="text-center mb-5">
          <span className="about-badge">About Me</span>
          <h2 className="about-heading mt-3">Know Me More</h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-7">
            <h3 className="about-title">
              Hi, I'm <span>Kalyan Singh</span>
            </h3>

            <p className="about-text">
            A creative Web & UI/UX Designer specializing in building modern, responsive, and user-centric websites. From designing in Figma to developing with React and WordPress, I create seamless digital experiences that combine design and functionality.
            </p>

            <p className="about-text">
             I believe in clean design, efficient code, and delivering solutions that truly make an impact.
            </p>
          </div>

          {/* RIGHT EXPERIENCE */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="experience-box">
              <h1>2</h1>
              <p>Years of <strong>Experience</strong></p>
            </div>
          </div>

        </div>

        {/* INFO ROW */}
        <div className="row mt-5 pt-4 border-top">

          <div className=" col-sm-6 col-md-4 col-lg-3 mb-3">
            <p className="info-label">Name:</p>
            <p className="info-value">Kalyan Singh</p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <p className="info-label">Email:</p>
            <p className="info-value link">webkalyan334@gmail.com</p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <p className="info-label">Date of birth:</p>
            <p className="info-value">12 september, 2000</p>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <p className="info-label">From:</p>
            <p className="info-value">Himachal Pradesh, India</p>
          </div>

        </div>

      </div>
    </section>
        
        </>
    )
}

export default About;