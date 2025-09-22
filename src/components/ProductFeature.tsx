// components/animations/hero/product-features.tsx
'use client';

import { ReactNode } from "react";
import { HTMLMotionProps, motion, useSpring, useTransform } from "framer-motion";
import Image from 'next/image';


interface FeatureCardProps extends HTMLMotionProps<"div"> {
  feature: {
    title: ReactNode;
    category: string;
    imageUrl: string;
  };
  zIndexOffset?: number;
}

function FeatureCard({ feature, className, zIndexOffset = 0, ...props }: FeatureCardProps) {
  const { title, category, imageUrl } = feature;
  const springValue = useSpring(0, {
    bounce: 0,
  });
  const zIndex = useTransform(springValue, (value) => +Math.floor(value * 10) + 10 + zIndexOffset);
  const scale = useTransform(springValue, [0, 1], [1, 1.1]);

  const content = (
    <>
   <Image 
  src={imageUrl} 
  alt={`${category} - ${title}`}
  fill
  className="object-cover rounded-xl" 
  sizes="(max-width: 768px) 100vw, 50vw"
/>
      <div className="z-10 flex h-full w-full flex-col gap-2 bg-gradient-to-t from-zinc-800/40 from-15% to-transparent p-3 rounded-xl">
        <small className="inline w-fit rounded-xl bg-orange-950 bg-opacity-50 px-2 py-1 text-xs font-medium leading-none text-white">
          {category}
        </small>

        <div className="flex-1" />
        <h3 className="rounded-xl bg-blue-950 bg-opacity-30 p-3 text-base font-bold leading-none text-white backdrop-blur-sm">
          {title}
        </h3>
      </div>
    </>
  );

  const containerClassName = `relative flex h-64 w-48 flex-col overflow-hidden rounded-2xl shadow-none transition-shadow duration-300 ease-in-out hover:shadow-xl ${className || ''}`;

  return (
    <>
      <motion.div
        onMouseEnter={() => springValue.set(1)}
        onMouseLeave={() => springValue.set(0)}
        style={{
          zIndex,
          scale,
        }}
        className={`${containerClassName} hidden sm:flex`}
        {...props}
      >
        {content}
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0, transition: { duration: 0.5 } }}
        className={`${containerClassName} flex sm:hidden`}
      >
        {content}
      </motion.div>
    </>
  );
}

const ProductFeature = () => {
  const cardWidth = 48 * 4; // w-48 x 4
  const angle = 6;
  const yOffset = 30;

  return (
    <section className="flex w-full flex-col items-center gap-4 bg-orange-50 bg-gradient-to-r from-purple-100 to-yellow-100 rounded-2xl border border-purple-200">
      <motion.header
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        className="flex max-w-md flex-col items-center gap-2 text-center"
      >
       
      </motion.header>
      <div className="relative flex w-full flex-wrap justify-center gap-8 px-4 py-12 sm:flex-row sm:gap-0">
        <FeatureCard
          feature={{
            category: "Fruits",
            imageUrl: "/p1.jpg",
            title: "Granola",
          }}
          initial={{
            x: cardWidth,
            y: yOffset,
            opacity: 0,
            rotate: 0,
            scale: 0.9,
          }}
          animate={{
            x: yOffset,
            y: 10,
            opacity: 1,
            scale: 0.95,
            rotate: -angle,
            transition: {
              type: "spring",
              delay: 0.8,
            },
          }}
        />

        <FeatureCard
          feature={{
            category: "Vegetables",
            title: " Bites",
            imageUrl: "/product33.jpg",
          }}
          initial={{
            y: yOffset,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 0.4,
            },
          }}
          zIndexOffset={1}
        />

        <FeatureCard
          feature={{
            category: "Fruits/Grains",
            title: "Cookie",
            imageUrl: "/p4.jpg",
          }}
          initial={{
            x: -cardWidth,
            y: yOffset,
            opacity: 0,
            rotate: 0,
            scale: 0.9,
          }}
          animate={{
            x: -yOffset,
            y: 10,
            opacity: 1,
            rotate: angle,
            scale: 0.95,
            transition: {
              type: "spring",
              delay: 0.6,
            },
          }}
        />
      </div>
    </section>
  );
}
export default ProductFeature;