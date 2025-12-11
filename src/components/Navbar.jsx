import React from "react";
import "./Navbar.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="nav-left"></div>

      <div
        className="nav-right"
        onClick={() => navigate("/signup")}
        style={{ cursor: "pointer" }}
      >
        <FaRegCircleUser size={20} color="#000000" />
        <span style={{ color: "#000000" }}> <b></b>User</span>

      </div>
    </nav>
  );
};

export default Navbar;
