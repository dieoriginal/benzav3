import React from 'react';

const LibraryPage: React.FC = () => {
  const categories = {
    Completed: [
      { 
        title: "Being and Time", 
        author: "Martin Heidegger", 
        genre: "Philosophy", 
        cover: "https://example.com/cover1.jpg",
        buyLink: "https://example.com/buy1",
        pdfLink: "https://example.com/pdf1",
        year: 1927,
        description: "A fundamental text in existential philosophy.",
        whyRead: "Essential for understanding existentialism."
      },

    ],
    Wishlist: [
      { 
        title: "he Journey of Man: A Genetic Odyssey", 
        author: "Spencer Wells", 
        genre: "History", 
        cover: "https://en.wikipedia.org/wiki/File:The_Art_of_War_Running_Press.jpg",
        buyLink: "https://example.com/buy3",
        pdfLink: "https://example.com/pdf3",
        year: "2003",
        description: "A genetic journey through human history.",
        whyRead: "Timeless strategies applicable in various fields."
      },
      {
        title: "Africa's Great Civilizations",
        author: "John Prendergast, PBS",
        genre: "History",
        cover: "https://example.com/cover4.jpg",
        buyLink: "https://example.com/buy4",
        pdfLink: "https://example.com/pdf4",
        year: "2017",
        description: "A journey through the human body.",
        whyRead: "Understanding the human body."
      },
      {
        title: "Mankind: The Story of All of Us",
        author: "History Channel",
        genre: "History",
        cover: "https://example.com/cover4.jpg",
        buyLink: "https://example.com/buy4",
        pdfLink: "https://example.com/pdf4",
        year: "2011",
        description: "A journey through the human body.",
        whyRead: "Understanding the human body."
      },
      {
        title: "Human: The World Within",
        author: "Netflix",
        genre: "Science",
        cover: "https://example.com/cover4.jpg",
        buyLink: "https://example.com/buy4",
        pdfLink: "https://example.com/pdf4",
        year: "2022",
        description: "A journey through the human body.",
        whyRead: "Understanding the human body."
      },

    ],
    Reading: [
      { 
        title: "The 48 Laws of Power", 
        author: "Robert Greene", 
        genre: "Seduction", 
        cover: "https://example.com/cover5.jpg",
        buyLink: "https://example.com/buy6",
        pdfLink: "https://example.com/pdf6",
        year: 1998,
        description: "A guide to gaining and maintaining power.",
        whyRead: "Understanding power dynamics in society."
      },
     
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100 mt-10">Documentaries</h1>
      {Object.entries(categories).map(([category, books]) => (
        <div key={category} className="w-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg mb-6 relative">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-lg opacity-50" style={{ margin: '10px' }}></div>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 relative z-10">{category}</h2>
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600 text-center relative z-10">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Cover</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Title</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Author</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Genre</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Buy Link</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">PDF Link</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Year</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Description</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">Why Read It</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">
                    <img src={book.cover} alt={`${book.title}`} className="w-32 h-48 object-cover" /> {/* Increased size */}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100 font-extrabold">{book.title}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">{book.author}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">{book.genre}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">
                    <a href={book.buyLink} className="text-blue-500 hover:underline">Buy</a>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">
                    <a href={book.pdfLink} className="text-blue-500 hover:underline">PDF</a>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">{book.year}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">{book.description}</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-2 text-gray-900 dark:text-gray-100">{book.whyRead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default LibraryPage;
