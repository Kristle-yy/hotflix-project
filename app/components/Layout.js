"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname === "/login" || pathname === "/signup";

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}