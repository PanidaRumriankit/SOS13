import { useState } from "react";
import Navbar from "./components/Navbars";

function App() {
  const [count, setCount] = useState(0);

  return <Navbar />;
}

export default App;
