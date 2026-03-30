import type { Metadata } from "next";
import Navigation from "@/app/components/common/navigation";

export const metadata: Metadata = {
  title: "TARA",
  description: "Travel and Route Assistance",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-5.png')" }}
      />
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative flex flex-col items-center justify-center px-16">
        {children}
        <Navigation />
      </div>
    </div>
  );
}
