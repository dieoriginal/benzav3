'use client';
import React, { useState, forwardRef } from 'react';
import { TransitionPanel } from '@/components/core/transition-panel';

export const AffordableHousing = forwardRef((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = [
    
    {
     
      additionalContent: (
        <div className='text-center'>
          <pre className='text-center'>
            <code className='text-center'>
              
              <div className='text-9xl font-bold'>Aveiro</div>
              <div className='text-2xl font-bold'>100 EUR per month</div>

              <div className='flex flex-row gap-1 mt-3 items-center justify-center text-center'>
                <div className="bg-red-700 text-white p-2 rounded-md">Porto</div>
                <div className="bg-yellow-700 text-white p-2 rounded-md">Durres</div>
                <div className="bg-yellow-700 text-white p-2 rounded-md">Shkodra</div>
                <div className="bg-green-700 text-white p-2 rounded-md">Vlora</div>
                <div className="bg-green-700 text-white p-2 rounded-md">Kukes</div>
              </div>
            

            


            
             
             </code>
             </pre>
        </div>
      ),
    },
  ];

  return (
    <div ref={ref}>
      {ITEMS.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <h3>{item.subtitle}</h3>
          <p>{item.content}</p>
          {item.additionalContent && item.additionalContent}
        </div>
      ))}
    </div>
  );
});
