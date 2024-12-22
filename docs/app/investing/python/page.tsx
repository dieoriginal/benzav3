import React from 'react';

const StarterPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen bg-red-700 dark:bg-black-900">



      <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10 gap-3'>

       
       <h1 className='text-9xl font-extrabold text-center text-gray-900 dark:text-gray-100'><span className='italic'>Alpha</span>Vantage</h1>
          
       
        <div className='flex flex-col gap-6'>

        <h1 className='text-9xl font-extrabold text-center text-gray-900 dark:text-gray-100'><span className='italic'>Python</span>APIs</h1>
    
          <ol className='list-decimal list-inside text-gray-700 dark:text-gray-300'>
            <li><a href="https://www.alphavantage.co/documentation/#time-series-data" className='text-blue-500 hover:underline'>Time Series Data</a></li>
            <li><a href="https://www.alphavantage.co/documentation/#technical-indicators" className='text-blue-500 hover:underline'>Technical Indicators</a></li>
            <li><a href="https://www.alphavantage.co/documentation/#sector-performance" className='text-blue-500 hover:underline'>Sector Performance</a></li>
            <li><a href="https://www.alphavantage.co/documentation/#forex" className='text-blue-500 hover:underline'>Foreign Exchange (Forex)</a></li>
            <li><a href="https://www.alphavantage.co/documentation/#cryptocurrencies" className='text-blue-500 hover:underline'>Cryptocurrencies</a></li>
            <li><a href="https://www.alphavantage.co/documentation/#digital-currency" className='text-blue-500 hover:underline'>Digital & Physical Currency</a></li>
            <li><a href="https://www.alphavantage.co/documentation/#stock-screener" className='text-blue-500 hover:underline'>Stock Screener</a></li>
            <li><a href="https://www.alphavantage.co/documentation/#earnings" className='text-blue-500 hover:underline'>Earnings Calendar</a></li>
            <li><a href="https://www.alphavantage.co/documentation/#ipo" className='text-blue-500 hover:underline'>IPO Calendar</a></li>
            <li><a href="https://www.alphavantage.co/documentation/#news-sentiment" className='text-blue-500 hover:underline'>News & Sentiment</a></li>
          </ol>
        </div>



       

        


        <hr className='border-2 border-gray-300'/>

       


         <hr className='border-2 border-gray-300'/>

        <div className='flex flex-row gap-4'>
     
        


  
  </div>


        <hr className='border-2 border-gray-300'/>

        </div> {/* Closing the div element here */}

        {/* body language */}


      </div>
    


  );
};

export default StarterPage;
   