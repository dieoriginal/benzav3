import React from 'react';

const StarterPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen bg-red-700 dark:bg-black-900">

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

      </div>
    


  );
};

export default StarterPage;
   