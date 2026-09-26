import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import AuthProvider from "@/components/AuthProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "StockSense | Modern Inventory Management",
  description: "A centralized, real-time, easy-to-use Inventory Management System.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <AppProvider>
              <div className="app-container">
                {children}
              </div>
            </AppProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
