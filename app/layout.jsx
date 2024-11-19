import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-[300vh] overflow-x-hidden">{children}</body>
    </html>
  );
}
