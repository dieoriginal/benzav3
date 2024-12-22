'use client';
import React, { useState, forwardRef } from 'react';
import { TransitionPanel } from '@/components/core/transition-panel';

export const CompoundPERCountries = forwardRef((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = [
    {
      title: 'Switzerland',
      subtitle: 'Switzerland',
      content:
        'Private Banks with Fixed-Rate Accounts Swiss banks offer fixed-rate deposit accounts and high-interest savings for non-residents, though the yields are modest given the stability of the Swiss franc. Rates for these accounts typically hover around 0.5–1.5%, but private banks may offer higher rates for large deposits or long-term commitments. Swiss Government Bonds: While not a traditional savings account, Swiss government bonds offer stable, reliable returns. Yields on longer-term Swiss government bonds range around 1–2%, with compounding available if reinvested.',
    },
    {
      title: 'USA',
      additionalContent: (
        <div>
        
         
          <table>
            <thead>
              <tr>
                <th>Bank</th>
                <th>APY</th>
                <th>FDIC Insured</th>
                <th>Minimum Balance</th>
                <th>Monthly Fees</th>
                <th>Additional Features</th>
                <th>Sign Up Link</th>
                <th>Payment Frequency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>American Express</td>
                <td>4.25%</td>
                <td>Up to $250,000</td>
                <td>None</td>
                <td>None</td>
                <td></td>
                <td><a href="https://www.americanexpress.com">Link</a></td>
              </tr>
              <tr>
                <td>UFB Direct</td>
                <td>5.25%</td>
                <td>Up to $250,000</td>
                <td>None</td>
                <td>None</td>
                <td>Additional 0.20% APY with UFB Freedom checking account, $5,000 monthly direct deposits, $10,000 minimum balance, 10 approved debit transactions per statement cycle</td>
                <td><a href="https://www.ufbdirect.com">Link</a></td>
              </tr>
              <tr>
                <td>Goldman Sachs</td>
                <td>4.40%</td>
                <td>Up to $250,000</td>
                <td>None</td>
                <td>None</td>
                <td>Same-day transfers for amounts up to $100,000</td>
                <td><a href="https://www.marcus.com">Link</a></td>
              </tr>
              <tr>
                <td>Ally Bank</td>
                <td>4.20%</td>
                <td>Up to $250,000</td>
                <td>None</td>
                <td>None</td>
                <td></td>
                <td><a href="https://www.ally.com">Link</a></td>
              </tr>
              <tr>
                <td>Sofi</td>
                <td>4.6% (savings), 5% (checking)</td>
                <td>Up to $2 million</td>
                <td>None</td>
                <td>None</td>
                <td>$300 signup bonus with direct deposits</td>
                <td><a href="https://www.sofi.com">Link</a></td>
              </tr>
              <tr>
                <td>Laurel Road</td>
                <td>5.15%</td>
                <td>Up to $250,000</td>
                <td>None</td>
                <td>None</td>
                <td></td>
                <td><a href="https://www.laurelroad.com">Link</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: 'Eurozone',
      subtitle: 'Eurozone',
      content:
        'European Online Banks: Some online banks in the Eurozone offer higher-yield accounts in EUR. Rates are generally lower than in the U.S. but competitive for the stability. Bunq (Netherlands) and Raisin (a platform that partners with European banks) offer options in the range of 2–3% annually. Euro Government Bonds: German or French government bonds yield about 2-3% annually for longer terms and provide high stability. You can compound interest through reinvestment in additional bonds.',
    },
    {
      title: 'Singapore',
      subtitle: 'Singapore',
      content:
        'Fixed Deposit Accounts: Banks like DBS, OCBC, and UOB in Singapore offer fixed deposits with annual yields around 2.5–3.5%. While these rates are relatively modest, the accounts provide low currency risk and compounding options. Singapore Savings Bonds: The Singapore Savings Bonds (SSB) offer an average annual return of about 2.5–3.5% over ten years, with compounding if you reinvest. These are highly stable, government-backed bonds with monthly purchasing opportunities and minimal risk.',
    },
    {
      title: 'Argentina',
      subtitle: 'Argentina',
      content:
        'Argentina has extremely high interest rates, often exceeding 100% annually, largely due to its inflationary economy. However, this high yield comes with currency and inflation risks.',
    },
    {
      title: 'Turkey',
      subtitle: 'Turkey',
      content:
        'Turkey offers high-interest savings accounts, frequently above 20%, especially in lira-based accounts. The Turkish Central Bank adjusts rates to manage inflation, which provides opportunities for higher yields, albeit with currency risk.',
    },
    {
      title: 'Nigeria',
      subtitle: 'Nigeria',
      content:
        'Some Nigerian banks offer competitive yields on savings and fixed deposit accounts, with annual rates sometimes reaching 10–15% or more, reflecting the high inflation rate in the economy.',
    },
    {
      title: 'Brazil',
      subtitle: 'Brazil',
      content:
        'Brazilian banks offer relatively high yields on savings and fixed-term deposits, often between 8-13%, due to inflation-adjusted interest policies.',
    },
    {
      title: 'India',
      subtitle: 'India',
      content:
        'India’s fixed deposits and savings accounts often provide higher interest rates than developed countries, especially in smaller banks, ranging from 6-8% annually.',
    },
    {
      title: 'Vietnam',
      subtitle: 'Vietnam',
      content:
        'Vietnamese banks offer high-interest rates on savings and fixed deposit accounts, around 6-8% per annum, which attracts domestic and foreign investors.',
    },
    {
      title: 'South Africa',
      subtitle: 'South Africa',
      content:
        'South African interest rates have risen in response to inflation, offering savings and deposit rates around 5-7% annually.',
    },
  ];

  return (
    <div ref={ref}>
      <div className='mb-4 flex space-x-2'>
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-md px-3 py-1 text-sm font-medium ${
              activeIndex === index
                ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className='overflow-hidden border-t border-zinc-200 dark:border-zinc-700'>
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          variants={{
            enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
            center: { opacity: 1, y: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
          }}
        >
          {ITEMS.map((item, index) => (
            <div key={index} className='py-2'>
              <h3 className='mb-2 font-medium text-zinc-800 dark:text-zinc-100'>
                {item.subtitle}
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>{item.content}</p>
              {item.additionalContent && (
                <div className='mt-4 text-zinc-600 dark:text-zinc-400'>
                  {item.additionalContent}
                </div>
              )}
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
});
