import React, { useState } from "react";
import "./ProductList.css";

const ProductList = () => {
  const [selectedFilter, setSelectedFilter] = useState("New");

  const products = [
    { id: 1, name: "Product 1", price: 100, rating: 4, imgSrc: "../public/placeholder.jpg" },
    { id: 2, name: "Product 2", price: 150, rating: 3, imgSrc: "../public/placeholder.jpg" },
    { id: 3, name: "Product 3", price: 200, rating: 5, imgSrc: "../public/placeholder.jpg" },
    { id: 4, name: "Product 4", price: 120, rating: 2, imgSrc: "../public/placeholder.jpg" },
    { id: 5, name: "Product 5", price: 80, rating: 1, imgSrc: "../public/placeholder.jpg" },
    { id: 6, name: "Product 6", price: 50, rating: 0, imgSrc: "../public/placeholder.jpg" },
  ];

  const getSortedProducts = () => {
    let sortedProducts = [...products];

    if (selectedFilter === "Price ascending") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedFilter === "Price descending") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (selectedFilter === "Rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    return sortedProducts;
  };

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = rating;
    const emptyStars = totalStars - filledStars;

    return (
      <div className="stars">
        {[...Array(filledStars)].map((_, index) => (
          <span key={index} className="star filled-star">★</span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index + filledStars} className="star empty-star">★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="product-list-page">
      <h1 className="category-title">Watches</h1>

      <div className="filter-options">
        <button
          className={selectedFilter === "New" ? "active" : ""}
          onClick={() => setSelectedFilter("New")}
        >
          New
        </button>
        <button
          className={selectedFilter === "Price ascending" ? "active" : ""}
          onClick={() => setSelectedFilter("Price ascending")}
        >
          Price ascending
        </button>
        <button
          className={selectedFilter === "Price descending" ? "active" : ""}
          onClick={() => setSelectedFilter("Price descending")}
        >
          Price descending
        </button>
        <button
          className={selectedFilter === "Rating" ? "active" : ""}
          onClick={() => setSelectedFilter("Rating")}
        >
          Rating
        </button>
      </div>

      <div className="product-grid">
        {getSortedProducts().map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imgSrc} alt={product.name} className="product-image" />
            <div className="product-details">
              <p>{product.name}</p>
              <div className="price-rating">
                <p className="product-price">${product.price}</p>
                {renderStars(product.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
