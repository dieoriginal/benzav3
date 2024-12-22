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
      { 
        title: "The Lean Startup", 
        author: "Eric Ries", 
        genre: "Personal Development", 
        cover: "https://example.com/cover2.jpg",
        buyLink: "https://example.com/buy2",
        pdfLink: "https://example.com/pdf2",
        year: 2011,
        description: "A guide to building successful startups.",
        whyRead: "Provides a framework for innovation."
      },
    ],
    Wishlist: [ 
      { 
        title: "Bodoni’s Manuale Tipografico (1818)", 
        author: "Giambattista Bodoni", 
        genre: "Typography", 
        cover: "https://en.wikipedia.org/wiki/File:The_Art_of_War_Running_Press.jpg",
        buyLink: "https://example.com/buy3",
        pdfLink: "https://example.com/pdf3",
        year: "1818",
        description: "An ancient Chinese military treatise.",
        whyRead: "Timeless strategies applicable in various fields."
      },
      { 
        title: "Ibn al-Nadim", 
        author: "Ibn al-Nadim", 
        genre: "History", 
        cover: "https://en.wikipedia.org/wiki/File:The_Art_of_War_Running_Press.jpg",
        buyLink: "https://example.com/buy3",
        pdfLink: "https://example.com/pdf3",
        year: "1284",
        description: "History of the Arabic world.",
        whyRead: "Timeless strategies applicable in various fields."
      },

      { 
        title: "The Leper King and his Heirs: Baldwin IV and the Crusader Kingdom of Jerusalem", 
        author: "Bernard Hamilton", 
        genre: "History", 
        cover: "https://m.media-amazon.com/images/I/71Yd5iqRPRL._SL1360_.jpg",
        buyLink: "https://example.com/buy3",
        pdfLink: "https://example.com/pdf3",
        year: "1998",
        description: "History of the Crusader Kingdom of Jerusalem.",
        whyRead: "Understand Baldwin IV and the Crusader Kingdom of Jerusalem Bravery and leadership skills on battlefields."
      },
      
      { 
        title: "De Aetna" (1495)", 
        author: "Dante Alighieri", 
        genre: "Literature", 
        cover: "https://example.com/cover4.jpg",
        buyLink: "https://example.com/buy4",
        pdfLink: "https://example.com/pdf4",
        year: 1495,
        description: "A comprehensive overview of how we think.",
        whyRead: "Insights into human decision-making."
      },

      { 
        title: "Champ Fleury - https://www.youtube.com/watch?v=zQLdHLCc8B8", 
        author: "Geofroy Tory", 
        genre: "Typography", 
        cover: "https://example.com/cover4.jpg",
        buyLink: "https://www.amazon.it/Champ-Fleury-Geofroy-Tory/dp/0854092099?ref_=ast_author_dp",
        pdfLink: "https://www.amazon.it/Champ-Fleury-Geofroy-Tory/dp/1891788868?ref_=ast_author_dp",
        year: 1971,
        description: "History of the Crusader Kingdom of Jerusalem.",
        whyRead: "Understand Baldwin IV and the Crusader Kingdom of Jerusalem Bravery and leadership skills on battlefields."
      },

      { 
        title: "Champ Fleury Auquel Est Contenu L'Art Et Science De La Deue Et Vraye Proportio Des Lettres Attiques Quo Dit Autremet Lettres Antiques", 
        author: "Geofroy Tory", 
        genre: "Typography", 
        cover: "https://example.com/cover4.jpg",
        buyLink: "https://www.amazon.it/Champ-Fleury-Geofroy-Tory/dp/0854092099?ref_=ast_author_dp",
        pdfLink: "https://www.amazon.it/Champ-Fleury-Geofroy-Tory/dp/1891788868?ref_=ast_author_dp",
        year:  1529,
        description: "History of the Crusader Kingdom of Jerusalem.",
        whyRead: "Understand Baldwin IV and the Crusader Kingdom of Jerusalem Bravery and leadership skills on battlefields."
      },



      { 
        title: "Bodoni 1740-1813", 
        author: "Giambattista Bodoni", 
        genre: "Typography", 
        cover: "https://example.com/cover4.jpg",
        buyLink: "https://example.com/buy4",
        pdfLink: "https://example.com/pdf4",
        year: 1740,
        description: "A comprehensive overview of how we think.",
        whyRead: "Insights into human decision-making."
      },



      { 
        title: "Literature in the Vernacular (De Vulgari Eloquentia)", 
        author: "Dante Alighieri", 
        genre: "Literature", 
        cover: "https://m.media-amazon.com/images/I/51B1a4SgInL._SY522_.jpg",
        buyLink: "https://example.com/buy5",
        pdfLink: "https://example.com/pdf5",
        year: 1304,
        description: "A treatise on the use of vernacular language.",
        whyRead: "Foundation for modern Italian literature."
      },
      { 
        title: "The Jewish Enemy: Nazi Propaganda during World War II and the Holocaust Illustrated Edition", 
        author: "Jeffrey Herf", 
        genre: "History", 
        cover: "https://m.media-amazon.com/images/I/81dS4W6nEeS._SL1500_.jpg",
        buyLink: "https://example.com/buy8",
        pdfLink: "https://example.com/pdf8",
        year: 2018,
        description: "An analysis of Nazi propaganda and its impact during WWII.",
        whyRead: "Important for understanding the role of propaganda in history."
      },
      { 
        title: "The Jewish Jesus: How Judaism and Christianity Shaped Each Other", 
        author: "Peter Schäfer", 
        genre: "Religion", 
        cover: "https://m.media-amazon.com/images/I/81a6EtSOe0L._SL1500_.jpg",
        buyLink: "https://example.com/buy9",
        pdfLink: "https://example.com/pdf9",
        year: 2014,
        description: "Explores the relationship between Judaism and Christianity.",
        whyRead: "Provides insights into the historical context of both religions."
      },
      { 
        title: "The Fall of Rome: And the End of Civilization", 
        author: "Bryan Ward-Perkins", 
        genre: "History", 
        cover: "https://m.media-amazon.com/images/I/81+rSEz4USL._SL1500_.jpg",
        buyLink: "https://example.com/buy10",
        pdfLink: "https://example.com/pdf10",
        year: 2006,
        description: "An exploration of the fall of Rome and its implications.",
        whyRead: "Understanding the end of an era."
      },
      { 
        title: "Aldus Manutius: Printer and Publisher of Renaissance Venice", 
        author: "Martin Davies", 
        genre: "History", 
        cover: "https://m.media-amazon.com/images/I/914JrNU9iyL._SL1500_.jpg",
        buyLink: "https://example.com/buy11",
        pdfLink: "https://example.com/pdf11",
        year: 1995,
        description: "A look at the life and work of Aldus Manutius.",
        whyRead: "Insight into Renaissance publishing."
      },
      { 
        title: "Reformation: Europe's House Divided 1490-1700", 
        author: "Diarmaid MacCulloch", 
        genre: "History", 
        cover: "https://m.media-amazon.com/images/I/71Ed8++5KuL._SL1171_.jpg",
        buyLink: "https://example.com/buy12",
        pdfLink: "https://example.com/pdf12",
        year: 2004,
        description: "A comprehensive history of the Reformation in Europe.",
        whyRead: "Essential for understanding the religious transformations in Europe."
      },
      { 
        title: "A History of Christianity: The First Three Thousand Years", 
        author: "Diarmaid MacCulloch", 
        genre: "Religion", 
        cover: "https://m.media-amazon.com/images/I/91YUNmKI6GL._SL1500_.jpg",
        buyLink: "https://example.com/buy13",
        pdfLink: "https://example.com/pdf13",
        year: 2010,
        description: "An extensive overview of the history of Christianity.",
        whyRead: "Provides insights into the development of Christianity over millennia."
      },
    {
        title: "The Inheritance of Rome: Illuminating the Dark Ages 400-1000",
        author: "Chris Wickham",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/71gQZVdxuML._SL1200_.jpg",
        buyLink: "https://example.com/buy14",
        pdfLink: "https://example.com/pdf14",
        year: 2010,
        description: "Illuminates the Dark Ages and the legacy of Rome.",
        whyRead: "Provides insights into the transition from antiquity to the medieval world."
    },
    {
        title: "The Early Middle Ages: Europe 400-1000",
        author: "Rosamond McKitterick",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/71wJmEOxz1L._SL1500_.jpg",
        buyLink: "https://example.com/buy15",
        pdfLink: "https://example.com/pdf15",
        year: 2008,
        description: "A concise overview of the early medieval period in Europe.",
        whyRead: "Essential for understanding the foundations of medieval Europe."
    },
    {
        title: "Byzantium: The Surprising Life of a Medieval Empire",
        author: "Judith Herrin",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/91C4ColE6OL._SL1500_.jpg",
        buyLink: "https://www.amazon.it/Byzantium-Surprising-Life-Medieval-Empire/dp/0691143692",
        pdfLink: "https://example.com/pdf16",
        year: 2007,
        description: "Explores the cultural vibrancy of the Byzantine Empire.",
        whyRead: "Highlights the continuity of Roman culture in the East."
    },
    {
        title: "The Grand Strategy of the Byzantine Empire",
        author: "Edward N. Luttwak",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/71mMUgt9wsL._SL1500_.jpg",
        buyLink: "https://example.com/buy17",
        pdfLink: "https://example.com/pdf17",
        year: 2009,
        description: "Examines the strategies of Byzantium in preserving its legacy.",
        whyRead: "Offers insights into the political and military tactics of the empire."
    },
    {
        title: "The Barbarian West: 400–1000",
        author: "J.M. Wallace-Hadrill",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/712Pk+NKkjL._SL1360_.jpg",
        buyLink: "https://example.com/buy18",
        pdfLink: "https://example.com/pdf18",
        year: 1988,
        description: "Focuses on the rise of Germanic kingdoms in the West.",
        whyRead: "Essential for understanding the formation of medieval Europe."
    },
    {
        title: "Empires and Barbarians: The Fall of Rome and the Birth of Europe",
        author: "Peter Heather",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/81yUXOELDwL._SL1500_.jpg",
        buyLink: "https://example.com/buy19",
        pdfLink: "https://example.com/pdf19",
        year: 2010,
        description: "Examines how migrations shaped early medieval Europe.",
        whyRead: "Provides a comprehensive view of the transition from empire to new political entities."
    },
    {
        title: "The Making of Europe: Conquest, Colonization, and Cultural Change, 950–1350",
        author: "Robert Bartlett",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/A1fFo5XSsuL._SL1500_.jpg",
        buyLink: "https://example.com/buy20",
        pdfLink: "https://example.com/pdf20",
        year: 1993,
        description: "A detailed look at cultural shifts after Rome.",
        whyRead: "Essential for understanding the High Middle Ages."
    },
    {
        title: "The Roman Empire and the Silk Routes: The Ancient World Economy and the Empires of Parthia, Central Asia, and Han China",
        author: "Raoul McLaughlin",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/81VZPfB2BDL._SL1500_.jpg",
        buyLink: "https://example.com/buy21",
        pdfLink: "https://example.com/pdf21",
        year: 2016,
        description: "Explores Rome’s connections with the East.",
        whyRead: "Highlights the importance of trade networks."
    },
    {
        title: "The Rise of Western Christendom: Triumph and Diversity, A.D. 200–1000",
        author: "Peter Brown",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/718YQu4iMfL._SL1500_.jpg",
        buyLink: "https://example.com/buy22",
        pdfLink: "https://example.com/pdf22",
        year: 2013,
        description: "A deep dive into the spread of Christianity.",
        whyRead: "Essential for understanding the cultural evolution post-Rome."
    },
    {
        title: "Pagans and Christians",
        author: "Robin Lane Fox",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/41Zy30pgzVL.jpg",
        buyLink: "https://example.com/buy23",
        pdfLink: "https://example.com/pdf23",
        year: 1986,
        description: "A thorough account of the religious transition.",
        whyRead: "Explores the dynamics of faith in the Late Roman Empire."
    },
    {
        title: "The Age of Charlemagne: Warfare in the Middle Ages",
        author: "David Nicolle",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/91rl1Qbg8xL._SL1500_.jpg",
        buyLink: "https://example.com/buy24",
        pdfLink: "https://example.com/pdf24",
        year: 1994,
        description: "Insights into medieval warfare.",
        whyRead: "Essential for understanding military strategies of the time."
    },
    {
        title: "The World of Late Antiquity: AD 150–750",
        author: "Peter Brown",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/71QbmwTsd1L._SL1158_.jpg",
        buyLink: "https://example.com/buy25",
        pdfLink: "https://example.com/pdf25",
        year: 1989,
        description: "Explores the cultural landscape of late antiquity.",
        whyRead: "Provides context for the transition to the Middle Ages."
    },
    {
        title: "Gutenberg's Europe: The Book and the Invention of Western Modernity",
        author: "Frédéric Barbier",
        genre: "History",
        cover: "https://m.media-amazon.com/images/I/81DbebeaY9L._SL1500_.jpg",
        buyLink: "https://example.com/buy25",
        pdfLink: "https://example.com/pdf25",
        year: 2013,
        description: "An exploration of the impact of the printing press on European society.",
        whyRead: "Essential for understanding the transition to modernity in the West."
    },
    {
        title: "A Short History of the World",
        author: "Christopher Lascelles",
        genre: "History",
        cover: "https://example.com/cover1.jpg",
        buyLink: "https://example.com/buy1",
        pdfLink: "https://example.com/pdf1",
        year: 2019,
        description: "This book provides a concise, linear narrative of human history from prehistory to modern times. It covers major transitions, such as the development of agriculture, the rise of ancient civilizations, and the Middle Ages, with clear explanations and minimal fluff.",
        whyRead: "Essential for understanding the broad strokes of human history."
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        genre: "History",
        cover: "https://example.com/cover2.jpg",
        buyLink: "https://example.com/buy2",
        pdfLink: "https://example.com/pdf2",
        year: 2011,
        description: "While not strictly linear, Harari's book covers the evolution of human societies, including key transitions like the Agricultural Revolution and the rise of empires, with engaging insights into their significance.",
        whyRead: "Offers a thought-provoking perspective on the development of human societies."
    },
    {
        title: "Aldus Manutius and Renaissance Culture: Essays in Memory of Franklin D. Murphy",
        author: "D. S. Zeidberg",
        genre: "History",
        cover: "https://example.com/cover3.jpg",
        buyLink: "https://example.com/buy3",
        pdfLink: "https://example.com/pdf3",
        year: 1998,
        description: "A collection of essays reflecting on the contributions of Aldus Manutius to Renaissance culture.",
        whyRead: "Provides insights into the impact of printing and humanism during the Renaissance."
    },
    {
        title: "Guns, Germs, and Steel: The Fates of Human Societies",
        author: "Jared Diamond",
        genre: "History",
        cover: "https://example.com/cover4.jpg",
        buyLink: "https://example.com/buy4",
        pdfLink: "https://example.com/pdf4",
        year: 1997,
        description: "Explains how geography and environment influenced the development of societies, starting from early human origins in Africa to global power imbalances.",
        whyRead: "Provides insight into the factors that shaped human history."
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        genre: "History",
        cover: "https://example.com/cover2.jpg",
        buyLink: "https://example.com/buy2",
        pdfLink: "https://example.com/pdf2",
        year: 2011,
        description: "Offers a sweeping history of Homo sapiens, beginning in Africa and following migrations, societal evolutions, and the rise of modern institutions.",
        whyRead: "Essential for understanding the evolution of human societies."
    },
    {
        title: "The Human Web: A Bird's-Eye View of World History",
        author: "J.R. and William H. McNeill",
        genre: "History",
        cover: "https://example.com/cover7.jpg",
        buyLink: "https://example.com/buy7",
        pdfLink: "https://example.com/pdf7",
        year: 2003,
        description: "Chronicles the interconnected history of human societies, starting with early human migrations from Africa, emphasizing the importance of networks.",
        whyRead: "Highlights the interconnectedness of human history."
    },
    {
        title: "Out of Africa’s Eden: The Peopling of the World",
        author: "Stephen Oppenheimer",
        genre: "History",
        cover: "https://example.com/cover8.jpg",
        buyLink: "https://example.com/buy8",
        pdfLink: "https://example.com/pdf8",
        year: 2003,
        description: "Explores genetic and archaeological evidence tracing human migration from Africa to populate the world.",
        whyRead: "Provides a scientific perspective on human migration."
    },
    {
        title: "Africa in World History: From Prehistory to the Present",
        author: "Erik Gilbert and Jonathan T. Reynolds",
        genre: "History",
        cover: "https://example.com/cover9.jpg",
        buyLink: "https://example.com/buy9",
        pdfLink: "https://example.com/pdf9",
        year: 2011,
        description: "Focuses on Africa’s central role in world history, from human origins to the continent's interactions with global powers.",
        whyRead: "Essential for understanding Africa's impact on global history."
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
      { 
        title: "The Republic", 
        author: "Plato", 
        genre: "Philosophy", 
        cover: "https://example.com/cover6.jpg",
        buyLink: "https://example.com/buy7",
        pdfLink: "https://example.com/pdf7",
        year: "380 BC",
        description: "A Socratic dialogue concerning justice.",
        whyRead: "Explores the concept of justice and ideal society."
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100 mt-10">Library</h1>
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
