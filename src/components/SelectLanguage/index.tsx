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
        <Select className="outline-none!" onValueChange={(locale) => toogleLanguage(locale)} defaultValue={lang ?? "pt"}>
            <SelectTrigger className="md:w-[120px] w-[8rem] sm:w-[100px]">
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
