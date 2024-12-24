import React from 'react';
import Carousel from '../components/customCarousel/carousels'
import { images } from '../assets/images/images';

const items = [
  { image: images.ashi, alt: 'Slide 1' },
  { image: images.eric, alt: 'Slide 2' },
  { image: images.glory, alt: 'Slide 3' },
];

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-950">
      <h1 className="text-2xl font-bold mb-6">Tailwind Carousel</h1>
      <div className='w-[80vw] relative'>
      <Carousel  />
      </div>
     
    </div>
  );
};

export default App;
