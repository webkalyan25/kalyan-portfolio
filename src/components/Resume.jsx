const Resume = () => {
    return(
        <>
        <section className="resume-section">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="text-center mb-5">
          <span className="resume-badge">Resume</span>
          <h2 className="resume-title mt-3">
            A summary of My Resume
          </h2>
        </div>

        <div className="row">

          {/* LEFT - EDUCATION */}
          <div className="col-md-6">
            <h4 className="mb-5">My Education</h4>

            <div className="resume-item pt-0">
              <h5>Master in Computer Engineering</h5>
              <span className="resume-meta">
                Harvard University / 2015 - 2017
              </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>

            <div className="resume-item">
              <h5>Bachelor in Computer Engineering</h5>
              <span className="resume-meta">
                University of California / 2014 - 2015
              </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>

            <div className="resume-item">
              <h5>International Science</h5>
              <span className="resume-meta">
                Harvard University / 2013 - 2014
              </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>

          {/* RIGHT - EXPERIENCE */}
          <div className="col-md-6 ">
            <h4 className="mb-5">My Experience</h4>

            <div className="resume-item pt-0">
              <h5>Sr. Front End Developer</h5>
              <span className="resume-meta">
                Apple Inc / 2020 - current
              </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>

            <div className="resume-item">
              <h5>Jr. Front End Developer</h5>
              <span className="resume-meta">
                Dribbble Inc / 2018 - 2020
              </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>

            <div className="resume-item">
              <h5>HTML Developer</h5>
              <span className="resume-meta">
                Adobe Inc / 2017 - 2018
              </span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
        </>
    )
}

export default Resume