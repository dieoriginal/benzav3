import React from 'react';

// Main component for the Starter Page
const StarterPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen bg-gray-500 dark:bg-black">
      {/* Main Title */}
      
      {/* Section for Glasses */}
      <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10'>
        <h1 className='text-9xl font-extrabold text-center text-gray-900 dark:text-red-700 border-6 border-white animate-in italic'>People</h1>
        <h6 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">Nobel Minds, Innovators & their Practical Achievements</h6>
        
        {/* Description of Custom Glasses */}
        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            If you search for ambiguous will, study the people who accomplished ambiguous will.

            ADD: Gilles Deleuze, Michael Foulcalt, Carl Jung, Sigman Freud, Quentin Skinner
          </h2>
        </div>

        <h4 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">Authors</h4>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className='gap-0 '>
              <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Walter Kaufmann</h1>
              <h3 className="text-1xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Best Translator of German Essays</h3>
            </div>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img
                src="https://holocaustmusic.ort.org/fileadmin/image_archive/people/walter_kaufman_colourised.jpg"
                alt="Walter Kaufmann"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Renowned as a scholar and translator of Friedrich Nietzsche, Walter Kaufmann was a German-American philosopher, translator, and poet. He wrote extensively on a broad range of subjects, such as authenticity and death, moral philosophy and existentialism, theism and atheism, Christianity and Judaism, as well as philosophy and literature. He served more than 30 years as a professor at Princeton University.
            </p>
          </div>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className='gap-0 '>
              <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Martin Heidegger</h1>
              <h3 className="text-1xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Existentialist Philosopher</h3>
            </div>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Martin_Heidegger_%28cropped%29.jpg"
                alt="Martin Heidegger"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Martin Heidegger was a German philosopher who is widely recognized as one of the most original and important philosophers of the 20th century. He is best known for his contributions to existentialism and his work on the nature of being. Heidegger's ideas have had a profound impact on a wide range of fields, including philosophy, theology, psychology, and political theory.
            </p>
          </div>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className='gap-0 '>
              <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Friedrich Nietzsche</h1>
              <h3 className="text-1xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Philosopher</h3>
            </div>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Friedrich_Nietzsche_1882.jpg"
                alt="Friedrich Nietzsche"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Friedrich Nietzsche was a German philosopher, cultural critic, and poet who is best known for his ideas on the death of God, the Übermensch, and the will to power. His philosophical ideas have had a significant impact on modern thought, influencing existentialism, nihilism, and postmodernism.
            </p>
          </div>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className='gap-0 '>
              <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Søren Kierkegaard</h1>
              <h3 className="text-1xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Philosopher and Theologian</h3>
            </div>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Søren_Kierkegaard.jpg"
                alt="Søren Kierkegaard"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Søren Kierkegaard was a Danish philosopher, theologian, and poet who is widely regarded as the father of existentialism. His philosophical ideas focused on the individual's subjective experience and the leap of faith.
            </p>
          </div>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className='gap-0 '>
              <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Charles Darwin</h1>
              <h3 className="text-1xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Biologist</h3>
            </div>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Charles_Darwin_by_Julia_Margaret_Cameron_1868.jpg"
                alt="Charles Darwin"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Charles Darwin was an English biologist who is best known for his theory of evolution through natural selection. His groundbreaking work, "On the Origin of Species," revolutionized the field of biology and had a significant impact on modern science.
            </p>
          </div>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className='gap-0 '>
              <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Ray Kurzweil</h1>
              <h3 className="text-1xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Inventor and Futurist</h3>
            </div>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Ray_Kurzweil.jpg"
                alt="Ray Kurzweil"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Ray Kurzweil is an American inventor, engineer, and futurist who has made significant contributions to fields such as artificial intelligence, biotechnology, and futurism. He is known for his predictions about the technological singularity and the future of humanity.
            </p>
          </div>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className='gap-0 '>
              <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Erving Goffman</h1>
              <h3 className="text-1xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Sociologist</h3>
            </div>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Erving_Goffman.jpg"
                alt="Erving Goffman"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Erving Goffman was a Canadian sociologist who is known for his work on the social construction of reality, social interaction, and the presentation of self. His ideas have had a significant impact on sociology, psychology, and anthropology.
            </p>
          </div>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className='gap-0 '>
              <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Stefan Lorenz Sorgner</h1>
              <h3 className="text-1xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Philosopher</h3>
            </div>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Stefan_Lorenz_Sorgner.jpg"
                alt="Stefan Lorenz Sorgner"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Stefan Lorenz Sorgner is a German philosopher who has made significant contributions to the fields of ethics, metaphysics, and philosophy of technology. He is known for his work on the ethics of human enhancement and the implications of emerging technologies.
            </p>
          </div>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className='gap-0 '>
              <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Nick Bostrom</h1>
              <h3 className="text-1xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Philosopher and Director of the Future of Humanity Institute</h3>
            </div>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Nick_Bostrom.jpg"
                alt="Nick Bostrom"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Nick Bostrom is a Swedish philosopher and director of the Future of Humanity Institute. He is known for his work on existential risk, the ethics of artificial intelligence, and the implications of emerging technologies on human civilization.
            </p>
          </div>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className='gap-0 '>
              <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Robert Greene</h1>
              <h3 className="text-1xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Author</h3>
            </div>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Robert_Greene.jpg"
                alt="Robert Greene"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Robert Greene is an American author known for his books on strategy, power, and self-improvement. His works, such as "The 48 Laws of Power" and "The Art of Seduction," have been widely read and influential.
            </p>
          </div>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <div className='gap-0 '>
              <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">James Clear</h1>
              <h3 className="text-1xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Author and Speaker</h3>
            </div>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5c/James_Clear.jpg"
                alt="James Clear"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              James Clear is an American author, speaker, and entrepreneur who is known for his work on personal development, habit formation, and behavioral psychology. His book "Atomic Habits" has been a bestseller and has had a significant impact on the self-help industry.
            </p>
          </div>

          {/* Le Corbusier Section */}
        <h4 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">Politics</h4>

        <div className='flex items-center justify-center flex-row gap-2'>
          {/* Individual Glasses Sections */}
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Michael Caine</h1>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <a href="https://georgehahn.com/the-spectacular-spectacles-of-michael-caine/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://i.pinimg.com/736x/0f/35/57/0f35570af66e61f0e79c0bf5a800806a.jpg"
                  alt="Michael Caine"
                  className="rounded-lg shadow-lg"
                />
              </a>
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Iconic British actor known for his suave style and charm.
            </p>
          </div>
          {/* ... other Michael Caine sections ... */}
        </div>

        {/* Soviet Section */}
        <h4 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">Politics</h4>

        <div className='flex items-center justify-center flex-row gap-2'>
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg"> 
            <h1 className="text-9xl font-extrabold text-center text-gray-900 dark:text-gray-100 italic">Soviet</h1>
            <h2 className="text-center text-gray-700 dark:text-gray-300 text-3xl">
              <div className="flex justify-center mb-6 w-fit h-fit">
                <img 
                  src="https://s3-eu-west-2.amazonaws.com/photos.thearticle.com/app/production/articles/1057/cover_desktop_bryan-magee-a-tribute.jpg" 
                  alt="Bryan Magee with glasses" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <span className='font-bold'>Bryan Magee</span>, Soviet glasses
            </h2>
          </div>

          {/* USSR Soviet Section */}
          <div className='flex items-center justify-center flex-row gap-2'>
            <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h1 className="text-9xl font-extrabold text-center text-gray-900 dark:text-gray-100 italic">USSR Soviet</h1>
              <h2 className="text-center text-gray-700 dark:text-gray-300 text-3xl">
                <div className="flex justify-center mb-6 w-fit h-fit">
                  <img 
                    src="https://as2.ftcdn.net/v2/jpg/04/13/45/79/1000_F_413457939_A4oKvdLYLa6mckp8MFSMckLrDN1LbEEc.jpg" 
                    alt="USSR glasses" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <span className='font-bold'>1970s</span> glasses
              </h2>
            </div>
          </div>
        </div>

        {/* Vintage Soviet Retro Style Section */}
        <div className='flex items-center justify-center flex-row gap-2'>
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Vintage Soviet Retro Style</h1>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img 
                src="https://preview.redd.it/cant-find-this-vintage-soviet-retro-style-anywhere-please-v0-9v303k0pl19b1.jpg?width=1080&crop=smart&auto=webp&s=26c410e67da64e696a249d41ad3ddf5d54d1fcc0" 
                alt="Vintage Soviet Retro Style" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              A unique piece of vintage Soviet design that captures the essence of retro style.
            </p>
          </div>

          {/* Roger Moore Section */}
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Roger Moore</h1>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicOgsoKtM7tHwhVd0mUkKSYYB8DiSFTV-rMDFlgW-BEyPsPp-qOAGq4jyWX1JY1YVb4wUHgIMbuVcJ0vH_c14nYLyG6lOjsBoslblakmLfC4A42sopvAK7M9GrghCKr3l6RVbHfxLefk4/s1600/roger-moore-naked-face-balmacaan-coat-mens-style-uk-tweed-pig-1.jpg" 
                alt="Roger Moore" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Iconic British actor known for his suave style and charm.
            </p>
          </div>
        </div>

        <h4 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">Music</h4>

        <div className="flex items-center justify-center flex-row gap-2">
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-2 border-gray-300">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">OTTICO (Laboratorio Montaggio Occhiali)</h1>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <a href="https://www.otticamalinverno.com/laboratorio-montaggio-occhiali.html" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://www.otticamalinverno.com/path/to/image.jpg" // Replace with the actual image URL
                  alt="OTTICO Laboratory"
                  className="rounded-lg shadow-lg"
                />
              </a>
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Discover the craftsmanship behind eyewear assembly at OTTICO, where precision meets style.
            </p>
          </div>

          {/* Additional sections ... */}
        </div>

        {/* Aesthetic Theory Section */}
        {/* ... existing code ... */}

        {/* Books Section */}
        <div className='flex flex-row gap-4 flex-wrap'>
          {/* Book items ... */}
        </div>

        <hr className='border-2 border-gray-300'/>
      </div>

      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

      <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10'>
        <h1 className='text-9xl font-extrabold text-center text-gray-900 dark:text-red-700'>Wardrobe</h1>
        <h6 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0"> The Duke of Windsor</h6>

        <div className="flex justify-center">
          <iframe 
            width="888" 
            height="488" 
            src="https://www.youtube.com/embed/lxx09kkV7Os?t=950s" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        
        {/* Description of Custom Glasses */}
        <div className='flex items-center justify-center flex-row gap-2'>
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg"> 
            <h1 className="text-7xl font-extrabold text-center text-gray-900 dark:text-gray-100 italic">Simon Basset </h1>
            <h2 className="text-center text-gray-700 dark:text-gray-300 text-3xl">
              <div className="flex justify-center mb-6 w-fit h-fit">
                <a href="https://www.youtube.com/watch?v=pVr8tTOkeUU" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://i.pinimg.com/736x/24/c1/3b/24c13b56136c125a64fb843aa8f8133e.jpg" 
                    alt="Bryan Magee with glasses" 
                    className="rounded-lg shadow-lg"
                  />
                </a>
              </div>
              <span className='font-bold'>Simon Basset's</span> stunt 
              <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
                <a href="https://www.example.com/jacket" className="text-blue-500 hover:underline">1. jacket</a>
              </p>
            </h2>
          </div>

          {/* USSR Soviet Section */}
          <div className='flex items-center justify-center flex-row gap-2'>
            <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h1 className="text-9xl font-extrabold text-center text-gray-900 dark:text-gray-100 italic">Basset 2</h1>
              <h2 className="text-center text-gray-700 dark:text-gray-300 text-3xl">
                <div className="flex justify-center mb-6 w-fit h-fit">
                  <img 
                    src="https://i.pinimg.com/736x/bc/df/32/bcdf32d06935f4dd725eab7ed4b256e1.jpg" 
                    alt="USSR glasses" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <span className='font-bold'>1970s</span> glasses
              </h2>
            </div>
          </div>
        </div>

        {/* Vintage Soviet Retro Style Section */}
        <div className='flex items-center justify-center flex-row gap-2'>
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Stivali Alta</h1>
            <div className="flex justify-center mb-6 w-fit h-fit">
              <img 
                src="https://i.pinimg.com/736x/b1/3a/c3/b13ac36c0f134a9f7ff73c85b443e2fd.jpg" 
                alt="Vintage Soviet Retro Style" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              A unique piece of vintage Soviet design that captures the essence of retro style.
            </p>
          </div>
        </div>

        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Simon Basset's Style from <em>Bridgerton</em></h1>
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            Simon Basset's style embodies Regency-era elegance, blending classic tailoring with bold, masculine flair. Here’s a breakdown of the clothing items you’d need to recreate his iconic look, including their Italian names:
          </h2>
          <hr className='border-2 border-gray-300 mb-4'/>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">1. Tailcoat (<span className='font-bold'>Frack</span>)</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            A fitted, long-sleeved coat with tails at the back. Simon often wears deep hues like navy, black, or maroon in velvet or fine wool.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">2. Waistcoat (<span className='font-bold'>Gilet</span>)</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            A sleeveless garment worn over the shirt and under the tailcoat, often with intricate patterns or in complementary colors.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">3. Dress Shirt (<span className='font-bold'>Camicia Elegante</span>)</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            A crisp white or light-colored shirt with a high, stiff collar, often styled with a cravat or jabot.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">4. Cravat (<span className='font-bold'>Cravatta a Nodo</span>)</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            A neckpiece tied in elaborate knots, typical of the Regency era, to add sophistication.
          </p>
          <a href="https://www.paginegialle.it/como-co/sartoria/luca" target="_blank" rel="noopener noreferrer">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              In Como
            </p>
          </a>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">5. Trousers (<span className='font-bold'>Pantaloni</span>)</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            High-waisted, slim-fit trousers, typically in neutral or dark colors, often paired with braces (suspenders).
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">6. Boots (<span className='font-bold'>Stivali</span>)</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Knee-high leather boots or ankle boots with a polished finish, perfect for completing the Regency aesthetic.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">7. Gloves (<span className='font-bold'>Guanti</span>)</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Leather or fabric gloves, often white or cream-colored, for formal occasions.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">8. Pocket Watch (<span className='font-bold'>Orologio da Tasca</span>)</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            A classic accessory clipped to the waistcoat for added sophistication.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">9. Overcoat/Cloak (<span className='font-bold'>Cappotto/Mantello</span>)</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            For outdoor scenes, a long overcoat or a flowing cloak made of wool or velvet.
          </p>
          <hr className='border-2 border-gray-300 my-4'/>
          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            Tips for Authenticity:
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Opt for rich fabrics like velvet, silk, or fine wool.</li>
            <li>Stick to a color palette of jewel tones, deep neutrals, and metallic accents.</li>
            <li>Ensure the fit is tailored to achieve a sharp silhouette, as Simon Basset’s look relies heavily on precision.</li>
          </ul>
        </div>
        
        <div className='flex items-center justify-center flex-row gap-2'>
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Style Explanation</h1>
            <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              The <span className='font-bold'>Regency style</span> embodied by Simon Basset is characterized by a sophisticated blend of <span className='font-bold'>tailored elegance</span> and <span className='font-bold'>refined masculinity</span>. 
              Key elements include <span className='font-bold'>fitted coats</span> with tails, <span className='font-bold'>waistcoats</span> adorned with intricate patterns, and <span className='font-bold'>cravats</span> that add a touch of flair. 
              This style emphasizes <span className='font-bold'>luxurious fabrics</span> and a <span className='font-bold'>sharp silhouette</span>, reflecting both status and taste in the Regency era.
            </h2>
          </div>
        </div>

        <div className="w-fit h-fit p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h1 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">Women Effect Confirmation:</h1>
          <div className="flex justify-center mb-4">
            <a href="https://www.reddit.com/r/BridgertonNetflix/comments/kpv3uo/the_dukes_immaculate_wardrobe_your_favourite/" className="text-blue-500 hover:underline">Check on Reddit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterPage;
