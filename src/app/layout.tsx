import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan Andelkar — Machine Learning Engineer | Portfolio",
  description: "Portfolio of Rohan Andelkar — CS undergraduate (Class of 2027) specialising in Data Analytics, Machine Learning, Cloud Computing (Azure, IBM Cloud), and Cybersecurity. Proven ability to develop AI-driven applications and build interactive Power BI dashboards.",
  keywords: ["Rohan Andelkar", "machine learning", "data analytics", "Power BI", "Azure", "IBM Cloud", "cybersecurity", "Python", "React", "portfolio", "GATE 2026"],
  authors: [{ name: "Rohan Andelkar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
