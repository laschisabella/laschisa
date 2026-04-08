import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { I18nProvider } from "@/providers/I18nProvider";
import { cookies } from "next/headers";

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
  return (
    <html
      lang="en"
      className={cn("font-sans", inter.variable)}
    >
      <body>
          <I18nProvider initialLocale={locale}>
            <Header />
            {children}
            <Footer />
          </I18nProvider>
      </body>
    </html>
  );
}
