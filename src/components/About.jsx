const About = () => {
    return(
        <>
        <section className="about-section common_space">
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
              I'm a designer & developer with a passion for web design.
              I enjoy developing simple, clean and slick websites that
              provide real value to the end user.
            </p>

            <p className="about-text">
              Thousands of clients have procured exceptional results while
              working with me. Delivering work within time and budget which
              meets client’s requirements is our moto.
            </p>
          </div>

          {/* RIGHT EXPERIENCE */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="experience-box">
              <h1>3</h1>
              <p>Years of <strong>Experience</strong></p>
            </div>
          </div>

        </div>

        {/* INFO ROW */}
        <div className="row mt-5 pt-4 border-top">

          <div className="col-md-3 col-sm-6 mb-3">
            <p className="info-label">Name:</p>
            <p className="info-value">Kalyan Singh</p>
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <p className="info-label">Email:</p>
            <p className="info-value link">webkalyan334@gmail.com</p>
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <p className="info-label">Date of birth:</p>
            <p className="info-value">12 september, 2000</p>
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
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