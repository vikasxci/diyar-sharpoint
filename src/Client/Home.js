import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaHeart,
  FaSearch,
  FaSort,
  FaFilter,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import Navbar from "./Components/Navbar";
import imageDemo from ".././images/laptop.png"
function Home() {
  const [highlightText, setHighlightText] = useState("safest");
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Auto-changing text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightText((prev) => (prev === "safest" ? "fastest" : "safest"));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "http://localhost:5000/api/products"; // Update with your API URL
        // if (selectedCategory) {
        //   url += `?category=${selectedCategory}`;
        // }
        const response = await axios.get(url);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="pb-5">
      <Navbar activeTab={"Home"} />

      {/* Categories Section */}
      <div className="container mt-3">
        <div className="d-flex flex-wrap gap-2 category-buttons">
          {[
            "Computers and laptops",
            "Mobile phones",
            "Tablets",
            "Furniture",
            "Appliances",
            "Accessories",
            "Office",
            "Cars",
            "Cameras",
            "Kids and toys",
            "Family supplies",
          ].map((category, index) => (
            <button
              key={index}
              className={`btn category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Heading with auto-changing text */}
      <div className="container mt-4">
        <h2 className="sell-heading">
          Sell your stuff the{" "}
          <span className="highlight fade-text">{highlightText}</span> way
        </h2>
      </div>

      <div className="search-sort-filter px-5">
        {/* Search Input */}
        <div className="section-1">
          <div className="search-box">
            <FaSearch className="icon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="section-2">
          {/* Sort Dropdown */}
          <div className="sort-box">
            <FaSort className="icon" />
            <span className="sort-text">Sort by :</span>
            <span className="sort-value"> Future added</span>
            <span className="dropdown-arrow">▼</span>
          </div>

          {/* Filter Button */}
          <div className="filter-box">
            <FaFilter className="icon" />
            <span>Filter</span>
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div className="container mt-4">
        <div className="row g-4">
          {products.length > 0 ? (
            products.map(({ _id, image, name, category, price, createdAt }) => (
              <div key={_id} className="col-md-3 d-flex">
                <div className="card product-card w-100">
                  <div className="position-relative">
                    <img
                      src={imageDemo} // Fallback image
                      className="card-img-top product-image"
                      alt={name}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title product-title">{name}</h5>
                    <p className="text-muted product-category">{category}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="product-price">{price} KD</span>
                      <FaHeart className="wishlist-icon" />
                    </div>
                    <small className="text-muted product-date">
                      {new Date(createdAt).toDateString()}
                    </small>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
