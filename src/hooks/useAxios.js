import { useState } from "react";
import { API } from "./api";

export const REQ_TYPES = Object.freeze({
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
});

const useAxios = (initialValue = []) => {
  const [data, setData] = useState(initialValue);
  const doRequest = ({ endpoint, reqType, payload }) => {
    return API[reqType](endpoint, payload)
      .then((res) => {
        setData(res.data);
        return res.data;
      })
      .catch((err) => {
        setData(initialValue);
      })
      .finally(() => {});
  };

  return [doRequest, data];
};

export default useAxios;