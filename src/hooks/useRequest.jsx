import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProjectList } from "../store/slices/projectSlice";

const useRequest = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const getAllProjects = () => {
    return (dispatch) => {
      axios
        .get(
          "https://portfolio-api-nodejs-production.up.railway.app/api/v1/projects"
        )
        .then((res) => dispatch(setProjectList(res.data.data.projects)))
        .catch((err) => console.log(err));
    };
  };
};

export default useRequest;
