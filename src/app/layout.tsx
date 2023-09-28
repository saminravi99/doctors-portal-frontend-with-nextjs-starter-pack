import Providers from "@/lib/Providers";
import "./globals.css";
import Footer from "@/components/ui/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>
            {children}
            <Footer />
        </body>
      </Providers>
    </html>
  );
}
