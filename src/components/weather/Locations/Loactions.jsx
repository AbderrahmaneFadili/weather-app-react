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
  const uid = useSelector((state) => state.firebase.auth.uid);
  useFirestoreConnect(() => {
    return {
      collection: "WeatherLocations",
      where: ["authorId", "==", uid],
    };
  });
  const locations = useSelector(
    (state) => state.firestore.ordered.WeatherLocations,
  );
  return (
    <LoactionsWrapper>
      <Title>Locations</Title>
      <LoactionsContainer>
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
