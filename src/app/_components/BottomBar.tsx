import { Separator } from "~/components/ui/separator";
import React from "react";
import { ExternalLink } from "lucide-react";

function BottomBar() {
  return (
    <div className="flex flex-col border-t border-t-zinc-600 p-1 text-sm md:flex-row">
      <span className="flex items-center gap-1">
        Operational <ExternalLink className="size-4" />
      </span>
      <Separator orientation="vertical" className="mx-2 bg-zinc-600" />
      <span>
        This site is operated by dYdX Ops subDAO, utilizing software open
        sourced by dYdX Trading Inc.{" "}
        <span className="underline">Learn more</span>
      </span>
      <Separator orientation="vertical" className="mx-2 bg-zinc-600" />
    </div>
  );
}

export default BottomBar;
