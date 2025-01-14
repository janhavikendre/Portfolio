import React from 'react';
import { ThreeDCardDemo } from './ui/ThreeDCardDemo';

function Grid() {
  return (
    <section id="projects" className="py-10">
      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 dark:text-white mb-8'>
        Projects
      </h2>
      <ThreeDCardDemo />
    </section>
  );
}

export default Grid;
