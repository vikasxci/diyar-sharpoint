import React, { useEffect, useState } from "react";
import "../../css/style.css";
import { FaHeart,  FaPlus, FaBell, FaUser } from "react-icons/fa";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar({ activeTab }) {
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const handleClick = (menu) => {
    let linking = "";
    if (menu === "Home") linking = "/";
    else if (menu === "Categories") linking = "/categories";
    else linking = "/mylist";
    navigate(linking);
  };

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container d-flex align-items-center">
        {/* Logo Section (Left) */}
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        {/* Centered Navigation */}
        <div className="nav-container ">
          <ul className="nav-list d-flex justify-content-center">
            {["Home", "Categories", "My listings"].map((menu) => (
              <li
                key={menu}
                className={`nav-item ${active === menu ? "active" : ""}`}
                onClick={() => handleClick(menu)}
              >
                {active === menu && <span className="dot"></span>}
                <a href="/" className="ms-2">{menu}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center">
          <button className="btn sell-btn" onClick={()=>navigate("/addproduct/category")}>
            <FaPlus /> Sell
          </button>
          <span className="nav-item icon-item">
            <FaBell />
          </span>
          <span className="nav-item icon-item">
            <FaHeart />
          </span>
          <span className="nav-item icon-item">
            <FaUser />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
