import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import axios from "axios";
import Projects from "./Projects";

// Styles
import "./Projects.styles.css";

// Componentes
import Loader from "../../Components/Loader/Loader";

const Portfolio = () => {
  const [t] = useTranslation("global");
  const [projects, setProjects] = useState([false, false, false]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://portfoliongg-api.fly.dev/api/v1/projects")
      .then((res) => {
        setProjects(res?.data?.data?.projects);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="project-container">
      <motion.h3
        className="project-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <b> {t("projecs.title")} </b>
      </motion.h3>
      {isLoading ? (
        <Loader />
      ) : (
        projects?.map((project) => (
          <Projects project={project} key={project.id} />
        ))
      )}
    </div>
  );
};

export default Portfolio;
