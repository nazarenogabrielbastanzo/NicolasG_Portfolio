import "./Modal.styles.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Modal = () => {
  const { project } = useSelector((state) => state.projectSlice);

  const { language } = useSelector((state) => state.generalSlice);

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );

    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }, [project]);

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
                <div>
                  <img
                    src={project.image}
                    className="img-fluid rounded-top"
                    alt="project-name"
                  />
                </div>
                <div>
                  <div className="card-body">
                    <p className="card-text">
                      {language === "en"
                        ? project.englishDescription
                        : project.spanisDescription}
                    </p>
                    <a
                      className="project-code"
                      href={project.deploy}
                      target="_blank"
                      rel="noreferrer"
                    >
                      See the code!
                    </a>
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
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title={tecnology.name}
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
