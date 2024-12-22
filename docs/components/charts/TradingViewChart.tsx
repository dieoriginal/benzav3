'use client';

import React, { useEffect, useRef } from 'react';


interface TradingViewChartProps {
  symbol: string; 
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({ symbol }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TradingView library
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js'; // CDN for TradingView library
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      
      const widget = new (window as any).TradingView.widget({
        container_id: chartRef.current?.id, // ID of the div where the chart will be rendered
        symbol: symbol,
        interval: 'D', // Default time interval
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1', // Line chart
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        hideideas: true,
        save_image: false,
        studies: [],

      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [symbol]);

  return <div ref={chartRef} id="tradingview_chart" style={{ height: '500px', width: '100%' }} />;
};

export default TradingViewChart;
