import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/src/components/layouts/whatsapp-button";
import { ModalTransitionWrapper } from "@/src/components/layouts/modal-transition-wrapper";

export const metadata: Metadata = {
  title: "Lyfshilp",
  description: "Lyfshilp navigation experience.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <ModalTransitionWrapper modal={modal} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
