import CandlestickSeries from "~/components/charts/CandleStick";
import Chart from "~/components/charts/ChartFactory";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

function Left() {
  const candlestickData = [
    { time: "2023-01-01", open: 100, high: 110, low: 90, close: 105 },
    { time: "2023-01-02", open: 105, high: 115, low: 95, close: 100 },
  ];
  return (
    <div className="-left h-full w-full">
      <Tabs defaultValue="price" className="flex h-full w-full flex-col">
        <TabsList className="m-0 flex h-12 justify-start rounded-none border-b border-b-zinc-600 bg-zinc-900 py-0">
          <TabsTrigger
            value="price"
            className="m-0 h-full rounded-none border-b-2 !bg-inherit px-5 aria-selected:border-b-indigo-500"
          >
            Price
          </TabsTrigger>
          <TabsTrigger
            value="depth"
            className="m-0 h-full rounded-none border-b-2 !bg-inherit px-5 aria-selected:border-b-indigo-500"
          >
            Depth
          </TabsTrigger>
          <TabsTrigger
            value="details"
            className="m-0 h-full rounded-none border-b-2 !bg-inherit px-5 aria-selected:border-b-indigo-500"
          >
            Details
          </TabsTrigger>
        </TabsList>
        <TabsContent value="price" className="m-0 w-full grow p-0">
          <Chart>
            <CandlestickSeries data={candlestickData} />
          </Chart>
        </TabsContent>
        <TabsContent value="depth">Depth Chart</TabsContent>
        <TabsContent value="details">Some details</TabsContent>
      </Tabs>
    </div>
  );
}

export default Left;
