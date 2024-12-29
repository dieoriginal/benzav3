import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { FloatingPanelComponent } from "@/components/FloatingPanel";
import { CompoundPERCountries } from "@/components/CompoundPERCountries";
import { AffordableHousing } from "@/components/AffordableHousing";


export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <ExampleJsx />
        </Container>
      </Section>
    </Main>
  );
}

const ExampleJsx = () => {
  return (
    <article>
      
      

      <AffordableHousing />

      <div className="flex flex-row gap-1 mt-9 text-center">
        <div className="w-full">
          <h1 className='text-lg font-medium text-zinc-800 dark:text-zinc-100 text-center pb-0'>Websites</h1>

          <div>
            <table className="min-w-full border-collapse border border-black-200 text-center border-spacing-0">
              <thead>
                <tr className="bg-black-100 ">
                  <th className="border border-gray-300 p-2">City</th>
                  <th className="border border-gray-300 p-2">Rent</th>
                  <th className="border border-gray-300 p-2">Rooms</th>  
                  <th className="border border-gray-300 p-2">Website</th>
                  <th className="border border-gray-300 p-2">Link</th>
                  <th className="border border-gray-300 p-2">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">Tirana</td>
                  <td className="border border-gray-300 p-2"> 100 EUR</td>
                  <td className="border border-gray-300 p-2">2</td>
                  <td className="border border-gray-300 p-2">MerrJep</td>
                  <td className="border border-gray-300 p-2">
                    <a href="https://www.merrjep.com/shpallja/patundshmeri/shtepi/me-qera/prishtine/himare-jap-me-qira-apartament-ne-plazh-72-m2/7910179" target="_blank" rel="noopener noreferrer">Link</a>
                  </td>
                  <td className="border border-gray-300 p-2">+383 44 123 456</td>
                </tr>
              </tbody>
            </table>

          <div className="mt-4">
            <h2 className='text-lg font-medium text-zinc-800 dark:text-zinc-100 text-center pb-0'>Suggested Areas to Live</h2>
            <ul className="list-disc list-inside">
              <li>RUGA E KAVAJA </li>
              <li>Skanderberg Square</li>
             
            </ul>
          </div>
          <div className="mt-4">
            <h2 className='text-lg font-medium text-zinc-800 dark:text-zinc-100 text-center pb-0'>Checklists</h2>
            <ul className="list-disc list-inside">
              <li>Long term rental contract</li>
              <li>Air conditions</li>
              <li>Heat (water)</li>
              <li>Elevator/lift</li>
              <li>Insulation/Noise/Separation</li>
            </ul>
          </div>

          
          </div>
        </div>
      </div>



     


    </article>
  );
};
