// src/components/Hero.tsx
'use client';

import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Gluten Free Muesli",
    flavor: "Blueberry + Cranberry + Strawberry",
    image: "/product1.jpg",
    description: "Each serving delivers wholesome nutrition through our signature blend of gluten-free oats, coconut flakes, and superfood seeds, creating a versatile base that can be enjoyed with milk, yogurt, or as a topping - completely free from artificial preservatives and refined sugars.",
    price: "300g",
    features: ["High Fiber", "Vegan", "Protein Source"]
  },
  {
    id: 2,
    name: "Gluten Free Granola", 
    flavor: "Original Mix",
    image: "/product2.jpg",
    description: "Our gluten-free rolled oats are perfectly toasted with antioxidant-rich cherries and raw cacao nibs, enhanced with protein-packed almonds and omega-3 flax seeds for a nutritionally complete breakfast experience.",
    price: "300g",
    features: ["Oven Baked", "No Added Sugar", "Artisanal"]
  },
  {
    id: 3,
    name: "Gluten Free Cookies",
    flavor: "High Fiber Blend",
    image: "/product3.jpg", 
    description: "These artisanal cookies are baked with gluten-free oat flour and sweetened exclusively with evaporated apple juice, creating a tender texture that's enhanced with extra virgin olive oil instead of butter for a lighter, more digestible treat.",
    price: "300g",
    features: ["High Protein", "Organic", "Energy Boost"]
  },
  {
    id: 4,
    name: "Granola Bites",
    flavor: "Mixed Berries",
    image: "/product4.jpg",
    description: "Perfectly portioned for on-the-go snacking, these granola bites deliver the same artisanal quality as our full size granola, with each piece offering a satisfying crunch and balanced nutrition from wholesome gluten free ingredients",
    price: "300g",
    features: ["Antioxidants", "Mixed Berries", "Organic Oats"]
  }
];

const productVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      opacity: { duration: 0.5 },
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      opacity: { duration: 0.5 },
    }
  })
};

const infoVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: 0.2, 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

const Hero = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);

  // Preload all images
  useEffect(() => {
    products.forEach((product) => {
      const img = new window.Image();
      img.src = product.image;
      img.onload = () => {
        setImagesLoaded(prev => ({
          ...prev,
          [product.id]: true
        }));
      };
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleProductChange = useCallback((newIndex: number) => {
    setIsPaused(true);
    setDirection(newIndex > currentProduct ? 1 : -1);
    setCurrentProduct(newIndex);
    
    // Resume auto-rotation after manual selection
    setTimeout(() => setIsPaused(false), 8000);
  }, [currentProduct]);

  const nextProduct = () => {
    handleProductChange((currentProduct + 1) % products.length);
  };

  const prevProduct = () => {
    handleProductChange((currentProduct - 1 + products.length) % products.length);
  };

  const currentProductData = products[currentProduct];

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center ">
        
      {/* Gradient Overlay */}
     <div className="absolute inset-0 bg-gradient-to-r from-[#D2D82E]/30 via-[#D64CA8]/30 to-[#6D2D91]/30"></div>

      
      <div className="w-full h-full relative p-8 flex flex-col md:flex-row z-10 items-center justify-center max-w-7xl mx-auto">
        
        {/* Left side - 3D Product Display */}
  <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">
  <AnimatePresence custom={direction} mode="wait">
    <motion.div
      key={`product-${currentProductData.id}`}
      variants={productVariants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={direction}
      className="absolute inset-0 flex items-center justify-center"
    >
      <motion.div
        initial={{ rotateY: -30, scale: 0.8, opacity: 0 }}
        animate={{ rotateY: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
        className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
        style={{
          animation: 'float 6s ease-in-out infinite',
        }}
      >
        <Image
          src={currentProductData.image}
          alt={currentProductData.name}
          fill
          sizes="(max-width: 768px) 400px, (max-width: 1200px) 600px, 800px"
          className="object-contain drop-shadow-2xl"
          priority
          quality={100}
        />
      </motion.div>
    </motion.div>
  </AnimatePresence>
</div>


        {/* Right side - Product Info */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-4 md:px-12 mt-8 md:mt-0">
        
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${currentProductData.id}`}
              variants={infoVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 md:space-y-6 text-center md:text-left"
            >
              {/* Brand Tag */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="inline-block"
              >
               
              </motion.div>
              
              {/* Product Name */}
             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
  <span className="block font-volkswagen text-yellow-300 drop-shadow-lg">
    MOM'S
  </span>
  <span className="text-white drop-shadow-lg">{currentProductData.name}</span>
</h1>
{/* Description */}
<p className="text-lg text-gray-100 leading-relaxed max-w-lg mx-auto md:mx-0 drop-shadow-sm">
  {currentProductData.description}
</p>
            

              {/* Weight & CTA */}
              <div className="flex items-center space-x-6 justify-center md:justify-start pt-4">
              
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Carousel Controls */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          
          <button 
            onClick={prevProduct}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-10 h-5 text-black " />
          </button>

          {/* Product Thumbnails */}
          <div className="flex space-x-3">
            {products.map((product, index) => (
              <button
                key={`thumb-${product.id}`}
                onClick={() => handleProductChange(index)}
                className={`cursor-pointer transition-all duration-500 ${
                  index === currentProduct 
                    ? 'scale-125 opacity-100' 
                    : 'scale-100 opacity-70 hover:opacity-90'
                }`}
                aria-label={`View ${product.name}`}
              >
                <div className={`w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 transition-all duration-300 ${
                  index === currentProduct ? 'border-yellow-300' : 'border-white/30'
                }`}>
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button 
            onClick={nextProduct}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Next product"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;