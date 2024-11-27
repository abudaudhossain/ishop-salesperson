import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import "../../globals.css";
import Navbar from "../../components/Navbar";
import { getMessages } from "next-intl/server";
import { StoreProvider } from "@/lib/context/StoreContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default async function RootLayout({ children }) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <Navbar />
            {children}
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
