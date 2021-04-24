import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddLocationWrapper, Button, Form, Input } from "./AddLocation.styles";
import { getCurrentWeatherByCity } from "../../../store/actions/currentWeatherActions";
import { addLocation } from "../../../store/actions/locationsActions";
const AddLocation = () => {
  //dispatch for dispatch action

  const [cityName, setCityName] = useState("");

  const dispatch = useDispatch();

  const handleCityNameValue = ({ target: { value } }) => setCityName(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cityName) {
      dispatch(getCurrentWeatherByCity(cityName));
      dispatch(addLocation(cityName));
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
        <Button type="submit">Add</Button>
      </Form>
    </AddLocationWrapper>
  );
};

export default AddLocation;
