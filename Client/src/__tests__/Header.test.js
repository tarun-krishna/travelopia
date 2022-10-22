import Header from "../components/Header";
import renderer from "react-test-renderer";

describe("Header should render correctly", () => {
  it("renders correctly", () => {
    const header = renderer.create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
