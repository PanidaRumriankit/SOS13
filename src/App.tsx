import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Problemspage from "./components/Problemspage"
import Mainpage from "./components/Mainpage";
import FAQ from './components/FAQ';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/Problemspage" element={<Problemspage />} />
      <Route path="/FAQ" element={<FAQ />} />
    </Routes>
  );
}

export default App;
