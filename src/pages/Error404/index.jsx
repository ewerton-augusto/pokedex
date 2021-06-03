import React from "react";

import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import animation404 from "../../assets/animation/pikachu.json";

import { Error, ErrorContent } from "../../styles/pages/Error404";

const Error404 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation404,
  };

  return (
    <>
      <Error>
        <ErrorContent>
          <Lottie options={defaultOptions} width={250} />
          <h1 className="error__title">404 Page Not Found</h1>
          <Link to="/" > Voltar ao home </Link>
        </ErrorContent>
      </Error>
    </>
  );
};

export default Error404;
