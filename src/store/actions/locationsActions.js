import { v4 as uuidv4 } from "uuid";
export const addLocation = (locationName) => (
  dispatch,
  getState,
  getFirebase,
) => {
  const firestore = getFirebase().firestore();
  const authorId = getState().firebase.auth.uid;
  firestore
    .collection("WeatherLocations")
    .doc(uuidv4())
    .set({
      locationName,
    })
    .then(() => console.log("Location Added"))
    .catch(() => console.error("Adding location error"));
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
