import UserForm from "./components/UserForm";

import { useState } from "react";
import UserDetails from "./components/UserDetails";
import Header from "./components/Header";
function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="container">
      <Header show={show} setShow={setShow} />
      <div>{show ? <UserForm /> : <UserDetails />}</div>
    </div>
  );
}

export default App;
