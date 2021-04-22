import React from "react";
import { LoaderContainer } from "./Loader.styles";
import LoaderSpinner from "react-loader-spinner";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderSpinner
        type="TailSpin"
        color="#333"
        height={40}
        width={40}
        timeout={3000}
      />
    </LoaderContainer>
  );
};

export default Loader;
