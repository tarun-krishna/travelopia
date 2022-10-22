import renderer from "react-test-renderer";
import UserDetails from "../components/UserDetails";

it("renders correctly", () => {
  const header1 = renderer.create(<UserDetails />).toJSON();
  expect(header1).toMatchSnapshot();
});
