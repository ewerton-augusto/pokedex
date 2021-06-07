import React from "react";
import Lottie from "react-lottie";
import loading from "../../assets/animation/pokemon-loading.json";

import { Loading } from "../../styles/components/CardPokemon";

const ImgLoadingSprites = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };

  return (
    <>
      <Loading>
        <Lottie options={defaultOptions} />
      </Loading>
    </>
  );
};

export default ImgLoadingSprites;