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
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
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
