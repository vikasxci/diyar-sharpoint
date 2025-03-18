import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/style.css";
import Navbar from "../../Components/Navbar";
import mobile from "../../../images/mobile.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const categories = [
  { id: 1, name: "Computers and laptops", icon: "bi bi-pc-display" },
  { id: 2, name: "Mobile phones", icon: "bi bi-phone" },
  { id: 3, name: "Tablets", icon: "bi bi-tablet" },
  { id: 4, name: "Furniture", icon: "bi bi-house-door" },
  { id: 5, name: "Appliances", icon: "bi bi-speaker" },
  { id: 6, name: "Accessories", icon: "bi bi-watch" },
  { id: 7, name: "Office", icon: "bi bi-laptop" },
  { id: 8, name: "Cars", icon: "bi bi-car-front" },
];

function Category() {
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
      <Navbar />
      <ToastContainer /> {/* This ensures toasts are displayed */}
      <a href="/" className="category-page-back-link">
        &larr; Back to listings
      </a>
      <div className="row">
        <div className="col">
          <h2 className="category-page-title">
            Add a new <span className="category-page-highlight">listing</span>
          </h2>
        </div>
        <div className="col-4">
          <div className="category-page-progress-bar">
            <div className="category-page-step active">1</div>
            <span>Category</span>
            <div className="category-page-line"></div>
            <div className="category-page-step">2</div>
            <span>Media</span>
            <div className="category-page-line"></div>
            <div className="category-page-step">3</div>
            <span>Details</span>
          </div>
        </div>
      </div>
      <h4 className="category-page-subtitle">Category</h4>
      <p className="category-page-description">
        Select the main category your listing item falls under
      </p>

      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-3">
            <div
              className={`category-page-card ${
                selectedCategory === category.id ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div
                className={`mx-3 ${category.icon} category-page-icon ${
                  selectedCategory === category.id ? "selected-icon" : ""
                }`}
              >
                <img src={mobile} alt="category" />
              </div>
              <p className="mx-3">{category.name}</p>
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category.id}
                readOnly
                className="mx-3"
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={handleNext} className="add-category-btn">
          Add Category
        </button>
      </div>
    </div>
  );
}

export default Category;
