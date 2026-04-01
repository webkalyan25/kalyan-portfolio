const Resume = () => {
    return(
        <>
        <section className="resume-section" id="resume">
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
              <h5>Bachelor of Computer Applications (BCA)</h5>
              <span className="resume-meta">
                Indira Gandhi National Open University (IGNOU) / 2023 - 2027 (Pursuing)
              </span>
              <p>
                After completing my senior secondary education, I dedicated time to preparing for SSC and Army recruitment exams, during which I also joined a coaching institute. This phase helped me develop discipline, consistency, and a strong work ethic.

Later, I decided to pursue my passion for technology and started my Bachelor of Computer Applications (BCA) through distance learning at IGNOU. Alongside my studies, I have been actively building practical skills in web design and development, focusing on technologies like HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, and WordPress.

I am continuously learning and improving my skills to build modern, user-friendly, and performance-driven web applications.
              </p>
            </div>

            <div className="resume-item">
              <h5>Senior Secondary (12th)</h5>
              <span className="resume-meta">
                Government School, Dharamshala / 2018
              </span>
              <p>
Completed my higher secondary education with a focus on Commerce along with Computer Science as an additional subject. This combination helped me develop an understanding of business concepts while also building an early interest in computers and technology.  

During this time, I gained basic knowledge of computer fundamentals, which later became the foundation for my journey into web design and development.              </p>
            </div>

            <div className="resume-item">
              <h5>Secondary Education (10th)</h5>
              <span className="resume-meta">
               Government School, Dharamshala / 2016
              </span>
              <p>
                Completed my secondary education with a strong academic foundation and developed an early interest in computers and technology.
              </p>
            </div>
          </div>

          {/* RIGHT - EXPERIENCE */}
          <div className="col-md-6 ">
            <h4 className="mb-5">My Experience</h4>

 <div className="resume-item pt-0">
              <h5>Web Designer</h5>
              <span className="resume-meta">
                610 Web Lab  07/2025 - 11/2025
              </span>
              <p>
                At 610 Web Lab, I work as a Web Designer, where I am responsible for creating 
responsive, interactive, and visually appealing websites.
I design and develop modern user interfaces using HTML5, CSS3, Tailwind 
CSS, and Bootstrap (all versions) to ensure performance and compatibility 
across all devices. Additionally, I have hands-on experience working on React projects integrated 
with Bootstrap.</p>
            </div>

            <div className="resume-item ">
              <h5>Web Designer</h5>
              <span className="resume-meta">
                Pixel Softwares  04/2025 - 07/2025
              </span>
              <p>
                At Pixel Softwares, I worked as a Web Designer, creating responsive and 
visually appealing websites using HTML5, CSS3, Bootstrap, Tailwind CSS, 
JavaScript, and jQuery. I collaborated with UI/UX teams using Figma and 
Photoshop to design modern, user-friendly interfaces. I also worked with 
React and WordPress for dynamic web components and custom theme 
development.
              </p>
            </div>

            <div className="resume-item">
              <h5>Web Designer</h5>
              <span className="resume-meta">
                Snakescript Solutions LLP /  01/2024 - 04/2025
              </span>
              <p>
                Worked on a wide range of web design projects, enhancing technical expertise 
and design skills
Refined proficiency in front-end technologies such as HTML, CSS, JavaScript, 
Bootstrap and Tailwind CSS. <br /> My time at Snakescript provided valuable experience in managing multiple 
projects simultaneously under tight deadlines, helping me strengthen my 
time management and team collaboration skills. I frequently worked in fast
paced environments, learning how to stay organized, prioritize tasks 
effectively, and deliver high-quality code even under pressure
              </p>
            </div>

            <div className="resume-item">
              <h5>Web Designer & UI/UX Training</h5>
              <span className="resume-meta">
                Appwonks / 2023
              </span>
              <p>
               Completed a 6-month Training where I worked on real-world projects, designing user-friendly interfaces in Figma and developing responsive websites using HTML, CSS, Bootstrap, and JavaScript. Gained hands-on experience in UI/UX principles, client requirements, and project workflow.
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