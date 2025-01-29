import React from 'react';
import { FocusCards } from './ui/focus-cards';

function TechStack() {
  return (
    <section id='techstack' className="py-10">
      <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 dark:text-white mb-12'>
        Tech Stack
      </h2>
      <FocusCards
        cards={[
          {
            title: 'Frontend',
            
            icons: [
              { src: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png', alt: 'React' },
              { src: 'https://cdn.iconscout.com/icon/free/png-512/typescript-3521774-2945272.png', alt: 'TypeScript' },
              { src: '/images/html.jpg', alt: 'HTML' },
              { src: '/images/css.png', alt: 'CSS' },
              { src: '/images/tailwind.png', alt: 'Tailwind' },
              { src: '/images/javascript.png', alt: 'Javascrpt' },
              { src: '/images/next.jpg', alt: 'Next.js' },
             
            ],
          },
          {
            title: 'Backend',
            icons: [
              { src: '/images/nodejs.jpg', alt: 'Node.js' },
              { src: '/images/expressjs.png', alt: 'Express' },
              { src: '/images/mongodb.png', alt: 'MongoDB' },
              { src: '/images/postgress.png', alt: 'Postgress' },
              { src: '/images/sql.jpg', alt: 'MySql' },

            ],
          },
        ]}
      />
    </section>
  );
}

export default TechStack;
