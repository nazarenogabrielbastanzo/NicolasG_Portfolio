import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Styles
import "./Projects.styles.css";

const Portfolio = ({ project, isLoading }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <motion.div
      className="project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h4 className="project-title">
        <b>{project.title}</b>
      </h4>
      <div className="project-data">
        <div className="container-project-image">
          <motion.img
            className="project-image"
            src={project.image}
            alt="project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <p className="project-description">
            {i18n.language === "es"
              ? project.spanisDescription
              : project.englishDescription}
          </p>
        </div>
        <div>
          <div className="tecnologies-container">
            {project.tecnologies.map((tecnology) => (
              <img
                className="tecnologies"
                src={tecnology.image}
                alt={`icon-${tecnology.name}`}
                key={tecnology.id}
              />
            ))}
          </div>
          <a
            className="project-code"
            href={project.deploy}
            target="_blank"
            rel="noreferrer"
          >
            {t("projecs.code")}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
