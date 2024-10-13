import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductList.css";
import paths from './utilities/pathnames';

const ProductList = () => {
  const { categoryName } = useParams();
  const [selectedFilter, setSelectedFilter] = useState("New");
  const navigate = useNavigate();

  const onProductClick = () => {
    if(categoryName === 'necklaces') {
      navigate('/product/neckplace');
    } else if (categoryName === 'rings') {
      navigate('/product/ring');
    } else if (categoryName === 'watches') {
      navigate('/product/watch');
    }
  };

  const allProducts = {
    watches: [
      { id: 1, name: "Watch 1", price: 100, rating: 4, imgSrc: "../public/watches/1.webp" },
      { id: 2, name: "Watch 2", price: 150, rating: 3, imgSrc: "../public/watches/2.webp" },
      { id: 3, name: "Watch 3", price: 250, rating: 5, imgSrc: "../public/watches/3.webp" },
      { id: 4, name: "Watch 4", price: 80, rating: 2, imgSrc: "../public/watches/4.webp" },
      { id: 5, name: "Watch 5", price: 90, rating: 4, imgSrc: "../public/watches/5.webp" },
      { id: 6, name: "Watch 6", price: 120, rating: 3, imgSrc: "../public/watches/6.webp" },
      { id: 7, name: "Watch 7", price: 110, rating: 4, imgSrc: "../public/watches/7.webp" },
      { id: 8, name: "Watch 8", price: 140, rating: 5, imgSrc: "../public/watches/8.webp" },
      { id: 9, name: "Watch 9", price: 130, rating: 2, imgSrc: "../public/watches/9.webp" },
      { id: 10, name: "Watch 10", price: 160, rating: 5, imgSrc: "../public/watches/10.webp" },
    ],
    necklaces: [
      { id: 12, name: "Necklace 1", price: 200, rating: 5, imgSrc: "../public/necklaces/1.webp" },
      { id: 13, name: "Necklace 2", price: 120, rating: 2, imgSrc: "../public/necklaces/2.webp" },
      { id: 14, name: "Necklace 3", price: 250, rating: 3, imgSrc: "../public/necklaces/3.webp" },
      { id: 15, name: "Necklace 4", price: 300, rating: 4, imgSrc: "../public/necklaces/4.webp" },
      { id: 16, name: "Necklace 5", price: 220, rating: 2, imgSrc: "../public/necklaces/5.webp" },
      { id: 17, name: "Necklace 6", price: 280, rating: 5, imgSrc: "../public/necklaces/6.webp" },
      { id: 18, name: "Necklace 7", price: 260, rating: 4, imgSrc: "../public/necklaces/7.webp" },
      { id: 19, name: "Necklace 8", price: 240, rating: 1, imgSrc: "../public/necklaces/8.webp" },
      { id: 20, name: "Necklace 9", price: 230, rating: 3, imgSrc: "../public/necklaces/9.webp" },
      { id: 21, name: "Necklace 10", price: 500, rating: 5, imgSrc: "../public/necklaces/10.webp" },
    ],
    rings: [
      { id: 21, name: "Ring 1", price: 80, rating: 1, imgSrc: "../public/rings/1.webp" },
      { id: 22, name: "Ring 2", price: 50, rating: 0, imgSrc: "../public/rings/2.webp" },
      { id: 23, name: "Ring 3", price: 90, rating: 2, imgSrc: "../public/rings/3.webp" },
      { id: 24, name: "Ring 4", price: 100, rating: 5, imgSrc: "../public/rings/4.webp" },
      { id: 25, name: "Ring 5", price: 110, rating: 4, imgSrc: "../public/rings/5.webp" },
      { id: 26, name: "Ring 6", price: 120, rating: 3, imgSrc: "../public/rings/6.webp" },
      { id: 27, name: "Ring 7", price: 130, rating: 2, imgSrc: "../public/rings/7.webp" },
      { id: 28, name: "Ring 8", price: 140, rating: 4, imgSrc: "../public/rings/8.webp" },
      { id: 29, name: "Ring 9", price: 150, rating: 5, imgSrc: "../public/rings/9.webp" },
      { id: 30, name: "Ring 10", price: 160, rating: 3, imgSrc: "../public/rings/10.webp" },
    ],
  };

  const products = allProducts[categoryName] || [];

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
