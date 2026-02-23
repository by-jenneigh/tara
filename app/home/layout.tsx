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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-[#d1f3c5]">
      <div className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-[#d1f3c5] dark:bg-[#d1f3c5] sm:items-start">
        {children}
        <Navigation />
      </div>
    </div>
  );
}
