import React from "react";
import { LoactionButton } from "./Location.styles";
const Location = ({ locationName }) => {
  return (
    <>
      <LoactionButton>{locationName}</LoactionButton>
    </>
  );
};

export default Location;
