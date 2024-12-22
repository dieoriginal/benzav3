import { useState, forwardRef } from 'react';

const CalculatorCard: React.FC = forwardRef((props, ref) => {
  const [initialCapital, setInitialCapital] = useState<number>(0);
  const [leverageRatio, setLeverageRatio] = useState<number>(0);
  const [maxDrop, setMaxDrop] = useState<number>(0);
  const [marginThreshold, setMarginThreshold] = useState<number>(0);

  const totalNotionalExposure = initialCapital * leverageRatio;
  const capitalAfterDrop = initialCapital * (1 - maxDrop);
  const requiredCapitalToAvoidLiquidation = marginThreshold * totalNotionalExposure;
  const isSufficientCapital = capitalAfterDrop > requiredCapitalToAvoidLiquidation;

  return (
    <div ref={ref} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Trading Risk Calculator</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Initial Capital (C)</label>
          <input
            type="number"
            value={initialCapital}
            onChange={(e) => setInitialCapital(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Leverage Ratio (LL)</label>
          <input
            type="number"
            value={leverageRatio}
            onChange={(e) => setLeverageRatio(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Max Percentage Drop (D<sub>max</sub>)</label>
          <input
            type="number"
            step="0.01"
            value={maxDrop}
            onChange={(e) => setMaxDrop(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Maintenance Margin (M<sub>threshold</sub>)</label>
          <input
            type="number"
            step="0.01"
            value={marginThreshold}
            onChange={(e) => setMarginThreshold(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </form>

      <pre className="mt-4 p-4 bg-gray-100 rounded-md">
        <code>
          Total Notional Exposure (N): {totalNotionalExposure.toFixed(2)} {'\n'}
          Capital After Drop (C'): {capitalAfterDrop.toFixed(2)} {'\n'}
          Required Capital to Avoid Liquidation (C<sub>min</sub>): {requiredCapitalToAvoidLiquidation.toFixed(2)} {'\n'}
          Condition for Sufficient Capital (C' > C<sub>min</sub>): {isSufficientCapital ? 'True' : 'False'}
        </code>
      </pre>

      <p className="mt-2 text-sm text-gray-700">
        For your initial capital to be sufficient, the percentage of capital remaining after a major drop must be greater than the margin requirement as a proportion of your total notional exposure. This helps ensure that even after a significant price drop, your capital doesn't fall below the maintenance margin threshold, avoiding liquidation.
      </p>
    </div>
  );
});

export default CalculatorCard;
