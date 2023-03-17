import React from "react";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../../store/slices/projects";
import "./Projects.styles.css";

const Projects = () => {
  const { list: projects } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  const filterProjects = (e) => {
    e.preventDefault();
  };

  const getProject = (project) => {
    dispatch(setProject(project));
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
          {projects.map((project) => {
            return (
              <img
                src={project.image}
                alt={project.title}
                key={project.id}
                onClick={() => getProject(project)}
                data-bs-toggle="modal"
                data-bs-target="#projectModal"
              />
            );
          })}
        </div>
      </section>
      <Modal />
    </>
  );
};

export default Projects;
