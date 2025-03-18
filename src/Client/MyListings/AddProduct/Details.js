import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import Navbar from "../../Components/Navbar";
import arrowRight from "../../../images/arrow-right-white.svg";
import arrowLeft from "../../../images/back-arrow.svg";
import draftIcon from "../../../images/drafts-icon.svg";
import { useNavigate } from "react-router-dom";
// Validation Schema
const schema = yup.object().shape({
  adTitle: yup.string().required("Ad Title is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),
  adDescription: yup
    .string()
    .required("Ad Description is required")
    .max(200, "Description must be under 200 characters"),
  phoneNumber: yup
    .string()
    .matches(/^\d{8,12}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  whatsappNumber: yup
    .string()
    .matches(/^\d{8,12}$/, "Enter a valid WhatsApp number")
    .notRequired(),
  district: yup.string().required("District is required"),
  area: yup.string().required("Area is required"),
  block: yup.string().required("Block is required"),
  address: yup
    .string()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters long"),
  agreeTerms: yup.bool().oneOf([true], "You must agree to the terms"),
});
// Country Code Options with Flags
const countryOptions = [
  {
    value: "+965",
    label: (
      <>
        <img src="https://flagcdn.com/w40/kw.png" alt="KW" width="20" /> +965
      </>
    ),
  },
  {
    value: "+964",
    label: (
      <>
        <img src="https://flagcdn.com/w40/qa.png" alt="QA" width="20" /> +964
      </>
    ),
  },
  {
    value: "+968",
    label: (
      <>
        <img src="https://flagcdn.com/w40/sa.png" alt="SA" width="20" /> +968
      </>
    ),
  },
  {
    value: "+962",
    label: (
      <>
        <img src="https://flagcdn.com/w40/ae.png" alt="AE" width="20" /> +962
      </>
    ),
  },
  {
    value: "+91",
    label: (
      <>
        <img src="https://flagcdn.com/w40/in.png" alt="IN" width="20" /> +91
      </>
    ),
  },
];

function Details() {
  const [hideIdentity, setHideIdentity] = useState(false);
  const [phoneCode, setPhoneCode] = useState("+965");
  const [whatsappCode, setWhatsappCode] = useState("+965");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
 
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Form Submitted Successfully!");
  };
  console.log(phoneCode)
  console.log(whatsappCode)

  return (
    <>
      <Navbar />
      <div className="px-3 pt-4 bg-gray">
        <div className="row">
          <div className="col">
            <h2 className="category-page-title">
              Add <span className="category-page-highlight">Details</span>
            </h2>
          </div>

          <div className="col-4">
            <div className="category-page-progress-bar">
              <div className="category-page-step active">1</div>
              <span>Category</span>
              <div className="category-page-line"></div>
              <div className="category-page-step active">2</div>
              <span>Media</span>
              <div className="category-page-line "></div>
              <div className="category-page-step active">3</div>
              <span>Details</span>
            </div>
          </div>
        </div>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Ad Title & Price */}
          <div className="row mb-3">
            {/* 1st col */}
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <Form.Group>
                    <Form.Label>Ad Title *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter ad title"
                      {...register("adTitle")}
                    />
                    {errors.adTitle && (
                      <Alert variant="danger">{errors.adTitle.message}</Alert>
                    )}
                  </Form.Group>
                </div>
                <div className="col-12">
                  <Form.Group className="mb-3">
                    <Form.Label>Ad Description *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Write text here."
                      {...register("adDescription")}
                    />
                    {errors.adDescription && (
                      <Alert variant="danger">
                        {errors.adDescription.message}
                      </Alert>
                    )}
                  </Form.Group>
                </div>
                <div className="col-12">
                  <Form.Group>
                    <Form.Label>Phone Number *</Form.Label>
                    <div className="d-flex">
                      <Select
                        options={countryOptions}
                        defaultValue={countryOptions[0]}
                        onChange={(e) => setPhoneCode(e.value)}
                      />
                      <Form.Control
                        type="text"
                        style={{"width":"80%"}}
                        placeholder="Enter number"
                        {...register("phoneNumber")}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <Alert variant="danger">
                        {errors.phoneNumber.message}
                      </Alert>
                    )}
                  </Form.Group>
                </div>

                <div className="col-12">
                  <Form.Group>
                    <Form.Label>WhatsApp Number (optional)</Form.Label>
                    <div className="d-flex">
                      <Select
                        options={countryOptions}
                        defaultValue={countryOptions[0]}
                        onChange={(e) => setWhatsappCode(e.value)}
                      />
                      <Form.Control
                        type="text"
                        style={{"width":"80%"}}
                        placeholder="Enter number"
                        {...register("whatsappNumber")}
                      />
                    </div>
                    {errors.whatsappNumber && (
                      <Alert variant="danger">
                        {errors.whatsappNumber.message}
                      </Alert>
                    )}
                  </Form.Group>
                </div>

                <div className="col">
                  <Form.Group className="mb-3 mt-3">
                    <Form.Check
                      type="checkbox"
                      label="Agree to terms and conditions"
                      {...register("agreeTerms")}
                    />
                    {errors.agreeTerms && (
                      <Alert variant="danger">
                        {errors.agreeTerms.message}
                      </Alert>
                    )}
                  </Form.Group>
                </div>
              </div>
            </div>
            {/* 2st col */}
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <Form.Group>
                    <Form.Label>Price *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="KWD"
                      {...register("price")}
                    />
                    {errors.price && (
                      <Alert variant="danger">{errors.price.message}</Alert>
                    )}
                  </Form.Group>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-4">
                  <Form.Group>
                    <Form.Label>District *</Form.Label>
                    <Form.Select {...register("district")}>
                      <option value="">Choose</option>
                      <option value="district1">District 1</option>
                      <option value="district2">District 2</option>
                    </Form.Select>
                    {errors.district && (
                      <Alert variant="danger">{errors.district.message}</Alert>
                    )}
                  </Form.Group>
                </div>
                <div className="col-4">
                  <Form.Group>
                    <Form.Label>Area *</Form.Label>
                    <Form.Select {...register("area")}>
                      <option value="">Choose</option>
                      <option value="area1">Area 1</option>
                      <option value="area2">Area 2</option>
                    </Form.Select>
                    {errors.area && (
                      <Alert variant="danger">{errors.area.message}</Alert>
                    )}
                  </Form.Group>
                </div>
                <div className="col-4">
                  <Form.Group>
                    <Form.Label>Block *</Form.Label>
                    <Form.Select {...register("block")}>
                      <option value="">Choose</option>
                      <option value="block1">Block 1</option>
                      <option value="block2">Block 2</option>
                    </Form.Select>
                    {errors.block && (
                      <Alert variant="danger">{errors.block.message}</Alert>
                    )}
                  </Form.Group>
                </div>
              </div>
              <div className="col-12 mt-3">
                <Form.Group className="mb-3">
                  <Form.Label>Address *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Area Name, Street Name"
                    {...register("address")}
                  />
                  {errors.address && (
                    <Alert variant="danger">{errors.address.message}</Alert>
                  )}
                </Form.Group>
              </div>
              <div className="col-12">
               <a> Select location on map</a>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    label="Hide my Identity"
                    checked={hideIdentity}
                    onChange={() => setHideIdentity(!hideIdentity)}
                  />
                </Form.Group>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-outline-primary" onClick={()=>navigate("/addproduct/media")}>
              <img alt="Company Logo" src={arrowLeft} /> Previous
            </button>
            <div>
              <button className="btn btn-outline-secondary me-2">
                Save as draft <img  alt="Company Logo" src={draftIcon} />
              </button>
              <Button className="btn btn-theme" type="submit">
                Publish <img alt="Company Logo" src={arrowRight} />
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Details;
