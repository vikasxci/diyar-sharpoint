import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";
import mobileimg from "../../images/laptop.png";
import {

  FaSearch,
  FaSort,
  FaFilter,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
const products = [
  {
    id: 1,
    status: "Draft",
    image: mobileimg,
    title: "Iphone 13 Pro Max 256GB Sierra blue",
    category: "Computers and Laptops",
    price: "200 KD",
    date: "2 days ago",
    statusClass: "status-draft",
  },
  {
    id: 2,
    status: "Sold",
    image: mobileimg,
    title: "Ipad Air 5th generation 64GB Wifi only",
    category: "Computers and Laptops",
    price: "150 KD",
    date: "3 days ago",
    statusClass: "status-sold",
  },
  {
    id: 3,
    status: "Published",
    image: mobileimg,
    title: "Porche Macan model 2021 100,000 KM",
    category: "Computers and Laptops",
    price: "11000 KD",
    date: "11/8/2024",
    statusClass: "status-published",
  },
];

function ProductList() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar activeTab={"Categories"}/>

      <div className="container mt-4">
        <h2 className="category-page-title">
          Laptops
        </h2>
        <h5 className="category-page-subtitle">
        <span style={{ color: "#626C83" }}>Home / Categories / Sub Categories / </span> Laptops
      </h5>
        <div className="search-sort-filter ">
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
        <div className="row my-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-3" onClick={()=>navigate("/detailview")}>
              <div className="card product-card">
                <div className={`status-badge ${product.statusClass}`}>
                  {product.status}
                </div>
                <img
                  src={product.image}
                  className="card-img-top product-image"
                  alt={product.title}
                />
                <div className="card-body product-body">
                  <h5 className="card-title product-title">{product.title}</h5>
                  <p className="card-text product-category">
                    {product.category}
                  </p>
                  <p className="card-price product-price">{product.price}</p>
                  <p className="card-date product-date">{product.date}</p>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
