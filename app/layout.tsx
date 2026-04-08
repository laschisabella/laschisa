import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { I18nProvider } from "@/providers/I18nProvider";
import { cookies } from "next/headers";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "laschisa.dev",
  description: "Engineering scalable digital systems with a focus on reliability, performance, and security.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  
  const rawLocale = cookieStore.get("locale")?.value;
  const locale: "en" | "pt" = rawLocale === "pt" || rawLocale === "en" ? rawLocale : "en";

  const rawTheme = cookieStore.get("theme")?.value;
  const theme: "light" | "dark" = rawTheme === "dark" || rawTheme === "light" ? rawTheme : "light";
  return (
    <html
      lang={locale}
      className={cn("font-sans", inter.variable, theme === "dark" && "dark")}
    >
      <body>
        <ThemeProvider initialTheme={theme}>
          <I18nProvider initialLocale={locale}>
            <Header />
            {children}
            <Toaster position="top-center"/>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}