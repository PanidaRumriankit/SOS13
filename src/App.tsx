import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Problemspage from "./components/Problemspage"
import Mainpage from "./components/Mainpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/Problemspage" element={<Problemspage />} />
    </Routes>
  );
}

export default App;
