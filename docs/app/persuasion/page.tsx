import React from 'react';

const StarterPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen bg-red-700 dark:bg-black-900">



      <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10 gap-3'>

       
       <h1 className='text-9xl font-extrabold text-center text-gray-900 dark:text-gray-100'><span className='italic'>InterCorpo</span>Reality</h1>
          
       

        <div className='overlay-container'>

         
          
          <div className='background-text mb-7'>
            <h6 className="text-5xl font-extrabold text-cente text-gray-900 dark:text-gray-100 italic mt-0">
              The Intertwined Nature of Gesture, Normativity, and Embodiment
            </h6>
          </div>
          <div className='overlay-text'>s
            <h6 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">
              To increase Seduction Probability
            </h6>
          </div>

        </div>

        <div className='flex flex-col gap-3 '>
          <div className='iframe-container flex justify-between'>
            <iframe
              className='iframe-main drop-shadow-2xl'
              src="https://www.youtube.com/embed/s6XMgklQCtk?list=PL2fkvdWFHThyIanW1YJ_CA5dbJDOrHsBh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            <iframe
              className='iframe-overlay drop-shadow-2xl'
              src="https://www.youtube.com/embed/HdGsOy7MFB8?list=PL2fkvdWFHThyIanW1YJ_CA5dbJDOrHsBh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            
          </div>
          <iframe
              className='iframe-new drop-shadow-2xl right-[35cm] bottom-[12cm] w-6 h-7' // Moved 5cm to the right
              src="https://www.youtube.com/embed/lG6VV0h3bQI?list=PL2fkvdWFHThyIanW1YJ_CA5dbJDOrHsBh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
        </div>

        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-28">

          <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            <span className='font-bold'>Gesture</span> is not merely a physical action but a complex interplay of <span className='font-bold'>normativity</span> and <span className='font-bold'>embodiment</span>. 
            It reflects the norms and values of a culture, while also being a fundamental aspect of our embodied experience. 
            Through gestures, we express and negotiate our understanding of the world, our relationships with others, and our own identities.
          </h2>
        </div>
        <div className='flex items-center justify-center flex-row gap-2'>
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">

        
            <h1 className="text-9xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Normativity</h1>
            <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            <span className='font-bold'>Normativity</span>, as discussed in the sources, refers to the norms and values embedded within a culture or social practice. 
            Gestures are understood as intrinsically normative: they acquire meaning and significance within the specific cultural context in which they are performed.
            </h2>
          </div>
          <div className="w-fit h-139 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        
            <h1 className="text-9xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Enactivism</h1>
            <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            <span className='font-bold'>Enactivism</span> emphasizes that cognition arises from the dynamic interaction between an organism and its environment.
            In this context, gestures are not simply outward expressions of internal mental states. Instead, they are actions that shape and are shaped by the individual's ongoing engagement with the world and others.
            </h2>
          </div>
        </div>

        <div className='flex items-center justify-center flex-row gap-2'>
          <div className="w-fit h-139  p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">

        
            <h1 className="text-9xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Intersubjectivity</h1>
            <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            <span className='font-bold'>Intersubjectivity</span> plays a crucial role in understanding, allowing individuals to share meaning and intentions with others, even without explicit verbal communication. 
            Gestures are understood as intrinsically intersubjective: they acquire meaning and significance within the specific cultural context in which they are performed.
            </h2>
          </div>
          <div className="w-fit h-139 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        
            <h1 className="text-9xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Embodiment InterAffectivity</h1>
            <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
            <span className='font-bold'>Affectivity</span> refers to the capacity to experience and express emotions, highlighting the role of feelings in shaping our interactions and perceptions. In this context, gestures are not merely physical actions; they are integral to how we convey and interpret emotional states, influencing our relationships and understanding of the world around us.
            </h2>
          </div>
        </div>
        


        <hr className='border-2 border-gray-300'/>

        <div className='flex flex-col gap-6'>
          <h2 className='text-6xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100'>References</h2>
          <ul className='list-disc list-inside text-gray-700 dark:text-gray-300'>
            <li><a href="http://www.ebooksbrasil.org/adobeebook/tragedia.pdf" className='text-blue-500 hover:underline'>A Origem da Tragédia</a></li>
            <li><a href="file:///Users/denilson/Documents/Obsidian%20Vault/1.%20PROJECTS/PRETOS%C2%AE/0%20PRETOS%20LLC/HFT%20PROP%20FIRM/System%20Architecture/_texto+07.pdf" className='text-blue-500 hover:underline'>Texto 07</a></li>
            <li><a href="https://repositorio.ul.pt/bitstream/10451/2040/1/ulfl078321_tm.pdf" className='text-blue-500 hover:underline'>ULFL078321</a></li>
            <li><a href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/sjp.12393" className='text-blue-500 hover:underline'>The Dark Side of Desire</a></li>
            <li><a href="https://voidnetwork.gr/wp-content/uploads/2016/09/Phenomenology-of-Perception-by-Maurice-Merleau-Ponty.pdf" className='text-blue-500 hover:underline'>Phenomenology of Perception</a></li>
            <li><a href="https://www.degruyter.com/document/doi/10.1515/9783110302028/html" className='text-blue-500 hover:underline'> De Gruyter Mouton "Body - Language - Communication" - Volume 2</a></li>
            <li><a href="https://cspeech.ucd.ie/Fred/docs/ChemeroEnaction2021.pdf" className='text-blue-500 hover:underline'>Chemero Enaction 2021</a></li>
            <li><a href="https://www.thephilosopher1923.org/post/intercorporeality-and-social-distancing" className='text-blue-500 hover:underline'>Intercorporeality and Social Distancing</a></li>
            <li><a href="https://oaj.fupress.net/index.php/pam/article/download/7256/7236/7181" className='text-blue-500 hover:underline'>INTERCORPOREALITY AND INTERAFFECTIVITY by THOMAS FUCHS, University of Heidelberg</a></li>
            <li><a href="https://1lib.sk/book/2954085/8081e7/embodiment-enaction-and-culture-investigating-the-constitution-of-the-shared-world.html" className='text-blue-500 hover:underline'>The Interplay of Embodiment, Enaction, and Culture </a></li>
            <li><a href="https://www.amazon.com/Intercorporeality-Emerging-Socialities-Interaction-Foundations/dp/019021046X " className='text-blue-500 hover:underline'>Intercorporeality: Emerging Socialities in Interaction</a></li>
            <li><a href="https://1lib.sk/book/3319387/b05be4/intercorporeality-emerging-socialities-in-interaction.html" className='text-blue-500 hover:underline'>Intercorporeality: Emerging Socialities in Interaction</a></li>
 
      
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/24936191/" className='text-blue-500 hover:underline'>
                The Role of Gestures in Communication
              </a>
            </li>

          </ul>
        </div>


    <hr className='border-2 border-gray-300'/>

    <div className='flex flex-row gap-4'>
    <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Maurice Merleau-Ponty</h1>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
        Phenomenology of Perception
      </p>
    </div>
    <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">de Gruyter Mouton</h1>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
        Description of Book 2
      </p>
    </div>
    <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Cornelia Müller</h1>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
        Publications on multimodal communication and gesture studies.
      </p>
      <a href="https://www.kuwi.europa-uni.de/en/professuren-mitarbeitende/sprachgebr-multimodale-komm/_pdf/publications-cornelia-mueller.pdf" className="text-center text-blue-500 dark:text-blue-300">
        View Publications
      </a>
    <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Nonverbal Communication</h1>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
        Nonverbal communication encompasses a wide range of behaviors, including facial expressions, body language, gestures, and eye contact. These nonverbal cues play a crucial role in conveying emotions, intentions, and social signals, often complementing or even substituting verbal communication.
      </p>
      <a href="https://shu-psb.primo.exlibrisgroup.com/discovery/fulldisplay?docid=alma99460357802501&context=L&vid=44SHU_INST:44SHU_VU1&lang=en&search_scope=MyInst_and_CI&adaptor=Local%20Search%20Engine&tab=Everything&query=sub,equals,%20Nonverbal%20communication%20,AND&mode=advanced&offset=10" className="text-center text-blue-500 dark:text-blue-300">
        Learn More
      </a>
    </div>

  </div>
  </div>


        <hr className='border-2 border-gray-300'/>

        </div> {/* Closing the div element here */}

        {/* body language */}




        <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10'>
          <h1 className='text-9xl font-extrabold text-center text-gray-900 dark:text-gray-100'>Body Language</h1>
          <h6 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">The Intertwined Nature of Gesture, Normativity, and Embodiment</h6>
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">

            <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              <span className='font-bold'>Gesture</span> is not merely a physical action but a complex interplay of <span className='font-bold'>normativity</span> and <span className='font-bold'>embodiment</span>. 
              It reflects the norms and values of a culture, while also being a fundamental aspect of our embodied experience. 
              Through gestures, we express and negotiate our understanding of the world, our relationships with others, and our own identities.
            </h2>
          </div>
          <div className='flex items-center justify-center flex-row gap-2'>
            <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">

          
              <h1 className="text-9xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Normativity</h1>
              <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              <span className='font-bold'>Normativity</span>, as discussed in the sources, refers to the norms and values embedded within a culture or social practice. 
              Gestures are understood as intrinsically normative: they acquire meaning and significance within the specific cultural context in which they are performed.
              </h2>
            </div>
            <div className="w-fit h-139 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          
              <h1 className="text-9xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Enactivism</h1>
              <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              <span className='font-bold'>Enactivism</span> emphasizes that cognition arises from the dynamic interaction between an organism and its environment.
              In this context, gestures are not simply outward expressions of internal mental states. Instead, they are actions that shape and are shaped by the individual's ongoing engagement with the world and others.
              </h2>
            </div>
          </div>

          <div className='flex items-center justify-center flex-row gap-2'>
            <div className="w-fit h-139 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          
              <h1 className="text-9xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Enactivism</h1>
              <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              <span className='font-bold'>Enactivism</span> emphasizes that cognition arises from the dynamic interaction between an organism and its environment.
              In this context, gestures are not simply outward expressions of internal mental states. Instead, they are actions that shape and are shaped by the individual's ongoing engagement with the world and others.
              </h2>
            </div>
            <div className="w-fit h-139 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          
              <h1 className="text-9xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Affectivity</h1>
              <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              <span className='font-bold'>Enactivism</span> emphasizes that cognition arises from the dynamic interaction between an organism and its environment.
              In this context, gestures are not simply outward expressions of internal mental states. Instead, they are actions that shape and are shaped by the individual's ongoing engagement with the world and others.
              </h2>
            </div>
          </div>
          
          <div className='flex flex-row gap-2'>Gestures as Extensions of Embodiment</div>

          <hr className='border-2 border-gray-300'/>

          <div className='flex flex-row gap-4'>
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Maurice Merleau-Ponty</h1>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Phenomenology of Perception
            </p>
          </div>
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">de Gruyter Mouton</h1>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Description of Book 2
            </p>
          </div>
          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Cornelia Müller</h1>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
              Publications on multimodal communication and gesture studies.
            </p>
            <a href="https://www.kuwi.europa-uni.de/en/professuren-mitarbeitende/sprachgebr-multimodale-komm/_pdf/publications-cornelia-mueller.pdf" className="text-center text-blue-500 dark:text-blue-300">
              View Publications
            </a>
          </div>
          <div className='flex flex-row gap-4'>
            <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Maurice Merleau-Ponty</h1>
              <p className="text-center text-gray-700 dark:text-gray-300 mb-6">Phenomenology of Perception</p>
            </div>
            <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">The Aesthetic Theory - Art, Society, and Culture</h1>
              <p className="text-center text-gray-700 dark:text-gray-300 mb-6">Adorno Aesthetic Theory</p>
            </div>
            <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Book 3</h1>
              <p className="text-center text-gray-700 dark:text-gray-300 mb-6">Description of Book 3</p>
            </div>
          </div>
        </div>


        <hr className='border-2 border-gray-300'/>

        <div className='flex flex-col gap-10'>
          <h2 className='text-6xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100'>Types of Gestures</h2>
          <div className='flex flex-col gap-6'>
            <div className='p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
              <h3 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>Deictic gestures</h3>
              <p className='text-gray-700 dark:text-gray-300'>
                These gestures, such as pointing, are used to indicate or refer to something. They can be used for communication or for self-reflection. For example, a child might point to themself to indicate self-awareness, or they might point to an object to show that they know how to use it.
              </p>
            </div>
            <div className='p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
              <h3 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>Enactive symbols</h3>
              <p className='text-gray-700 dark:text-gray-300'>
                These are gestures that are not simply communicative, but also representational. They are less common than other types of gestures, and can be self-directed.
              </p>
            </div>
            <div className='p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
              <h3 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>Aesthetic gestures</h3>
              <p className='text-gray-700 dark:text-gray-300'>
                These are gestures that have a clear communicative intent related to art. For example, a child might make a gesture to invite their father to dance flamenco with them.
              </p>
            </div>
            <div className='p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
              <h3 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>Symbolic gestures</h3>
              <p className='text-gray-700 dark:text-gray-300'>
                These gestures "depict something" and are used to express meaning. They can be used in art to express emotion or mood. Symbolic gestures can also hide or disguise the subject's freedom. For example, a work of art can be seen as a "frozen gesture."
              </p>
            </div>
            <div className='p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
              <h3 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>Communicative gestures</h3>
              <p className='text-gray-700 dark:text-gray-300'>
                These gestures are used to communicate with others. They can be used to convey a message or to express an emotion. For example, waving with your hand is a communicative gesture.
              </p>
            </div>
            <div className='p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
              <h3 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>Gestures of work</h3>
              <p className='text-gray-700 dark:text-gray-300'>
                These gestures are used to perform a task or to achieve a goal. They can be genuine expressions of freedom or they can be alienating. For example, using a tool to build something is a gesture of work.
              </p>
            </div>
            <div className='p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
              <h3 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>Interest-free gestures</h3>
              <p className='text-gray-700 dark:text-gray-300'>
                These gestures are not directed at any particular goal or purpose. For example, a child jumping up and down for no reason is an interest-free gesture.
              </p>
            </div>
            <div className='p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
              <h3 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>Ritual gestures</h3>
              <p className='text-gray-700 dark:text-gray-300'>
                These gestures are characterized by their circularity and their lack of a specific goal. They can be genuine or they can be pseudo-rituals.
              </p>
            </div>
          </div>
        </div>
        </div> 

        <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10'>
  <h1 className='text-9xl font-extrabold text-center text-gray-900 dark:text-gray-100'>Study Guide: Mastering Body Language</h1>
  
  <h2 className='text-6xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100'>Core Academic Disciplines</h2>
  <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 mb-6'>
    <li>Nonverbal Communication</li>
    <li>Social Psychology</li>
    <li>Embodiment Studies</li>
    <li>Cultural Anthropology</li>
    <li>Behavioral Neuroscience</li>
  </ul>

  <div className='p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg'>
    <h3 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>The Power of Body Language</h3>
    <p className='text-gray-700 dark:text-gray-300'>
      Body language plays a crucial role in communication, often conveying more information than spoken words. It can reveal our true intentions, emotions, and attitudes, influencing how others perceive us and interact with us. Understanding body language can help us build stronger relationships, improve our communication skills, and even boost our confidence.
    </p>
    <a href="https://www.thinkwithniche.com/blogs/details/the-power-of-body-language-why-it-matters-more-than-you-think" className='text-blue-500 hover:underline'>Learn More About The Power of Body Language</a>
  </div>

  <h2 className='text-6xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100'>Foundational Concepts and Theories</h2>
  <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 mb-6'>
    <li>Mirror Neurons</li>
    <li>Proxemics</li>
    <li>Kinesics</li>
    <li>Cultural Normativity in Gesture</li>
  </ul>

  <h2 className='text-6xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100'>Recommended Books</h2>
  <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 mb-6'>
    <li>"The Definitive Book of Body Language" by Allan and Barbara Pease</li>
    <li>"What Every BODY is Saying" by Joe Navarro</li>
    <li>"Silent Messages" by Albert Mehrabian</li>
    <li>"Beyond Culture" by Edward T. Hall</li>
    <li>"The Presentation of Self in Everyday Life" by Erving Goffman</li>
    <li>"Influence: The Psychology of Persuasion" by Robert Cialdini</li>
    <li>"The Art of Seduction" by Robert Greene</li>
  </ul>

  <h2 className='text-6xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100'>Practical Study Areas</h2>
  <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 mb-6'>
    <li>Microexpressions</li>
    <li>Cross-Cultural Gestures</li>
    <li>Charisma in Leadership</li>
  </ul>

  <h2 className='text-6xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100'>Learning Through Practice</h2>
  <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 mb-6'>
    <li>Observation Exercises</li>
    <li>Acting and Theater</li>
    <li>Dance and Movement</li>
  </ul>

  <h2 className='text-6xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100'>Tools and Training</h2>
  <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 mb-6'>
    <li>Body Language Courses</li>
    <li>Feedback Apps</li>
    <li>AI Motion Analysis</li>
  </ul>
</div>

        <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10 gap-3'>

        
        <h1 className='text-9xl font-extrabold text-center text-gray-900 dark:text-gray-100'><span className='italic'>Femme</span>Fatale Uomo</h1>
            
        

          <div className='overlay-container'>

          
            
            <div className='background-text mb-7'>
              <h6 className="text-5xl font-extrabold text-cente text-gray-900 dark:text-gray-100 italic mt-0">
The man with          </h6>
            </div>
            <div className='overlay-text'>
              <h6 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic mt-0">
              the Femme Antidote
              </h6>
            </div>

          </div>

          <div className='flex flex-col gap-3 '>
            <div className='iframe-container flex justify-between'>
              <iframe
                className='iframe-main drop-shadow-2xl'
                src="https://www.youtube.com/embed/s6XMgklQCtk?list=PL2fkvdWFHThyIanW1YJ_CA5dbJDOrHsBh"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
              <iframe
                className='iframe-overlay drop-shadow-2xl'
                src="https://www.youtube.com/embed/HdGsOy7MFB8?list=PL2fkvdWFHThyIanW1YJ_CA5dbJDOrHsBh"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
              
            </div>
            <iframe
                className='iframe-new drop-shadow-2xl right-[35cm] bottom-[12cm] w-6 h-7' // Moved 5cm to the right
                src="https://www.youtube.com/embed/lG6VV0h3bQI?list=PL2fkvdWFHThyIanW1YJ_CA5dbJDOrHsBh"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
          </div>

          <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-28">

            <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              <span className='font-bold'>Biological Foundations of Attraction</span>
              <br/>
              Female Sexual Response Cycle: Hormones (e.g., oxytocin, dopamine, estrogen), fertility cues, and the evolutionary basis of attraction.
              <br/>
              Neurobiology: Role of sensory triggers (scent, touch, voice) in arousal and bonding.
            </h2>
            <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              <span className='font-bold'>Recommended Reads:</span>
              <br/>
              “Why Women Have Sex” by Cindy M. Meston and David M. Buss
              <br/>
              “The Evolution of Desire” by David M. Buss
              <br/>
              Research on pheromones and sexual signaling in human behavior.
            </h2>
          </div>
          <div className='flex items-center justify-center flex-row gap-2'>
            <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">

          
              <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Phenomenology and Feminist Theory</h1>
              <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              Study the embodied experiences of desire, seduction, and sexual agency from a phenomenological perspective.
              <br/>
              Understand feminist critiques of objectification vs. autonomy in sexual dynamics.
              <br/>
              <span className='font-bold'>Recommended Reads:</span>
              <br/>
              “Time in Feminist Phenomenology” edited by Christina Schües et al. (explores time and embodiment in female experience).
              <br/>
              “The Second Sex” by Simone de Beauvoir (a feminist classic on women's roles and societal constructs).
              <br/>
              Works by Maurice Merleau-Ponty on embodied phenomenology.
              </h2>
            </div>
            <div className="w-fit h-139 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          
              <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Archetypes and Fictional Figures</h1>
              <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              Study archetypes (e.g., the femme fatale, the ingenue) and their impact on cultural imagination.
              <br/>
              Analyze historical and literary works that have shaped ideals of seduction.
              <br/>
              <span className='font-bold'>Examples to Analyze:</span>
              <br/>
              Anna Karenina (Anna Karenina by Leo Tolstoy)
              <br/>
              Scarlett O’Hara (Gone with the Wind by Margaret Mitchell)
              <br/>
              Emma Bovary (Madame Bovary by Gustave Flaubert)
              <br/>
              Catherine Earnshaw (Wuthering Heights by Emily Brontë)
              <br/>
              <span className='font-bold'>Recommended Reads:</span>
              <br/>
              “The Heroine’s Journey” by Maureen Murdock
              <br/>
              “Seduction: A History from the Enlightenment to the Present” by Clement Knox
              <br/>
              Psychoanalytic works by Carl Jung (for archetypes).
              </h2>
            </div>
          </div>

          <div className='flex items-center justify-center flex-row gap-2'>
            <div className="w-fit h-139  p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">

          
              <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Historical Context and Cultural Lures</h1>
              <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              Investigate societal ideals of femininity, seduction, and the cultural “rules” of attraction.
              <br/>
              Examine iconic women in history and the traits attributed to their allure.
              <br/>
              <span className='font-bold'>Recommended Reads:</span>
              <br/>
              “The History of Sexuality” by Michel Foucault (examines the intersection of power, sexuality, and society).
              <br/>
              “Femininity” by Susan Brownmiller (analyzes historical roles and perceptions of femininity).
              </h2>
            </div>
            <div className="w-fit h-139 p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          
              <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-gray-100 italic">Psychological and Behavioral Studies</h1>
              <h2 className="text-center text-gray-700 dark:text-gray-300 mb-6 text-3xl">
              Dive into the psychology of sexual behavior, female fantasy, and desire.
              <br/>
              Explore quirks or behaviors that may act as unconscious "lures" (e.g., laughter, confidence, vulnerability).
              <br/>
              <span className='font-bold'>Recommended Reads:</span>
              <br/>
              “Come as You Are” by Emily Nagoski (explores female arousal and desire).
              <br/>
              “A Billion Wicked Thoughts” by Ogi Ogas and Sai Gaddam (big data insights on sexual desire).
              <br/>
              Research by Esther Perel on relationships and seduction.
              </h2>
            </div>
          </div>
          


          <hr className='border-2 border-gray-300'/>

          <div className='flex flex-col gap-6'>
            <h2 className='text-6xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100'>Approach to Research</h2>
            <ul className='list-disc list-inside text-gray-700 dark:text-gray-300'>
              <li><span className='font-bold'>Interdisciplinary Engagement</span>: Mix empirical data from biology and psychology with theoretical perspectives from phenomenology and literature. Seek intersections, such as how biological impulses are socially narrated.</li>
              <li><span className='font-bold'>Scholarly Journals and Essays</span>:
                <ul className='list-disc list-inside'>
                  <li>Signs: Journal of Women in Culture and Society</li>
                  <li>Phenomenology and the Cognitive Sciences</li>
                  <li>Journal of Sexual Medicine</li>
                </ul>
              </li>
              <li><span className='font-bold'>Phenomenological Textual Analysis</span>: Analyze historical texts and fictional works to uncover patterns in how seduction and female desire are portrayed and experienced.</li>
              <li><span className='font-bold'>Experimental Philosophy</span>: Engage with thought experiments to deconstruct archetypes. For instance: How does a femme fatale archetype function in a patriarchal society? Is it empowerment or a tool of objectification?</li>
            </ul>
          </div>


  <hr className='border-2 border-gray-300'/>

  <div className='flex flex-row gap-4'>
  <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Actionable Next Steps</h1>
    <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
      Start with “Time in Feminist Phenomenology” to ground your exploration in embodied experience.
      <br/>
      Pair it with “Why Women Have Sex” for a biological lens.
      <br/>
      Select one archetype or fictional figure to deconstruct across different eras and contexts.
      <br/>
      Dive into literary analyses of works like Madame Bovary or Gone with the Wind.
      <br/>
      Explore feminist critiques of sexualized power dynamics in modern media (e.g., Beyoncé’s music videos, Scarlett Johansson's filmography).
    </p>
  </div>
  <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">By Bridging These Disciplines</h1>
    <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
      You'll craft a comprehensive, academic understanding of the multifaceted concept of seduction as it relates to women.
    </p>
  </div>
  </div>

        <div className="w-fit h-fit p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-28">
          <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">6-Month Study Plan</h1>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
            Here’s a structured <strong>6-month study plan</strong> to academically explore seduction through biology, phenomenology, archetypes, and cultural analysis. The plan is divided into <strong>weekly themes</strong>, focusing on different disciplines and building connections across them.
          </p>

          <h2 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Months 1-2: Foundations and Core Concepts</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
            <strong>Goal</strong>: Build a foundational understanding of seduction through biology, phenomenology, and feminist perspectives.
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
            <li><strong>Week 1: Biology of Attraction</strong>
              <ul className="list-disc list-inside">
                <li>Read: <em>“Why Women Have Sex”</em> by Cindy M. Meston and David M. Buss.</li>
                <li>Study: Hormonal and neurological aspects of attraction (e.g., oxytocin, dopamine, pheromones).</li>
                <li>Task: Summarize key findings on female arousal mechanisms.</li>
              </ul>
            </li>
            <li><strong>Week 2: Evolutionary Psychology</strong>
              <ul className="list-disc list-inside">
                <li>Read: <em>“The Evolution of Desire”</em> by David M. Buss.</li>
                <li>Focus: Evolutionary theories of mate selection and sexual strategies.</li>
                <li>Task: Compare how male and female seduction tactics evolve biologically.</li>
              </ul>
            </li>
            <li><strong>Week 3: Introduction to Phenomenology</strong>
              <ul className="list-disc list-inside">
                <li>Read: Maurice Merleau-Ponty’s <em>“Phenomenology of Perception”</em> (focus on embodiment).</li>
                <li>Focus: Understand how lived experience shapes desire and attraction.</li>
                <li>Task: Write a short reflection on how phenomenology explains embodied attraction.</li>
              </ul>
            </li>
            <li><strong>Week 4: Feminist Phenomenology</strong>
              <ul className="list-disc list-inside">
                <li>Read: <em>“Time in Feminist Phenomenology”</em> edited by Christina Schües et al.</li>
                <li>Focus: Analyze feminist critiques of embodied experience and gendered dynamics of seduction.</li>
                <li>Task: Identify one feminist critique of seduction and articulate its relevance today.</li>
              </ul>
            </li>
            <li><strong>Week 5: Archetypes of Seduction in Literature</strong>
              <ul className="list-disc list-inside">
                <li>Read: <em>“The Heroine’s Journey”</em> by Maureen Murdock.</li>
                <li>Explore: Archetypes like the femme fatale, ingenue, and romantic heroine.</li>
                <li>Task: Identify two archetypes and analyze their impact on societal ideals of seduction.</li>
              </ul>
            </li>
            <li><strong>Week 6: Historical and Cultural Contexts</strong>
              <ul className="list-disc list-inside">
                <li>Read: <em>“The History of Sexuality”</em> by Michel Foucault.</li>
                <li>Focus: Understand how societal norms and power structures shape seduction.</li>
                <li>Task: Create a timeline of key cultural shifts in the perception of seduction.</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Months 3-4: Deep Dive into Specific Disciplines</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
            <strong>Goal</strong>: Expand understanding through sociology, anthropology, and media studies.
          </p>




        <hr className='border-2 border-gray-300'/>

        </div> {/* Closing the div element here */}

        </div>
      </div>
    


  );
};

export default StarterPage;
   