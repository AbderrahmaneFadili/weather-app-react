import { v4 as uuidv4 } from "uuid";
import { currentWeatherUrl } from "../../api/endPoints";

export const addLocation = (locationName) => (
  dispatch,
  getState,
  getFirebase,
) => {
  const firestore = getFirebase().firestore();
  const authorId = getState().firebase.auth.uid;

  //fetch Current Weather By Location Name
  fetch(`${currentWeatherUrl}&q=${locationName}`)
    .then((res) => res.json())
    //after data fetched seccessufly
    .then((data) => {
      //adding the data.name to the datase
      firestore
        .collection("WeatherLocations")
        .doc(uuidv4())
        .set({
          locationName: data.name,
          authorId: authorId,
        })
        .then(() => console.log("Location Added"))
        .catch(() => console.error("Adding location error"));
    })
    .catch((e) =>
      console.log("Fetch Current Weather for adding to Databse Error :", e),
    );
};

export const deleteLocation = (locationId) => (
  dispatch,
  getState,
  getFirebase,
) => {
  const firestore = getFirebase().firestore();
  firestore
    .collection("WeatherLocations")
    .doc(locationId)
    .delete()
    .then(() => console.log("Location deleted"))
    .catch(() => console.error("deleting location error"));
};
