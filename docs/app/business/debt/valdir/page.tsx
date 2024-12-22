import React from 'react';

const StarterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="flex justify-center mb-4">
          <img src="" alt="" className="rounded-lg shadow-md" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Valdir Benza</h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
          Everything I owe to Valdir Benza
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
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Última Renda</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Rehearsal Box</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">$100</td>
            </tr>
           
            <tr className="bg-gray-200 dark:bg-gray-700 font-bold">
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Total</td>
              <td className="border border-gray-300 dark:border-gray-600 p-2"></td>
              <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">
                {[
                  100, // Última Renda
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
