import { Suspense, useState } from 'react';
import './Product.css'; // Make sure this path is correct based on your project structure
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, Stats } from '@react-three/drei'
import ReviewCard from './ReviewCard';
import Watch from './components/models/Watch'
import Necklace from './components/models/Necklace'
import Ring from './components/models/Ring'
import Stack from '@mui/material/Stack'
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { Leva, useControls } from "leva";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const environment = import.meta.env.VITE_ENV;
  const { productName } = useParams();
  const products = [
    {
      name: 'Gothic Pendant Necklace',
      description: 'This is a beautiful gothic pendant necklace. It is built with high-quality materials.',
      price: '$100',
    },
    {
      name: 'Ancient Ring',
      description: 'This is a beautiful ring with agate jade.',
      price: '$500',
    },
    {
      name: 'Patek Phillip Watch',
      description: 'This is a beautiful watch from Patek Phillip brand. It is built with high-quality materials and offers exceptional performance.',
      price: '$200',
    },
  ]

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { intensity, color, focusLight, background } = useControls({
    intensity: {
      value: 1,
      min: 0,
      max: 3,
      step: 0.05
    },
    color: "#fff",
    focusLight: {
      value: 3,
      min: 2,
      max: 4,
      step: 0.05
    },
    background: "#fff",
  });

  return (
    <div className="product-page">
      <div className="product-part">
        <div className='product-model-container'>
          <IconButton aria-label="expand" className='expand-button' onClick={handleOpen}>
            <AspectRatioIcon />  
          </IconButton>
          <Leva titleBar={{ title: "Ambient Light" }} className='leva' hidden/>
          <Canvas>
              <ambientLight intensity={1}/>
              <pointLight position={[0, 0.8, 1]} intensity={4} />
              <OrbitControls maxDistance={5.5} minDistance={1} />
              <Suspense fallback={null}>
                  {
                    productName === 'watch' ? (
                      <Watch />
                    )
                    : (
                      productName === 'ring' ? <Ring/> : <Necklace />
                    )
                  }
              </Suspense>
              <Environment preset='sunset' />
              <ContactShadows position={[0, -2.5, 0]}/>
              {
                environment === 'development' &&
                <Stats/>
              }
          </Canvas>
        </div>
        <div className="product-info">
          <h1 className="product-name">
            {
              productName === 'watch' ? (
                products[2].name
              )
              : (
                productName === 'ring' ? products[1].name : products[0].name
              )
            }
          </h1>
          <div className='discount'>Discount</div>
          <h2 className="product-price">
          {
              productName === 'watch' ? (
                products[2].price
              )
              : (
                productName === 'ring' ? products[1].price : products[0].price
              )
            }
          </h2>
          <p className="product-description">
          {
              productName === 'watch' ? (
                products[2].description
              )
              : (
                productName === 'ring' ? products[1].description : products[0].description
              )
            }
          </p>
          <button className='add-button'>Add to cart</button>
          {/* Add more information like Add to Cart button, reviews, etc., if needed */}
        </div>
      </div>
      <div className='reviews-part'>
        <h2 className='reviews-header'>Latest reviews</h2>
        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
        </Stack>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <div className='product-model-container-full'>
            <Leva titleBar={{ title: "Light" }} className='leva'/>
            <Canvas>
                <color attach="background" args={[background]} />
                <ambientLight intensity={intensity} color={color}/>
                <pointLight position={[0, 0.8, 1]} intensity={focusLight} />
                <OrbitControls maxDistance={6.5} minDistance={1.5}/>
                <Suspense fallback={null}>
                {
                    productName === 'watch' ? (
                      <Watch />
                    )
                    : (
                      productName === 'ring' ? <Ring/> : <Necklace />
                    )
                  }
                </Suspense>
                <Environment preset='city' />

                <ContactShadows position={[0, -2.5, 0]}/>
                {/* <Stats className='stats' /> */}
            </Canvas>
          </div>
      </Modal>
    </div>
  );
};

export default ProductPage;
