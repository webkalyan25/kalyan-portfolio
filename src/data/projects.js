import html1 from "../assets/html/pixfit_1.png";
import html2 from "../assets/html/pixfit_1.png";
import wp1 from "../assets/html/pixfit_1.png";
import wp2 from "../assets/html/pixfit_1.png";
import react1 from "../assets/html/pixfit_1.png";
import figma1 from "../assets/html/pixfit_1.png";

const projects = [
  // HTML / CSS PROJECT
  {
    id: 1,
    title: "Business Website",
    category: "HTML / CSS",
    images: [html1, html2],
    client: "Local Client",
    technologies: "HTML, CSS, Bootstrap",
    industry: "Business",
    date: "2024",
    url: "#",
    description: "Responsive business website using HTML, CSS & Bootstrap."
  },

  // WORDPRESS PROJECT
  {
    id: 2,
    title: "Travel Website",
    category: "WordPress",
    images: [wp1, wp2],
    client: "Travel Agency",
    technologies: "WordPress, Elementor",
    industry: "Tourism",
    date: "2024",
    url: "#",
    description: "Custom WordPress website for travel agency."
  },

  // REACT PROJECT
  {
    id: 3,
    title: "React Portfolio",
    category: "React JS",
    images: [react1],
    client: "Self Project",
    technologies: "React, Vite, Bootstrap",
    industry: "Personal",
    date: "2025",
    url: "#",
    description: "Portfolio website built using React."
  },

  // FIGMA PROJECT
  {
    id: 4,
    title: "Fitness App UI",
    category: "Figma (UI/UX)",
    images: [figma1],
    client: "UI Concept",
    technologies: "Figma",
    industry: "Health",
    date: "2024",
    url: "#",
    description: "UI/UX design for fitness mobile app."
  }
];

export default projects;
