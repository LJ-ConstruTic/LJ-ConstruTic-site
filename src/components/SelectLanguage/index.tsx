"use client";
import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePathname } from "@/lib/locale/navigation";
import { useRouter } from "@/lib/locale/navigation";
import { getCookie } from "cookies-next";

export function ToogleLanguage() {
    const pathname = usePathname();
    const router = useRouter();
    const lang = getCookie("NEXT_LOCALE");

    function toogleLanguage(locale: string) {
        router.replace(pathname, { locale: locale });
    }
    return (
        <Select onValueChange={(locale) => toogleLanguage(locale)} defaultValue={lang ?? "pt"}>
            <SelectTrigger className="w-[120px]">
                <SelectValue placeholder={lang} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="en" disabled={lang === "en"}>
                        english
                    </SelectItem>
                    <SelectItem value="pt" disabled={lang === "pt"}>
                        portuguese
                    </SelectItem>
                    <SelectItem value="es" disabled={lang === "es"}>
                        espanhol
                    </SelectItem>
                    <SelectItem value="un" disabled={lang === "un"}>
                        umbundu
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
