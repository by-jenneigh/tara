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
    <div
      className="flex items-center justify-center font-sans"
      style={{
        backgroundImage: "url('/bg-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="flex w-full flex-col items-center justify-center pt-12 pb-30 px-16  sm:items-center">
        {children}
        <Navigation />
      </div>
    </div>
  );
}
