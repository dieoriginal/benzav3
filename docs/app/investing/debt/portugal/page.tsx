import React from 'react';
import Image from 'next/image';

const StarterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center mb-4">
          <Image src="/path/to/your/image.jpg" alt="Description of Image" width={500} height={500} className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default StarterPage;
