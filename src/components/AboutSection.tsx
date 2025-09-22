'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Leaf, Heart, Award, Users } from 'lucide-react';

const AboutSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Plant-Based Pursuit",
      description: "We are in pursuit of additive-free, plant-based food that nourishes naturally"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Artisanal Process", 
      description: "Small batch oven-baked process that maintains traditional craftsmanship"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Pure Ingredients",
      description: "Evaporated apple juice instead of refined sugar, extra virgin olive oil for roasting"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Values",
      description: "No preservatives, sweeteners, or artificial aromas - just wholesome nutrition"
    }
  ];

  const ingredients = [
    { name: "Wheat Germ", benefit: "One of nature's most valuable foods" },
    { name: "Evaporated Apple Juice", benefit: "Natural sweetener instead of refined sugar" },
    { name: "Extra Virgin Olive Oil", benefit: "Heart-healthy roasting medium" },
    { name: "Fruits, Nuts & Seeds", benefit: "Increased richness and nutrition" }
  ];

  const servingSuggestions = [
    "With milk for classic breakfast",
    "With yoghurt for probiotics", 
    "With ice cream as dessert",
    "With fresh fruits of your choice",
    "By the handful as we prefer"
  ];

  if (!mounted) {
    return (
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-64 bg-gray-200 rounded"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
 const images = [
    '/about1.jpg',
    


    '/about4.jpg',
    '/bg3.jpg',
    '/about2.jpg',
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 via-white to-purple-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Vision
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left - Image */}
           <div className="grid grid-cols-2 gap-4">
            {images.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden h-48 md:h-64 relative">
                <Image 
                  src={src} 
                  alt="About Moms Natural Foods" 
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          {/* Right - Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Enriched with Nature's Best
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We increased the richness of the oat with fruits, nuts and seeds. 
                We used evaporated apple juice instead of refined sugar and added 
                one of the most valuable foods in nature: <strong>wheat germ</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We roasted our granola using <strong>extra virgin olive oil</strong>. 
                We never use any preservatives, sweeteners, or artificial aromas in our granola.
              </p>
            </div>

            {/* Key Ingredients */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Premium Ingredients</h4>
              <div className="grid grid-cols-1 gap-3">
                {ingredients.map((ingredient, index) => (
                  <div
                    key={ingredient.name}
                    className="flex items-start space-x-3 p-3 bg-white/70 backdrop-blur-sm rounded-lg border border-purple-100"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium text-gray-800">{ingredient.name}: </span>
                      <span className="text-gray-600">{ingredient.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Serving Suggestions */}
        <div className="bg-gradient-to-r from-purple-100 to-yellow-100 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">How to Enjoy</h3>
            <p className="text-lg text-gray-700">
              You may prepare it in various delicious ways, or as we often prefer...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {servingSuggestions.map((suggestion, index) => (
              <div
                key={suggestion}
                className="flex items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{suggestion}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;