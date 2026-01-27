import { useState, useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);
  const images = project.images;

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  // 🔒 Scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-box animate-modal">

        {/* Close */}
        <button className="modal-close" onClick={onClose}>×</button>

        <h3 className="modal-title">{project.title}</h3>

        <div className="modal-body">

          {/* LEFT : SLIDER */}
          <div className="modal-slider">
            <img src={images[current]} alt="" />

            <button className="arrow left" onClick={prevSlide}>‹</button>
            <button className="arrow right" onClick={nextSlide}>›</button>

            <div className="dots">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={i === current ? "active" : ""}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT : DETAILS */}
          <div className="modal-info">
            <h5>Project Info:</h5>
            <p>{project.description}</p>

            <ul>
              <li><strong>Client:</strong> {project.client}</li>
              <li><strong>Technologies:</strong> {project.technologies}</li>
              <li><strong>Industry:</strong> {project.industry}</li>
              <li><strong>Date:</strong> {project.date}</li>
            </ul>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning mt-3"
            >
              {project.url}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
