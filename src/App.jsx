import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
