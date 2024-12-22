import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { FloatingPanelComponent } from "@/components/FloatingPanel";
import { CompoundPERCountries } from "@/components/CompoundPERCountries";


export default function Home() {
  return (
    <div className="mr-44 ml-44 items-center justify-center">
      
          <ExampleJsx />
          
    
    </div>
  );
}

const ExampleJsx = () => {
  return (
    <article>
      <h1 className="text-7xl font-extrabold text-center space-tighter">
        High Yield Savings Accounts
      </h1>

     
      

      <CompoundPERCountries />

    <div className=" prose-p:text-zinc-500 dark:prose-p:text-zinc-400 pb-10">
        <h2 className="text-4xl font-bold">More Links for Deals</h2>
        <p>
            Check out these additional offers that utilize compound interest:
        </p>
        <ul>
            <li>
                <a href="https://www.mybanktracker.com/banking-offers?src=694273&bankingrateproducttypes=mma,savings&CCID=20445958204686240&QTR=ZZf202407242041230Za20445958Zg255Zw0Zm0Zc204686240Zs35272ZZ&CLK=102241124071722732&&exp=y" target="_blank" rel="noopener noreferrer">
                    MyBankTracker Banking Offers
                </a>
            </li>
        </ul>
    </div>



     


    </article>
  );
};
