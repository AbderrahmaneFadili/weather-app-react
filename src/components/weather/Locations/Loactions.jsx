import React from "react";
import { useSelector } from "react-redux";
import {
  LoactionsWrapper,
  Title,
  LoactionsContainer,
} from "./Locations.styles";
import Location from "../Location/Location";
import { useFirestoreConnect } from "react-redux-firebase";

const Loactions = () => {
  useFirestoreConnect(["WeatherLocations"]);
  const locations = useSelector(
    (state) => state.firestore.ordered.WeatherLocations,
  );
  return (
    <LoactionsWrapper>
      <Title>Locations</Title>
      <LoactionsContainer>
        {!locations && "No Location"}
        {locations &&
          locations.map((l, i) => (
            <Location
              key={l.id}
              locationId={l.id}
              locationName={l.locationName}
            />
          ))}
      </LoactionsContainer>
    </LoactionsWrapper>
  );
};

export default Loactions;
