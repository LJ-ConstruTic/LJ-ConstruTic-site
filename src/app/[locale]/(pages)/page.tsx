import { ToogleLanguage } from "@/components/SelectLanguage";
import { ModeToggle } from "@/components/ui/toogleMode";
import { useTranslations } from "next-intl";

export default function Home() {
    const t = useTranslations("HomePage");
    return (
        <main>
            <div className="flex items-center gap-1">
                <ToogleLanguage />
                <ModeToggle />
            </div>
        </main>
    );
}
