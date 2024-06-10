import { useState } from "react";
import Navbar from "./components/Navbars";
import Mainpage from "./components/Mainpage";

function App() {
  const [count, setCount] = useState(0);

  return <Mainpage />;
}

export default App;
