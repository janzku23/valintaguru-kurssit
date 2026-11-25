import type { ReactNode } from "react";
import { HomeAuthProvider } from "@/app/home/HomeAuthProvider";
import HomeHeaderClient from "@/app/home/HomeHeaderClient";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <HomeAuthProvider>
      <HomeHeaderClient />
      {children}
    </HomeAuthProvider>
  );
}
