import React from 'react';
import Carousel from './carousels';
import { images } from '../assets/images/images';

const items = [
  { image: images.ashi, alt: 'Slide 1' },
  { image: images.eric, alt: 'Slide 2' },
  { image: images.glory, alt: 'Slide 3' },
];

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Tailwind Carousel</h1>
      <Carousel items={items} />
    </div>
  );
};

export default App;
