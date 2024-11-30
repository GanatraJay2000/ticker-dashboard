import React, { Fragment } from "react";
import { Separator } from "~/components/ui/separator";

const Metric = (props: { label: string; value: string }) => {
  return (
    <div className="flex w-28 flex-shrink-0">
      <div className="flex w-fit flex-col justify-center px-5">
        <div className="whitespace-nowrap text-xs text-zinc-400">
          {props.label}
        </div>
        <div className="whitespace-nowrap text-xs font-semibold text-zinc-200">
          {props.value}
        </div>
      </div>
    </div>
  );
};

function Top() {
  const metrics = [
    { label: "Oracle Price", value: "$3,577.2" },
    { label: "24h Change", value: "↑ 2.5%" },
    { label: "24h Volume", value: "$1.2B" },
    { label: "24h Trades", value: "15k" },
    { label: "Open Interest", value: "$500M" },
    { label: "1h Funding", value: "0.01%" },
    { label: "Next Funding", value: "In 30m" },
    { label: "Maximum Leverage", value: "20.00×5.61×" }, // Add more metrics as needed
  ];
  return (
    <div className="-top flex h-12 overflow-x-auto border-b border-zinc-600">
      <div className="flex items-center text-nowrap px-20 text-lg font-bold text-white">
        ETH-USD
      </div>
      <Separator orientation="vertical" className="h-full bg-zinc-600" />
      <div className="flex grow overflow-x-auto">
        {/* Current Price */}
        <div className="flex items-center px-5">
          <div className="text-xl font-semibold">$3,579.50</div>
        </div>
        <div className="py-4">
          <Separator orientation="vertical" className="h-full bg-zinc-600" />
        </div>
        <div className="gradient flex grow overflow-x-auto">
          <div className="hide-scrollbar flex w-full overflow-x-auto">
            <div className="flex">
              {metrics.map((metric, idx) => (
                <Fragment key={metric.label}>
                  {idx > 0 && (
                    <div className="py-4">
                      <Separator
                        orientation="vertical"
                        className="h-full bg-zinc-600"
                      />
                    </div>
                  )}
                  <Metric label={metric.label} value={metric.value} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
