import React from 'react';

const StarterPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 min-h-screen bg-black-900 dark:bg-black-900">

         

                    <div className='flex flex-col gap-10 border-2 border-gray-300 rounded-lg p-10 gap-3'>

                    
                    <h1 className='text-9xl font-extrabold text-center text-red-700 dark:text-gray-100'><span className='italic'>Femme</span>Fatale Uomo</h1>
                        
                    

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
   