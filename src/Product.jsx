import React, { Suspense } from 'react';
import './Product.css'; // Make sure this path is correct based on your project structure
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'
import Watch from '../public/Watch'
const ProductPage = () => {
  const product = {
    name: 'Patex Phillip Watch',
    description: 'This is an awesome product that solves many problems. It is built with high-quality materials and offers exceptional performance.',
    price: '$99.99',
    features: [
      'Feature One',
      'Feature Two',
      'Feature Three',
      'Feature Four',
    ],
    // Add more product details as needed
  };

  return (
    <div className="product-page">
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <h2 className="product-price">{product.price}</h2>
        <ul className="product-features">
          {product.features.map((feature, index) => (
            <li key={index} className="feature-item">{feature}</li>
          ))}
        </ul>
        {/* Add more information like Add to Cart button, reviews, etc., if needed */}
      </div>
      <div>
        <Canvas>
            <ambientLight />
            <OrbitControls />
            <Suspense fallback={null}>
                <Watch/>
            </Suspense>
            <ContactShadows position={[0, -2.5, 0]}/>
        </Canvas>
      </div>
    </div>
  );
};

export default ProductPage;
