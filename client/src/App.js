import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />           {/* Home page */}
        <Route path="/login" element={<Login />} />     {/* Login page */}
        <Route path="/profile" element={<Profile />} /> {/* Profile page */}
        <Route path="/register" element={<Register />} /> {/* Register page */}
      </Routes>
    </Router>
  );
}

export default App;
