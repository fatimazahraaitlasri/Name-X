import React from "react";
import Dashboard from "./pages/dashboard";
import Cars from "./components/carts/Cars";
import Details from "./components/detailles";
import Orers from "./components/orders";
import Clients from "./components/Clients";
import UpdateCars from "./pages/updateCars";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/dashboard/cars" element={<Cars />} />
        <Route path="/dasboard/detaills" element={<Details />} />
        <Route path="/dasboard/orders" element={<Orers />} />
        <Route path="/dasboard/Clients" element={<Clients />} />
        <Route path="dashboard/cars/update" element={<UpdateCars />} />
      </Routes>
    </Router>
  );
}

export default App;
