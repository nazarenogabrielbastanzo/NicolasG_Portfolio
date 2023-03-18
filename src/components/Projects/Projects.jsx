import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../../store/slices/projects";
import ReactPaginate from "react-paginate";
import "./Projects.styles.css";

const Projects = () => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const { list: projects } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(projects.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(projects.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, projects]);

  const filterProjects = (e) => {
    e.preventDefault();
  };

  const getProject = (project) => {
    dispatch(setProject(project));
  };

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % projects.length;
    setItemOffset(newOffset);
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
          {/* {projects?.map((project) => {
            return (
              <div className="item__projects" key={project.id}>
                <div
                  className="project-image__projects"
                  style={{
                    backgroundImage: `url(${project.image})`
                  }}
                  data-bs-target="#projectModal"
                  data-bs-toggle="modal"
                  onClick={() => getProject(project)}
                >
                  <div className="cover__projects">
                    <p>INFO</p>
                  </div>
                </div>
              </div>
            );
          })} */}
          {currentItems?.map((project) => {
            return (
              <div className="item__projects" key={project.id}>
                <div
                  className="project-image__projects"
                  style={{
                    backgroundImage: `url(${project.image})`
                  }}
                  data-bs-target="#projectModal"
                  data-bs-toggle="modal"
                  onClick={() => getProject(project)}
                >
                  <div className="cover__projects">
                    <p>INFO</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ReactPaginate
          containerClassName="list"
          breakClassName="points"
          pageClassName="other-pages"
          previousLinkClassName="previous-botton"
          nextLinkClassName="next-botton"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </section>
      <Modal />
    </>
  );
};

export default Projects;
