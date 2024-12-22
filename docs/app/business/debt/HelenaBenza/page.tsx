import React from 'react';

const StarterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="flex justify-center mb-4">
          <img src="https://i1.sndcdn.com/avatars-HLLfDqBvQYg6UwW7-qROu8w-t500x500.jpg" alt="" className="rounded-lg shadow-md" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Helena Benza</h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
          Everything I owe to Helena Benza
        </p>
        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-center">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Handout</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Description</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Glasses</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Rehearsal Box</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">$55</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">First Rent</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Rehearsal Box</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">$200</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Leroy Merlin</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Materiais de Construção</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">$100</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Shein</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Event Wardrobe</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">$60</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Apollo Solo</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Last Month Payment</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">$150</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Portugal to Italy</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Last Month in Portugal</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">$100</td>
            </tr>
            <tr className="bg-gray-200 dark:bg-gray-700 font-bold">
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Total</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2"></td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">
                {[
                  200, // Caução
                  200, // First Rent
                  100, // Leroy Merlin
                  60,  // Shein
                  150, // Apollo Solo
                  100  // Portugal to Italy
                ].reduce((acc, amount) => acc + amount, 0)}€
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StarterPage;
