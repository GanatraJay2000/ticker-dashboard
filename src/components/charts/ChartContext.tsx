// ChartContext.tsx
import { createContext, useContext } from "react";
import type { IChartApi } from "lightweight-charts";

interface ChartContextProps {
  chart: IChartApi | null;
}

const ChartContext = createContext<ChartContextProps>({ chart: null });

export const useChart = () => useContext(ChartContext);

export default ChartContext;
