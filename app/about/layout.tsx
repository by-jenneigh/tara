import type { Metadata } from "next";
import Navigation from "@/app/components/common/navigation";

export const metadata: Metadata = {
  title: "TARA",
  description: "Travel and Route Assistance",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center bg-zinc-50 font-sans dark:bg-white">
      <main className="flex w-full min-h-screen flex-col items-center pt-5 pb-20 px-10 bg-white dark:bg-white sm:items-center">
        {children}
      </main>

      <Navigation />
    </div>
  );
}
