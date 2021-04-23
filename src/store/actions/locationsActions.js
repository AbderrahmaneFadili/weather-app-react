export const addLocation = (locationName) => (
  dispatch,
  getState,
  getFirebase,
) => {
  const firestore = getFirebase().firestore();
  const authorId = getState().firebase.auth.uid;
  firestore
    .collection("WeatherLocations")
    .add({ locationName })
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
