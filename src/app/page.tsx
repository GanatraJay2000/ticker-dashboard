import Left from "./_components/Sections/Left";
import Top from "./_components/Sections/Top";
import TopAlert from "./_components/Sections/TopAlert";

export default function HomePage() {
  return (
    <div className="grid h-full grid-rows-[auto,1fr]">
      <TopAlert />
      <div className="grid h-full grid-cols-[3fr,1fr] grid-rows-[auto,1fr]">
        <Top />
        <div className="-right row-span-2 border-l border-l-zinc-600">
          RIGHT
        </div>
        <Left />
      </div>
    </div>
  );
}
