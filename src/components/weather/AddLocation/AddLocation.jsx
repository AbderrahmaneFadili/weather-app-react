import React from "react";
import { AddLocationWrapper, Button, Form, Input } from "./AddLocation.styles";

const AddLocation = () => {
  return (
    <AddLocationWrapper>
      <Form autoCorrect="off" autoComplete="off">
        <Input type="text" placeholder="Add Location..." />
        <Button type="submit">Add</Button>
      </Form>
    </AddLocationWrapper>
  );
};

export default AddLocation;
