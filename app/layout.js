import Sidebar from "@/components/sidebar/sidebar";
import "./globals.css";

export const metadata = {
  title: "Амжилт тусламж хэсэг",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-white" lang="en">
      <body className="flex">
        <Sidebar />
        <main className="w-full text-black m-4">{children}</main>
      </body>
    </html>
  );
}
