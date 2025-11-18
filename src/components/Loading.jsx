import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" role="status" />
    </div>
  );
};

export default Loading;
