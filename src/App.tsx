import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Problemspage from "./components/Problemspage"
import Mainpage from "./components/Mainpage";
import FAQ from './components/FAQ';
import Contacts2 from "./components/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/Problemspage" element={<Problemspage />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/Contacts" element={<Contacts2 />} />
    </Routes>
  );
}

export default App;
