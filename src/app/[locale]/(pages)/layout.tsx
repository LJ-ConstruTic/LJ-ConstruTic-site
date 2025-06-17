import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "aos/dist/aos.css";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import toast, { Toaster } from "react-hot-toast";
import { LoaderTop } from "@/presentation/components/LoaderTop";
import { AosContainer } from "@/presentation/components/Aos";
import { ThemeProvider } from "@/presentation/providers/theme";
import { Header } from "@/presentation/components/Header";
import { Footer } from "@/presentation/components/Footer";
import { Suspense } from "react";
import Loading from "@/presentation/components/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "LjConstruTic",
    description:
        "Luís José Construção e Soluções Tecnológicas LDA ou LJConstruTic somos uma Empresa fundada em 2023 com propósito de prestar serviços de melhor qualidade nas áreas de Construção Civil e Urbana, Soluções Tecnológicas em Tecnologia de Comunicação e Informação TIC/IT.",
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
            <body className={cn(inter.className, "bg-white dark:bg-[#0C0A09] text-slate-900 dark:text-slate-100")}>
                <LoaderTop />
                <AosContainer />
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="@ljconstrutic-site">
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        <Suspense fallback={""}>
                            <Header />
                            {children}
                            <Toaster />
                            <Footer />
                        </Suspense>
                    </NextIntlClientProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
