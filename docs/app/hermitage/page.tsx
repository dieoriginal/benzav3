import React from 'react';

const SanctumOfObservation: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-9xl font-extrabold text-center mb-14 text-gray-900 dark:text-gray-100 italic tracking-tight mt-20">The Sanctum of Observation</h1>

      <div className='flex flex-col gap-10 border-2 border-green-600 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>YouTube Videos</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">A collection of insightful and educational videos.</h6>
        <div className='flex flex-row gap-10'>
          <iframe width="560" height="315" src="https://www.youtube.com/watch?v=xAlaZoQfyis" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://youtu.be/7NQooQsFQXM?si=TZjyrtWetEcDdPye" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
        


      {/* The Forge Corner */}
      <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>The Forge Corner</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">Where raw ideas and components are built, tinkered with, and refined.</h6>
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            A sturdy workbench with Raspberry Pi projects, testing kits, tool racks, soldering equipment, and storage for electronics parts.
          </h2>
        </div>

        <div className='flex flex-row gap-10'>
        <div className="flex justify-center mb-4">
          <img src="https://pentaxloupes.com/images/Pentax_website_pics_2.png" alt="Pentax Loupes" className="rounded-lg shadow-md" />
        </div>
        </div>
      </div>

      <hr className='border-2 border-gray-300'/>

      {/* Cabinet of Curiosities */}
      <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>Cabinet of Curiosities</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">A collection of specimens, samples, or intellectual artifacts that inspire you.</h6>
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            Specimen jars, magnifiers, microscopes, antique or modern scientific instruments, books on rare subjects, and curated items that speak to your personal interests.
          </h2>
        </div>

      <div className='flex flex-col gap-10 border-2 border-red-600 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>The Glasses Collection</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">A curated selection of eyewear that combines style and functionality.</h6>
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            Explore a variety of glasses, from vintage spectacles to modern frames, each chosen for their unique design and quality. Perfect for enhancing your vision and making a fashion statement.
          </h2>
        </div>
      </div>

      </div>

      <hr className='border-2 border-gray-300'/>

      {/* The Observatory Hub */}
      <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>The Observatory Hub</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">Your digital command center and visualization station.</h6>
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            Dual or triple monitor setup, high-resolution screens for coding, a server stack for processing power, monitoring software, data feeds, cameras, and observatory-like equipment for observation projects.
          </h2>
        </div>
      </div>

      <hr className='border-2 border-gray-300'/>

      {/* Inner Sanctum Nook */}
      <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>Inner Sanctum Nook</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">An undisturbed writing and thinking area.</h6>
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            A minimalist, comfortable desk setup with notebooks, a writing lamp, high-quality pens, and a few essential reference books. Consider adding soundproofing features for ultimate quiet.
          </h2>
        </div>
      </div>

      <hr className='border-2 border-gray-300'/>

      {/* The Planning Board */}
      <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>The Planning Board</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">Your "thinking wall" for organizing projects and visualizing workflows.</h6>
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            Moveable whiteboards, cork boards, or modular walls with sticky notes and erasable markers. Include pivot boards for sections devoted to specific projects or areas of study.
          </h2>
        </div>
      </div>

      <hr className='border-2 border-gray-300'/>

      {/* Hermitage Library */}
      <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>Hermitage Library</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">A concentrated library space, well-organized to house essential books and research materials.</h6>
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            Sturdy, tall bookshelves with neatly arranged books, sorted by subject. Add labels or color codes for easy access and include hidden shelving or drawers for delicate or rare materials.
          </h2>
        </div>
      </div>

      <hr className='border-2 border-gray-300'/>

      <div className='flex flex-row gap-10 mb-5 mr-5 ml-5 mt-5'>
      <div className='flex flex-col gap-10 border-2 border-purple-600 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>Workbench</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">Dedicated to hardware projects, from Raspberry Pi setups to building prototypes and electronics.</h6>
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            A sturdy workbench with Raspberry Pi projects, testing kits, tool racks, soldering equipment, and storage for electronics parts.
          </h2>
        </div>
      </div>

      <div className='flex flex-col gap-10 border-2 border-yellow-600 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>Specimen Cabinet</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">For keeping biological or scientific samples in a clean, well-organized way.</h6>
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            Specimen jars, magnifiers, microscopes, and other scientific instruments to keep your samples well-organized and accessible.
          </h2>
        </div>
      </div>

      <div className='flex flex-col gap-10 border-2 border-orange-600 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>Planning Board</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">Large moving boards or whiteboards for mind-mapping, project flows, or technical sketches.</h6>
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            A versatile planning board to visualize your ideas, map out projects, and sketch technical diagrams.
          </h2>
        </div>
      </div>

      <div className='flex flex-col gap-10 border-2 border-pink-600 rounded-lg p-10'>
        <h1 className='text-6xl font-extrabold text-center text-gray-900 dark:text-gray-100'>Research Nook</h1>
        <h6 className="text-4xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">An archive or shelf space for specific types of reference materials, depending on your field.</h6>
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            A dedicated space for your reference materials, books, and research papers, organized for easy access.
          </h2>
        </div>
      </div>
      </div>

    </div>
  );
};

export default SanctumOfObservation;
