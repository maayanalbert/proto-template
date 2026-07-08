import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createPrototypeSiteLayout } from "proto-plugin";
import "proto-plugin/styles/globals.css";
import { Toaster } from "sonner";

import "./globals.css";

const PrototypeSiteLayout = createPrototypeSiteLayout();

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Prototypes",
  description: "Shareable UI prototypes built with proto-plugin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full overflow-hidden antialiased`}>
      <body className="flex h-full min-h-0 flex-col overflow-hidden bg-neutral-950 text-neutral-100">
        <PrototypeSiteLayout>{children}</PrototypeSiteLayout>
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  );
}
