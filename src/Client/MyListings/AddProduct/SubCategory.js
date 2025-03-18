import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/style.css";
import Navbar from "../../Components/Navbar";
import mobile from "../../../images/mobile.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Desktops", icon: "bi bi-pc-display" },
  { id: 2, name: "Laptops", icon: "bi bi-phone" },
  { id: 3, name: "Monitors and accessories", icon: "bi bi-tablet" },
];
function SubCategory() {
    const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddSubCategory = () => {
    if (!selectedCategory) {
      toast.error("Please select a subcategory before proceeding!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    // Proceed with next step if a category is selected
    toast.success("Subcategory selected successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
    navigate("/addproduct/media")
  };

  return (
    <div className="category-page-container">
      <Navbar />
      <ToastContainer /> {/* To show toast notifications */}
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
      <h4 className="category-page-subtitle">Sub Category</h4>
      <p className="category-page-description">
        Select the Sub category your listing item falls under
      </p>

      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-4">
            <div
              className={`category-page-card ${
                selectedCategory === category.id ? "selected" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
              style={{ display: "flex", alignItems: "center", gap: "10px" }} 
            >
              <div
                className={`mx-3 ${category.icon} category-page-icon ${
                  selectedCategory === category.id ? "selected-icon" : ""
                }`}
              >
                <img alt="Company Logo" src={mobile} />
              </div>
              <p style={{ margin: 0, flex: 1 }}>{category.name}</p>
              <input 
                type="radio" 
                name="category" 
                checked={selectedCategory === category.id} 
                readOnly 
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="add-category-btn" onClick={handleAddSubCategory}>
          Add SubCategory
        </button>
      </div>
    </div>
  );
}

export default SubCategory;
