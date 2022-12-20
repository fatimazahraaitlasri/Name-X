
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CleintSide from "./pages/router";
import Register from './pages/Register';
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<CleintSide />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

