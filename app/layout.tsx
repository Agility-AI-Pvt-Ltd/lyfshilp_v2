import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/src/components/layouts/whatsapp-button";

export const metadata: Metadata = {
  title: "Lyfshilp",
  description: "Lyfshilp navigation experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
