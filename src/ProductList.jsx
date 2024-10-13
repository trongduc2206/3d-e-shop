import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductList.css";
import paths from './utilities/pathnames';

const ProductList = () => {
  const { categoryName } = useParams(); // Récupération du paramètre de catégorie
  const [selectedFilter, setSelectedFilter] = useState("New");
  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(paths.product.path);
  };

  const allProducts = {
    watches: [
      { id: 1, name: "Watch 1", price: 100, rating: 4, imgSrc: "../public/placeholder.jpg" },
      { id: 2, name: "Watch 2", price: 150, rating: 3, imgSrc: "../public/placeholder.jpg" },
      { id: 3, name: "Watch 3", price: 250, rating: 5, imgSrc: "../public/placeholder.jpg" },
      { id: 4, name: "Watch 4", price: 80, rating: 2, imgSrc: "../public/placeholder.jpg" },
      { id: 5, name: "Watch 5", price: 90, rating: 4, imgSrc: "../public/placeholder.jpg" },
      { id: 6, name: "Watch 6", price: 120, rating: 3, imgSrc: "../public/placeholder.jpg" },
      { id: 7, name: "Watch 7", price: 110, rating: 4, imgSrc: "../public/placeholder.jpg" },
      { id: 8, name: "Watch 8", price: 140, rating: 5, imgSrc: "../public/placeholder.jpg" },
      { id: 9, name: "Watch 9", price: 130, rating: 2, imgSrc: "../public/placeholder.jpg" },
      { id: 10, name: "Watch 10", price: 160, rating: 5, imgSrc: "../public/placeholder.jpg" },
    ],
    necklaces: [
      { id: 12, name: "Necklace 1", price: 200, rating: 5, imgSrc: "../public/placeholder.jpg" },
      { id: 13, name: "Necklace 2", price: 120, rating: 2, imgSrc: "../public/placeholder.jpg" },
      { id: 14, name: "Necklace 3", price: 250, rating: 3, imgSrc: "../public/placeholder.jpg" },
      { id: 15, name: "Necklace 4", price: 300, rating: 4, imgSrc: "../public/placeholder.jpg" },
      { id: 16, name: "Necklace 5", price: 220, rating: 2, imgSrc: "../public/placeholder.jpg" },
      { id: 17, name: "Necklace 6", price: 280, rating: 5, imgSrc: "../public/placeholder.jpg" },
      { id: 18, name: "Necklace 7", price: 260, rating: 4, imgSrc: "../public/placeholder.jpg" },
      { id: 19, name: "Necklace 8", price: 240, rating: 1, imgSrc: "../public/placeholder.jpg" },
      { id: 20, name: "Necklace 9", price: 230, rating: 3, imgSrc: "../public/placeholder.jpg" },
      { id: 21, name: "Necklace 10", price: 500, rating: 5, imgSrc: "../public/placeholder.jpg" },
    ],
    rings: [
      { id: 21, name: "Ring 1", price: 80, rating: 1, imgSrc: "../public/placeholder.jpg" },
      { id: 22, name: "Ring 2", price: 50, rating: 0, imgSrc: "../public/placeholder.jpg" },
      { id: 23, name: "Ring 3", price: 90, rating: 2, imgSrc: "../public/placeholder.jpg" },
      { id: 24, name: "Ring 4", price: 100, rating: 5, imgSrc: "../public/placeholder.jpg" },
      { id: 25, name: "Ring 5", price: 110, rating: 4, imgSrc: "../public/placeholder.jpg" },
      { id: 26, name: "Ring 6", price: 120, rating: 3, imgSrc: "../public/placeholder.jpg" },
      { id: 27, name: "Ring 7", price: 130, rating: 2, imgSrc: "../public/placeholder.jpg" },
      { id: 28, name: "Ring 8", price: 140, rating: 4, imgSrc: "../public/placeholder.jpg" },
      { id: 29, name: "Ring 9", price: 150, rating: 5, imgSrc: "../public/placeholder.jpg" },
      { id: 30, name: "Ring 10", price: 160, rating: 3, imgSrc: "../public/placeholder.jpg" },
    ],
  };

  const products = allProducts[categoryName] || []; // Sélectionner les produits en fonction de la catégorie

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
      <h1 className="category-title">{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>

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

      <div className="product-list">
        {getSortedProducts().map((product) => (
          <div
            key={product.id}
            className="product"
            onClick={onProductClick}
          >
            <img
              className="product-image"
              src={product.imgSrc}
              alt={product.name}
            />
            <div className="product-details">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">${product.price}</p>
              {renderStars(product.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
