import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CarPage from "./components/carPage/CarPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {

  let location = useLocation()
  
  const carHeader = ['/'];

  return (
    <div className="App">
      <Header car={carHeader.includes(location.pathname)} />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cars/:id" element={<CarPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
