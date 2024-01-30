import React from 'react'
import ProductCard from '../../components/ProductCard';
import Hero from '../../components/Hero';
import { Parallax } from 'react-scroll-parallax';


function Home() {
  return (
    <div>
      <Parallax y={[-20, 20]} tagOuter="figure">
        <Hero />
      </Parallax>
      <Parallax y={[-30, 30]} tagOuter="figure">
        <ProductCard />
      </Parallax>
    </div>
  )
}

export default Home;