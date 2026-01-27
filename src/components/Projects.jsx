import { useState } from "react";
import projects from "../data/projects";
import ProjectModal from "./ProjectModal";

const tabs = ["All", "HTML / CSS", "WordPress", "Figma (UI/UX)", "React JS"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter(p => p.category === activeTab);

  return (
    <section className="projects-section bg-white common_space">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">
          <span className="resume-badge">Portfolio</span>
          <h2 className="mt-3">Some of my most recent projects</h2>
        </div>

        {/* ===== TABS ===== */}
        <ul className="project-tabs">
          {tabs.map(tab => (
            <li
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* ===== PROJECT GRID ===== */}
        <div className="row g-4 mt-3">
          {filteredProjects.map(project => (
            <div className="col-md-4" key={project.id}>
              <div
                className="project-card"
                onClick={() => setActiveProject(project)}
              >
                <img src={project.images[0]} alt={project.title} />

                <div className="project-overlay">
                  <h5>{project.title}</h5>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
