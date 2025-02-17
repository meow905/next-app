import "./globals.css";
import "@/app/button.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] overflow-x-hidden">{children}</body>
    </html>
  );
}
