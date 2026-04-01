import type { Metadata } from "next";
import Navigation from "@/app/components/common/navigation";
import "leaflet/dist/leaflet.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "TARA",
  description: "Travel and Route Assistance",
};

export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Suspense>
        <div className="flex-1">{children}</div>
        <Navigation />
      </Suspense>
    </div>
  );
}
