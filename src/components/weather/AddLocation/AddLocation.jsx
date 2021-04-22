import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddLocationWrapper, Button, Form, Input } from "./AddLocation.styles";
import { getCurrentWeatherByCity } from "../../../store/actions/currentWeatherActions";
const AddLocation = () => {
  const [cityName, setCityName] = useState("");

  const handleCityNameValue = ({ target: { value } }) => setCityName(value);

  //dispatch for dispatch action
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cityName) {
      dispatch(getCurrentWeatherByCity(cityName));
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
        />
        <Button type="submit">Add location</Button>
      </Form>
    </AddLocationWrapper>
  );
};

export default AddLocation;
