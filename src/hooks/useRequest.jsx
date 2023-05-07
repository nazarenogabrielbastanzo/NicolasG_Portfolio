import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProjectList } from "../store/slices/projectSlice";
import { setIsLoading } from "../store/slices/generalSlice";

const useRequest = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const getAllProjects = () => {
    dispatch(setIsLoading(true));

    return (dispatch) => {
      axios
        .get(
          "https://portfolio-api-nodejs-production.up.railway.app/api/v1/projects"
        )
        .then((res) => {
          dispatch(setProjectList(res.data.data.projects));
          dispatch(setIsLoading(false));
        })
        .catch((err) => console.log(err));
    };
  };
};

export default useRequest;
