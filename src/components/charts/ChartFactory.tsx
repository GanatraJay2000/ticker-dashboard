// ChartFactory.tsx
"use client";
import React, { useEffect, useState, type ReactNode } from "react";
import { createChart, ColorType, type IChartApi } from "lightweight-charts";
import ChartContext from "./ChartContext";

interface ChartProps {
  children: ReactNode;
}

const Chart: React.FC<ChartProps> = ({ children }) => {
  const [chart, setChart] = useState<IChartApi | null>(null);
  const chartContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chartElement = chartContainerRef.current;
    if (!chartElement) return;

    const chartInstance = createChart(chartElement, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#d1d4dc",
      },
      grid: {
        vertLines: { color: "#28282b" },
        horzLines: { color: "#28282b" },
      },
      width: chartElement.clientWidth,
      height: chartElement.clientHeight,
    });

    chartInstance.timeScale().fitContent();
    setChart(chartInstance);

    const handleResize = () => {
      if (!chartElement || !chartInstance) return;
      chartInstance.applyOptions({
        width: chartElement.clientWidth,
        height: chartElement.clientHeight,
      });
      chartInstance.timeScale().fitContent();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.remove();
      setChart(null);
    };
  }, []);

  return (
    <ChartContext.Provider value={{ chart }}>
      <div
        className="h-full w-full"
        ref={chartContainerRef}
        style={{ height: "100%", width: "100%" }} // Ensure the container has size
      >
        {children}
      </div>
    </ChartContext.Provider>
  );
};

export default Chart;
