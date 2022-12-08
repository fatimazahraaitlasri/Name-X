
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/pageHome";
import Register from './pages/Register';
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

