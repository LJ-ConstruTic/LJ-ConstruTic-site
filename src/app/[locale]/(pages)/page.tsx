import { HomeView } from "@/views/home";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("HomePage");
    return (
        <main>
            <HomeView />
        </main>
    );
}
