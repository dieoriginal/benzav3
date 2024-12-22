import React from 'react';

// Main component for the Starter Page
const StarterPage: React.FC = () => {
  return (
   <div>
    <h1>Starter Page</h1>

  <h1>Free Futures Data</h1>
  <ul>
    <li><a href="https://finance.yahoo.com/chart/ZW%3DF#eyJsYXlvdXQiOnsiaWludGVydmFsIjp0cnVlLCJwZXJpb2RpY2l0eSI6MSwibWludXRlVW5pdCI6Im1pbnV0ZSIsImNhbmRsZVdpZHRoIjoxLjAyNTA5NjUyNTA5NjUyNTIsImZsaXBwZWQiOmZhbHNlLCJ2b2x1bWVVbmRlcmxheSI6dHJ1ZSwiYWRqIjp0cnVlLCJjcm9zc2hhaXIiOnRydWUsImNoYXJ0VHlwZSI6Im1vdW50YWluIiwiZXh0ZW5kZWQiOmZhbHNlLCJtYXJrZXRTZXNzaW9ucyI6e30sImFnZ3JlZ2F0aW9uVHlwZSI6Im9obGMiLCJjaGFydFNjYWxlIjoicGVyY2VudCIsInN0dWRpZXMiOnsi4oCMdm9sIHVuZHLigIwiOnsidHlwZSI6InZvbCB1bmRyIiwiaW5wdXRzIjp7IlNlcmllcyI6InNlcmllcyIsImlkIjoi4oCMdm9sIHVuZHLigIwiLCJkaXNwbGF5Ijoi4oCMdm9sIHVuZHLigIwifSwib3V0cHV0cyI6eyJVcCBWb2x1bWUiOiIjMGRiZDZlZWUiLCJEb3duIFZvbHVtZSI6IiNmZjU1NDdlZSJ9LCJwYW5lbCI6ImNoYXJ0IiwicGFyYW1ldGVycyI6eyJjaGFydE5hbWUiOiJjaGFydCIsImVkaXRNb2RlIjp0cnVlLCJwYW5lbE5hbWUiOiJjaGFydCJ9LCJkaXNhYmxlZCI6ZmFsc2V9fSwicGFuZWxzIjp7ImNoYXJ0Ijp7InBlcmNlbnQiOjEsImRpc3BsYXkiOiJaVz1GIiwiY2hhcnROYW1lIjoiY2hhcnQiLCJpbmRleCI6MCwieUF4aXMiOnsibmFtZSI6ImNoYXJ0IiwicG9zaXRpb24iOm51bGx9LCJ5YXhpc0xIUyI6W10sInlheGlzUkhTIjpbImNoYXJ0Iiwi4oCMdm9sIHVuZHLigIwiXX19LCJzZXRTcGFuIjp7Im11bHRpcGxpZXIiOjUsImJhc2UiOiJkYXkiLCJwZXJpb2RpY2l0eSI6eyJpbnRlcnZhbCI6NSwicGVyaW9kIjoxLCJ0aW1lVW5pdCI6Im1pbnV0ZSJ9LCJzaG93RXZlbnRzUXVvdGUiOnRydWUsImZvcmNlTG9hZCI6dHJ1ZX0sIm91dGxpZXJzIjpmYWxzZSwiYW5pbWF0aW9uIjp0cnVlLCJoZWFkc1VwIjp7InN0YXRpYyI6dHJ1ZSwiZHluYW1pYyI6ZmFsc2UsImZsb2F0aW5nIjpmYWxzZX0sImxpbmVXaWR0aCI6MiwiZnVsbFNjcmVlbiI6dHJ1ZSwic3RyaXBlZEJhY2tncm91bmQiOnRydWUsImNvbG9yIjoiIzAwODFmMiIsInN5bWJvbHMiOlt7InN5bWJvbCI6IlpXPUYiLCJzeW1ib2xPYmplY3QiOnsic3ltYm9sIjoiWlc9RiIsInF1b3RlVHlwZSI6IkZVVFVSRSIsImV4Y2hhbmdlVGltZVpvbmUiOiJBbWVyaWNhL05ld19Zb3JrIiwicGVyaW9kMSI6MTczMTkxNzQwMCwicGVyaW9kMiI6MTczMjQ3NDgwMH0sInBlcmlvZGljaXR5IjoxLCJpbnRlcnZhbCI6NSwidGltZVVuaXQiOiJtaW51dGUiLCJzZXRTcGFuIjp7Im11bHRpcGxpZXIiOjUsImJhc2UiOiJkYXkiLCJwZXJpb2RpY2l0eSI6eyJpbnRlcnZhbCI6NSwicGVyaW9kIjoxLCJ0aW1lVW5pdCI6Im1pbnV0ZSJ9LCJzaG93RXZlbnRzUXVvdGUiOnRydWUsImZvcmNlTG9hZCI6dHJ1ZX19">ZW=F Interactive Stock Chart</a></li>
    <li><a href="https://www.cmegroup.com/watchlists/details.1732424753463565387.C.html">Watchlist Details - CME Group</a></li>
    <li><a href="https://www.cmegroup.com/markets/agriculture/grains/corn.html">Corn Overview - CME Group</a></li>
    <li><a href="https://www.cmegroup.com/market-data.html">CME Group Market Data - CME Group</a></li>
    <li><a href="https://dataservices.cmegroup.com/pages/CME-Data-Via-API">CME Group Market Data APIs (CME Details page)</a></li>
    <li><a href="https://www.cmegroup.com/markets/agriculture/grain-and-oilseed.html">Grain and Oilseed futures and options - CME Group</a></li>
    <li><a href="https://www.ers.usda.gov/data-products/food-price-outlook/">USDA ERS - Food Price Outlook</a></li>
    <li><a href="https://www.ers.usda.gov/data-products/food-price-outlook/food-price-outlook/#Producer%20Price%20Index">USDA ERS - Food Price Outlook</a></li>
    <li><a href="https://www.ers.usda.gov/data-products/food-price-outlook/food-price-outlook/#Consumer%20Price%20Index">USDA ERS - Food Price Outlook</a></li>
    <li><a href="https://insider-week.com/en/cot/" target="_blank">Commitment of Traders (CoT) - Insider Week</a></li>
    <li><a href="https://www.investing.com/commodities/us-wheat-historical-data"></a></li>
  </ul>
  </div>

    
  );
};

export default StarterPage;
