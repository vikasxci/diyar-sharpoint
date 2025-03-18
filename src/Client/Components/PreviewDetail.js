import React, { useState } from "react";
import { FaMapMarkerAlt, FaTrash, FaEdit, FaEnvelope } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../.././css/style.css";
import shoes1 from "../../images/shoe_1.jpg";
import shoes2 from "../../images/shoe_2.jpg";
import shoes3 from "../../images/shoe_3.jpg";
import shoes4 from "../../images/shoe_4.jpg";
import Navbar from "../Components/Navbar";


function PreviewDetail() {
  const [mainImage, setMainImage] = useState(shoes1);
  const [slide, setSlide] = useState(false);
  
  const thumbnails = [shoes1, shoes2, shoes3, shoes4];

  const changeImage = (image) => {
    setSlide(true);
    setTimeout(() => {
      setMainImage(image);
      setSlide(false);
    }, 300);
  };

  return (
    <>
      <Navbar activeTab={"My listings"}/>
      <div className="container mt-5 mb-5">
        <h5 className="category-page-subtitle mb-3">
          <span style={{ color: "#626C83" }}>Home / Categories / Sub Categories / </span> Laptops
        </h5>
        <div className="row">
          <div className="col-md-6">
            <div className={`preview-container ${slide ? "slide" : ""}`}>
              <img src={mainImage} alt="Product" className="img-fluid rounded preview-image" />
            </div>
            <div className="d-flex mt-2">
              {thumbnails.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`img-thumbnail mx-1 ${mainImage === image ? "border border-primary" : ""}`}
                  style={{ width: "80px", cursor: "pointer" }}
                  onClick={() => changeImage(image)}
                />
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <span className="badge bg-success">Published</span>
            <h3 className="mt-2">
              Macbook Pro M1 Max 256GB 16GB Ram <span className="badge bg-danger">New</span>
            </h3>
            <p className="text-primary fw-bold fs-4">600 KD</p>
            <p className="text-muted">By <strong>Ahmed Hammad</strong></p>
            <p className="text-muted">
              <FaMapMarkerAlt /> Al Asimah, Bneid Al Qar, Block 1 &nbsp;
              <a href="/" className="text-decoration-none">Show on map</a>
            </p>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary">
                <FaEdit /> Edit
              </button>
              <button className="btn btn-outline-danger">
                <FaTrash /> Delete
              </button>
            </div>
            <button className="btn btn-light w-100 mt-3">Mark as sold ✅</button>
            <p className="text-muted mt-3">
              Product description goes here Product description goes here Product description goes here.
            </p>
            <p className="text-primary">
              <a href="/" className="text-decoration-none">Report an issue with this listing</a>
            </p>
            <h5 className="fw-bold">Share with a colleague</h5>
            <div className="d-flex gap-2 mt-2">
              <button className="btn btn-light">
                <FaEnvelope /> Send via Email
              </button>
              <button className="btn btn-success text-white">
                <BsWhatsapp /> Send via Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreviewDetail;
