import React from "react";
import { useSelector } from "react-redux";

import "./Modal.styles.css";

const Modal = () => {
  const { project } = useSelector((state) => state.projectSlice);

  const { language } = useSelector((state) => state.languageSlice);

  return (
    <div
      className="modal fade"
      id="projectModal"
      tabIndex="-1"
      aria-labelledby="projectModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="projectModalLabel">
              {project.title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <div className="card mb-3" style={{ maxWidth: "400px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={project.image}
                    className="img-fluid rounded-start"
                    alt="project-name"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">
                      {language === "en"
                        ? project.englishDescription
                        : project.spanisDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <ul className="d-flex">
              {project?.tecnologies?.map((tecnology) => {
                return (
                  <li className="m-2" key={tecnology.id}>
                    <img
                      src={tecnology.image}
                      alt="tecnology"
                      style={{ width: "2rem" }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
