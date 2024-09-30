import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LoaderTop } from "@/components/LoaderTop";
import "aos/dist/aos.css";
import { AosContainer } from "@/components/Aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lj Construtic",
    description: "",
};

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = useMessages();
    return (
        <html lang="en">
            <body className={cn(inter.className, "bg-white  dark:bg-[#1C1C1C]")}>
                <LoaderTop />
                <AosContainer />
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="@ljconstrutic-site">
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        <Header />
                        {children}
                        <Footer />
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
