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
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-[#d1f3c5]">
      <div className="flex w-full flex-col items-center justify-center px-16 bg-[#d1f3c5] dark:bg-[#d1f3c5] sm:items-center">
        {children}
        <Navigation />
      </div>
    </div>
  );
}
