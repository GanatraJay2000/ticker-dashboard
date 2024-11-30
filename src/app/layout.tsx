import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import TopNav from "./_components/TopNav";
import BottomBar from "./_components/BottomBar";

export const metadata: Metadata = {
  title: "Ticker Dashboard",
  description: "A Dashboard to view live crypto prices",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} h-full`}>
        <body className="dark flex h-full flex-col bg-zinc-900">
          <TopNav />
          <SignedOut>
            <div className="flex h-full items-center justify-center p-3 text-center text-lg font-light">
              Please Login to access Dashboard!
            </div>
          </SignedOut>
          <SignedIn>
            <main className="grow overflow-y-auto">{children}</main>
          </SignedIn>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
