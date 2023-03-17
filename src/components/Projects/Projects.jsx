import React from "react";
import Modal from "../Modal/Modal";
import "./Projects.styles.css";

const Projects = () => {
  const filterProjects = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="container__projects p-3" id="Projects">
        <h3 className="text-center text-light">Projects</h3>
        <form onSubmit={(e) => filterProjects(e)}>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option value="all">All Roles</option>
            <option value="full">Full Stack</option>
            <option value="front">FronEnd</option>
            <option value="back">BackEnd</option>
          </select>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option value="all">All Technologies</option>
            <option value="react">ReactJs (JS) </option>
            <option value="vue">VueJs (JS) </option>
            <option value="express">ExpressJs (JS)</option>
            <option value="laravel">Laravel (PHP) </option>
          </select>
        </form>
        <div className="project-container__projects d-flex flex-wrap justify-content-center">
          <img
            src="https://imagenes.elpais.com/resizer/3q6apbw66jUSRN3afDsPz3FOuFc=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Z6WN33YVLRCTPCATP7EAJ2ODLE.jpg"
            alt="pendiente"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />
          <img
            src="https://imagenes.elpais.com/resizer/3q6apbw66jUSRN3afDsPz3FOuFc=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Z6WN33YVLRCTPCATP7EAJ2ODLE.jpg"
            alt="pendiente"
          />
        </div>
      </section>
      <Modal />
    </>
  );
};

export default Projects;
