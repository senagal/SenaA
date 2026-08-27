import "./globals.css";
import Nav from "../components/Nav";
import ScrollToTopButton from "../components/ScrollToTopButton";

export const metadata = {
  title: "Sena Abdisa Gurmessa | Portfolio",
  description:
    "Sena Abdisa Gurmessa — Computer Science Graduate, currently interested in Data Science.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="blob shape-1"></div>
        <div className="blob shape-2"></div>
        <Nav />
        <main>{children}</main>
        <ScrollToTopButton />
        <footer>
          <p>&copy; 2026 Sena Abdisa Gurmessa. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
