// Candlestick.tsx
"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { useChart } from "./ChartContext";
import { type ISeriesApi, type CandlestickData } from "lightweight-charts";

interface CandlestickSeriesProps {
  data: CandlestickData[];
}

const CandlestickSeries: React.FC<CandlestickSeriesProps> = ({ data }) => {
  const { chart } = useChart();
  const [series, setSeries] = useState<ISeriesApi<"Candlestick"> | null>(null);

  useEffect(() => {
    if (chart && !series) {
      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#1affb9",
        wickUpColor: "#1affb9",
        downColor: "#ff5c5c",
        wickDownColor: "#ff5c5c",
      });
      setSeries(candlestickSeries);
    }
  }, [chart, series]);

  useEffect(() => {
    if (series) {
      series.setData(data);
    }
  }, [series, data]);

  return null;
};

export default CandlestickSeries;
