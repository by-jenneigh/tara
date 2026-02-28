import type { Metadata } from "next";
import Navigation from "@/app/components/common/navigation";

export const metadata: Metadata = {
  title: "TARA",
  description: "Travel and Route Assistance",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center bg-zinc-50 font-sans dark:bg-[#d1f3c5]">
      <main className="flex w-full min-h-screen flex-col items-center px-16 bg-[#d1f3c5] dark:bg-[#d1f3c5] sm:items-center">
        {children}
      </main>

      <Navigation />
    </div>
  );
}
