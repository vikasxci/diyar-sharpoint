import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Client/Home";
import Category from "./Client/MyListings/AddProduct/Category";
import SubCategory from "./Client/MyListings/AddProduct/SubCategory";
import Media from "./Client/MyListings/AddProduct/Media";
import Details from "./Client/MyListings/AddProduct/Details";
import List from "./Client/MyListings/List";
import CategoryList from "./Client/Categories/CategoriesList";
import SubCategoryList from "./Client/Categories/SubCategoriesList";
import ProductList from "./Client/Categories/ProductList";
import PreviewDetail from "./Client/Components/PreviewDetail"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct/category" element={<Category />} />
          <Route path="/addproduct/subcategory" element={<SubCategory />} />
          <Route path="/addproduct/media" element={<Media />} />
          <Route path="/addproduct/details" element={<Details />} />
          <Route path="/mylist" element={<List />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/subcategories" element={<SubCategoryList />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/detailview" element={<PreviewDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
