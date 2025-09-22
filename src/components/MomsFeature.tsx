// components/Hero.tsx
'use client';
import ProductFeature from './ProductFeature';


const MomsFeature = () => {
  return (
    <section className="hero-pattern py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
  <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
    <span className="text-gray-800">Why</span>{' '}
    <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent font-volkswagen">
      MOM&apos;S Natural Foods?
    </span>
  </h1>

  <div className="max-w-2xl">
    <p className="text-lg text-gray-700 leading-relaxed">
      We make MOM&apos;S natural foods for people that won&apos;t compromise between healthy and delicious. We want our product to be affordable and widely available for everyone. All ingredients that we use could be easily read, understood, and pronounced. Mom&apos;s doesn&apos;t have any chemical additives, coloring, flavoring, and sugar. We believe that it is very important to read the ingredients of the product carefully before you buy one. So we created types of granola, muesli & cookie as simple as, delicious, and as original as prepared by mothers.
    </p>
  </div>
</div>

        {/* Animated Product Features */}
        <div className="md:w-1/2 flex justify-center relative">
          <ProductFeature />
        </div>
      </div>
      
    </section>
  );
};

export default MomsFeature;