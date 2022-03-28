import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "../src/components/LandingPage";
import Home from "./components/Home";
import DogDetail from "./components/DogDetail";
import CreateDog from "./components/CreateDog";
import About from "./components/About";
import { GlobalStyle } from "./globalStyles"; 


function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dog/:id" element={<DogDetail />} />
        <Route path="/dog" element={<CreateDog />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to='/'/>} />
      </Routes>
    </>
  );
}

export default App;
