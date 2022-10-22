import React from "react";
import renderer from "react-test-renderer";
import UserForm from "../components/UserForm";

it("renders correctly", () => {
  const header1 = renderer.create(<UserForm />).toJSON();
  expect(header1).toMatchSnapshot();
});
