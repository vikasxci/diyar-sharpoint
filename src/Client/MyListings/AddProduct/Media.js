import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsDashCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Media() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      toast.error("Only image files are allowed!");
      return;
    }

    const newImages = acceptedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));

    setImages((prev) => [...prev, ...newImages]);
    toast.success(`${acceptedFiles.length} file(s) uploaded successfully!`);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleNextClick = () => {
    if (images.length === 0) {
      toast.error("Please upload at least one image before proceeding!");
      return;
    }
    navigate("/addproduct/details");
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="row">
        <div className="col">
          <h2 className="category-page-title">
            Add <span className="category-page-highlight">Media</span>
          </h2>
        </div>

        <div className="col-4">
          <div className="category-page-progress-bar">
            <div className="category-page-step active">1</div>
            <span>Category</span>
            <div className="category-page-line"></div>
            <div className="category-page-step active">2</div>
            <span>Media</span>
            <div className="category-page-line"></div>
            <div className="category-page-step">3</div>
            <span>Details</span>
          </div>
        </div>
      </div>

      <p>Upload images/videos for your listing.</p>

      <div className="d-flex flex-wrap gap-3">
        {images.map((image, index) => (
          <div key={index} className="position-relative">
            <img
              src={image.url}
              alt={`Uploaded ${index}`}
              className="rounded"
              style={{ width: "180px", height: "180px", objectFit: "cover" }}
            />
            <BsDashCircle
              className="position-absolute top-0 end-0 text-danger"
              style={{ cursor: "pointer", fontSize: "20px", margin: "5px" }}
              onClick={() => handleRemoveImage(index)}
            />
          </div>
        ))}

        {/* Drag & Drop Box */}
        <div
          {...getRootProps()}
          className="border rounded d-flex flex-column align-items-center justify-content-center"
          style={{
            width: "180px",
            height: "180px",
            borderStyle: "dashed",
            cursor: "pointer",
          }}
        >
          <input {...getInputProps()} />
          <span>📤</span>
          <p className="text-primary m-0">Drag & Drop or Click</p>
          <small className="text-muted">JPG, PNG (Max: 300MB)</small>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-outline-primary" onClick={()=>navigate("/addproduct/subcategory")}>← Previous</button>
        <div>
          <button className="btn btn-outline-secondary me-2">Save as draft</button>
          <button className="btn btn-theme" onClick={handleNextClick}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Media;
