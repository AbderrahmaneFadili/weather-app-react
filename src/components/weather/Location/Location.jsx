import React from "react";
import { DeleteIcon, LoactionItem, LocationName } from "./Location.styles";
import { getCurrentWeatherByCity } from "../../../store/actions/currentWeatherActions";
import { deleteLocation } from "../../../store/actions/locationsActions";
import { useDispatch } from "react-redux";

const Location = ({ locationId, locationName }) => {
  const dispatch = useDispatch();

  return (
    <>
      <LoactionItem>
        <LocationName
          onClick={() => dispatch(getCurrentWeatherByCity(locationName))}
        >
          {locationName}
        </LocationName>
        <DeleteIcon onClick={() => dispatch(deleteLocation(locationId))} />
      </LoactionItem>
    </>
  );
};

export default Location;
