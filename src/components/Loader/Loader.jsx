import "./Loader.styles.css";

const Loader = () => {
  return (
    <div className="container__spinner">
      <div className="atom-spinner">
        <div className="spinner-inner">
          <div className="spinner-line"></div>
          <div className="spinner-line"></div>
          <div className="spinner-line"></div>
          <div className="spinner-circle">&#9679;</div>
        </div>
        <span>Loading</span>
      </div>
    </div>
  );
};

export default Loader;
