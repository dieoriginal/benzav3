"use client";

import React, { useState } from 'react';

// Main component for the Starter Page
const StarterPage: React.FC = () => {
  const [selectedMarket, setSelectedMarket] = useState(''); // State for selected market

  const platforms = [
    {
      name: "Barchart",
      market: "Futures",
      type: "Charting",
      mission: "To get latest highest volume market.",
      description: "Barchart offers futures data, charts, and analysis tools.",
      signupLink: "https://www.barchart.com/futures",
      researchLink: "https://www.barchart.com/futures"
    },
    {
      name: "ARK Funds",
      market: "Stocks",
      type: "Investing Platform",
      mission: "To deliver long-term growth through innovation.",
      description: "ARK Funds provides investment opportunities in disruptive innovation.",
      signupLink: "https://www.ark-funds.com/portfolio",
      researchLink: "https://www.ark-funds.com/how-to-invest#hti_ind_blocks"
    },
    {
      name: "Nasdaq",
      market: "Stocks",
      type: "Indicator",
      mission: "To provide market-leading data and insights.",
      description: "Nasdaq offers comprehensive stock market data and analysis.",
      signupLink: "https://www.nasdaq.com/market-activity/stocks/msft",
      researchLink: "https://www.nasdaq.com/market-activity/stocks/msft"
    },
    {
      name: "The Motley Fool",
      market: "Stocks",
      type: "Research",
      mission: "To make the world smarter, happier, and richer.",
      description: "The Motley Fool provides stock market research and investment advice.",
      signupLink: "https://www.fool.com/investing/how-to-invest/stocks/how-to-invest-in-figure-ai-stock/",
      researchLink: "https://www.fool.com/investing/how-to-invest/stocks/how-to-invest-in-figure-ai-stock/"
    },
    {
      name: "The Motley Fool - Semiconductors Stocks",
      market: "Longterm Investing",
      type: "Research",
      mission: "To make the world smarter, happier, and richer.",
      description: "The Motley Fool provides research on semiconductor stocks.",
      signupLink: "https://www.fool.com/investing/stock-market/market-sectors/information-technology/semiconductor-stocks/",
      researchLink: "https://www.fool.com/investing/stock-market/market-sectors/information-technology/semiconductor-stocks/"
    }
  ];

  // Filter platforms based on the selected market
  const filteredPlatforms = selectedMarket 
    ? platforms.filter(platform => platform.market === selectedMarket)
    : platforms;

  return (
    <div className="container border-[0.2mm] border-white rounded-lg m-9">
      <h1 className='font-extrabold text-9xl m-6 gap-0'>Platforms</h1>
      <select 
        value={selectedMarket} 
        onChange={(e) => setSelectedMarket(e.target.value)} 
        className="mb-4 p-2 border border-gray-300 rounded-lg"
      >
        <option value="">All Markets</option>
        <optgroup label="Futures">
          <option value="Futures">Charting</option>
          <option value="Futures Charting">Indicators</option>
          <option value="Futures">Data</option>
          <option value="Information Technology">Information Technology</option>
        </optgroup>
        <optgroup label="Stocks">
          <option value="Futures">Charting</option>
          <option value="Futures Charting">Indicators</option>
          <option value="Futures">Data</option>
          <option value="Information Technology">Information Technology</option>
        </optgroup>
        <option value="Information Technology">Information Technology</option>
      </select>
      <table className='border-[0.2mm] border-red-600 rounded-s-xl m-9'>
        <thead className='border-[0.2mm] border-red-600 rounded-full'>
          <tr >
            <th className='items-center justify-center'>Platform</th>
            <th className='items-center justify-center'>Financial Market</th>
            <th className='items-center justify-center'>Type</th>
            <th className='items-center justify-center'>Mission</th>
            <th className='items-center justify-center'>Description</th>
            <th className='items-center justify-center'>Link</th>
            <th className='items-center justify-center'>Research</th>
          </tr>
        </thead>
        <tbody className='border-[0.2mm] border-red-600 rounded-full gap-5'>
          {filteredPlatforms.map((platform, index) => (
            <tr key={index} className='border-[0.2mm] border-red-600 rounded-full'>
              <td className='border-[0.2mm] border-red-600 rounded-full items-center justify-center'>{platform.name}</td>
              <td  className='border-[0.2mm] border-red-600 rounded-full items-center justify-center'>{platform.market}</td>
              <td  className='border-[0.2mm] border-red-600 rounded-full items-center justify-center'>{platform.type}</td>
              <td className='m-9 justify-start items-start'>{platform.mission}</td>
              <td  className='border-[0.2mm] border-red-600 rounded-full items-center justify-center'>{platform.description}</td>
              <td  className='border-[0.2mm] border-red-600 rounded-full items-center justify-center m-6'><a href={platform.signupLink} target="_blank" rel="noopener noreferrer">Open</a></td>
              <td  className='border-[0.2mm] border-red-600 rounded-full items-center justify-center'><a href={platform.researchLink} target="_blank" rel="noopener noreferrer">Research</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StarterPage;
