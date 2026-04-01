import pixfit1 from "../assets/html/pixfit_1.png";
import pixfit2 from "../assets/html/pixfit_2.png";
import kad from "../assets/html/kad.png";
import kad2 from "../assets/html/kad2.png";
import wp1 from "../assets/html/pixfit_1.png";
import wp2 from "../assets/html/pixfit_1.png";
import react1 from "../assets/html/pixfit_1.png";
import figma1 from "../assets/html/pixfit_1.png";

const projects = [
  {
    id: 1,
    title: "Business Website",
    category: "HTML / CSS",
    images: [pixfit1, pixfit2],
    client: "GYM Website / Landing Page",
    technologies: "HTML, CSS, Bootstrap, JavaScript",
    duration: "2 Days",
    status: "Completed",
    url: "https://www.io.pixelsoftwares.com/HTML/pixfit/",
    description: "Responsive business website using HTML, CSS, Bootstrap and JavaScript."
  },
  {
    id: 2,
    title: "Digital Marketing",
    category: "HTML / CSS",
    images: [kad2, kad],
    client: "Digital Marketing Website",
    technologies: "HTML, CSS, Bootstrap, JavaScript",
    duration: "5 Days",
    status: "Completed",
    url: "https://io.pixelsoftwares.com/HTML/kad_infotech/",
    description: "Responsive marketing website with modern UI."
  },

  {
    id: 3,
    title: "Travel Website",
    category: "WordPress",
    images: [wp1, wp2],
    client: "Travel Agency",
    technologies: "WordPress, Elementor",
    duration: "7 Days",
    status: "Completed",
    url: "#",
    description: "Custom WordPress website for travel agency."
  },

  {
    id: 4,
    title: "React Portfolio",
    category: "React JS",
    images: [react1],
    client: "Self Project",
    technologies: "React, Vite, Bootstrap",
    duration: "3 Days",
    status: "Completed",
    url: "#",
    description: "Portfolio website built using React."
  },

  {
    id: 5,
    title: "Fitness App UI",
    category: "Figma (UI/UX)",
    images: [figma1],
    client: "UI Concept",
    technologies: "Figma",
    duration: "2 Days",
    status: "Completed",
    url: "#",
    description: "UI/UX design for fitness mobile app."
  }
];

export default projects;
