import React from 'react';

const StarterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 gap-10">
      <div className="max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Gerpsi Bike Dual Motore</h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
          Delivery in Italia and Switzerland
        </p>
        
        <div className="flex justify-center mb-4">
          <img src="https://ae01.alicdn.com/kf/Sa6de0af0e8aa4921b731331af5a3b4f7o.jpg" alt="Gerpsi Bike Dual Motore" className="rounded-lg shadow-md" />
        </div>


        
        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-center">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Tool</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Description</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Gerpsi Bike Dual Motore</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">High-performance bike with dual motors for enhanced speed and efficiency</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">$800</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Motorbike</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Ideal for longer distances</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">$1500</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Delivery Bag</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Keeps food warm and secure</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">$50</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">GPS Device</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">For efficient route planning</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">$200</td>
            </tr>
            <tr className="bg-gray-200 dark:bg-gray-700 font-bold">
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Total</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2"></td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">
                {[
                  800, // Gerpsi Bike Dual Motore
                  1500, // Motorbike
                  50, // Delivery Bag
                  200  // GPS Device
                ].reduce((acc, amount) => acc + amount, 0)}$
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Purchase Links</h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
          Links to purchase the Gerpsi Bike Dual Motore
        </p>
      </div>
    </div>
  );
};

export default StarterPage;
