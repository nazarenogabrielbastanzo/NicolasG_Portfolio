import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Utils
import blackIcon from "../../Utils/Img/Black-Icon.png";

// Styles
import "./Home.styles.css";

const Home = () => {
  const [t] = useTranslation("global");

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img className="icon margin-home" src={blackIcon} alt="Icon" />
      <h1 className="margin-home text-center title-home">
        {t("home.greetings")}
      </h1>
      <div className="margin-home text-center">
        <p className="text-home">
          {t("home.to-be")}
          <span className="role">
            <b> {t("home.role")}</b>
          </span>
        </p>
        <p className="text-home">{t("home.like-it")}</p>
      </div>
    </motion.div>
  );
};

export default Home;
