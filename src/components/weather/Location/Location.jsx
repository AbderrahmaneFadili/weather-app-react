import React from "react";
import { LocationWrapper, LoactionButton } from "./Location.styles";
const Location = ({ locationName }) => {
  return (
    <>
      <LoactionButton>{locationName}</LoactionButton>
    </>
  );
};

export default Location;
