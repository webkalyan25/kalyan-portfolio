const Skills = () => {
  const skillsLeft = [
    { name: "HTML/CSS", value: 80 },
    { name: "Tailwind css", value: 60 },
    { name: "Wordpress", value: 65 },
    { name: "canva", value: 60 },

  ];

  const skillsRight = [
    { name: "Bootstrap", value: 80 },
    { name: "React JS", value: 60 },
    { name: "javascript", value: 40 },
    { name: "Figma", value: 80 },

  ];

  return (
    <section className="skills-section pt-5" id="skill">
      <div className="container">

        {/* Heading */}
        <h2 className="mb-5">My Skills</h2>

        <div className="row gx-5">
          {/* LEFT COLUMN */}
          <div className="col-md-6">
            {skillsLeft.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="d-flex justify-content-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6">
            {skillsRight.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="d-flex justify-content-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mt-5">
   <a
  href="/resume/Kalyan_Singh_Resume.pdf"
  download
  className="download-cv-btn"
>
  Download CV
</a>

        </div>

      </div>
    </section>
  );
};

export default Skills;
