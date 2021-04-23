import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddLocationWrapper, Button, Form, Input } from "./AddLocation.styles";
import { getCurrentWeatherByCity } from "../../../store/actions/currentWeatherActions";
import { addLocation } from "../../../store/actions/locationsActions";
const AddLocation = () => {
  //selector
  const { currentWeather } = useSelector(
    (state) => state.currentWeatherReducer,
  );

  useEffect(() => {
    if (
      currentWeather &&
      currentWeather.message === undefined &&
      cityName !== ""
    ) {
      dispatch(addLocation(cityName));
    }
  }, [currentWeather]);

  const [cityName, setCityName] = useState("");

  const handleCityNameValue = ({ target: { value } }) => setCityName(value);

  //dispatch for dispatch action
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cityName) {
      dispatch(getCurrentWeatherByCity(cityName));
      setCityName("");
    } else {
      alert("Please enter the city name");
    }
  };
  return (
    <AddLocationWrapper>
      <Form autoCorrect="off" autoComplete="off" onSubmit={handleSubmit}>
        <Input
          onChange={handleCityNameValue}
          type="text"
          placeholder="Add Location..."
          value={cityName}
        />
        <Button type="submit">Add location</Button>
      </Form>
    </AddLocationWrapper>
  );
};

export default AddLocation;
