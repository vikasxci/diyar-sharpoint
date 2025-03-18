import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../..//css/style.css";
import Navbar from "../Components/Navbar";
import mobile from "../.././images/mobile.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaHeart,
  FaEllipsisV,
  FaPlus,
  FaBell,
  FaUser,
  FaSearch,
  FaSort,
  FaFilter,
} from "react-icons/fa";

const categories = [
 
  { id: 1, name: "Desktops", icon: "bi bi-pc-display" , listings:12},
  { id: 2, name: "Laptops", icon: "bi bi-phone", listings:12 },
  { id: 3, name: "Monitors and accessories", icon: "bi bi-tablet" , listings:12},
];

function SubCategoryList() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!selectedCategory) {
      toast.error("Please select a category before proceeding!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    navigate("/addproduct/subcategory");
  };

  return (
    <div className="category-page-container">
      <Navbar activeTab={"Categories"} />
      <ToastContainer /> {/* This ensures toasts are displayed */}
      
     
      <div className="row">
        <div className="col">
          <h2 className="category-page-title mt-2">Sub Category</h2>
        </div>
       
      </div>
      <h5 className="category-page-subtitle">
        <span style={{ color: "#626C83" }}>Home / Categories / </span> Sub Categories
      </h5>
      {/* Search Input */}
     
        <div className="search-box mt-3" style={{width:"40%"}}>
          <FaSearch className="icon" />
          <input type="text" placeholder="Search..." />
        </div>
   
      <div className="row mt-3">
        {categories.map((category) => (
          <div key={category.id} className="col-3">
            <div
              className={`category-page-card ${
                selectedCategory === category.id ? "selected" : ""
              }`}
              onClick={() => {setSelectedCategory(category.id)
                navigate("/productlist")
              }}
            >
              <div
                className={`mx-3 ${category.icon} category-page-icon ${
                  selectedCategory === category.id ? "selected-icon" : ""
                }`}
              >
                <img src={mobile} alt="category" />
              </div>
              <div className="row">
                <div className="col-12">
              <p className="mx-3">{category.name}</p>
                </div>
                <div className="col-12" style={{    color: "#626C83"}}>
              <p>{category.listings} Listings</p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default SubCategoryList;
