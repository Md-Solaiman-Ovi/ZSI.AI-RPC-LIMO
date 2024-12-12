"use client";
import { Provider } from "react-redux";
import store from "@/redux/store";
import TextMove from "@/components/TextMove";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <Provider store={store}>
      <div className="sticky top-0 z-30">
        {pathname === "/" && <TextMove />}
      </div>
      <Navbar />
      {children}
    </Provider>
  );
}
