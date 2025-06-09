"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ToogleLanguage } from "../SelectLanguage";
import { ModeToggle } from "../ui/toogleMode";
import { HamburgerMenu } from "../MenuHamburguer";
import { Language } from "@/domain/models/Language";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import { LanguageGatewayHttp } from "@/infra/gateway/Language/languageGateway";
import { ComponentGatewayHttp } from "@/infra/gateway/component/componentGatewayHttp";
import { HEADER_ID, MENU_ID_LIST } from "@/lib/data";
import { Component } from "@/domain/models/component";
import { getCookie } from "cookies-next";
import { useScroll } from "./useScroll";
import { useTranslations } from "next-intl";

export const Header = () => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const { handleClick } = useScroll();
    const [languages, setLanguages] = useState<Language[]>();
    const [componentHeader, setComponentHeader] = useState<Component>();
    const httpClient = new AxiosAdapter();
    const languageGateway = new LanguageGatewayHttp(httpClient);
    const componentGateway = new ComponentGatewayHttp(httpClient);
    const t = useTranslations("header");

    async function fetchLanguages() {
        try {
            const languages = await languageGateway.getLanguages();
            const languagesMap = languages.map((language) =>
                language.tag === "ub" ? { ...language, tag: "umb" } : language
            ) as Language[];
            if (languagesMap) {
                setLanguages(languagesMap);
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function getComponentHeader() {
        try {
            const response = (await componentGateway.getComponentByTag(HEADER_ID)) as Component;
            setComponentHeader(response);
        } catch (error) {}
    }

    useEffect(function getLanguages() {
        fetchLanguages();
    }, []);

    useEffect(function () {
        getComponentHeader();
    }, []);

    return (
        <section className="w-full h-20">
            <header className="fixed top-0 flex justify-between z-30 bg-white shadow-sm dark:bg-black items-center h-20 w-full px-3 xl:px-0">
                <div className="max-w-[1248px] mx-auto flex w-full justify-between gap-20">
                    <div className="flex items-center gap-10 w-full justify-between">
                        <h2 className="font-bold text-xl md:text-2xl cursor-pointer">
                            <Link href="/">
                                <span className="text-primary-blue">LJ</span>ConstruTic
                            </Link>
                        </h2>
                        <nav>
                            <ul className="lg:flex items-center hidden gap-4 lg:gap-6">
                                {/* {componentHeader?.items.map((item, idx: number) => {
                                    if (idx > 3) return null;
                                    return (
                                        <a href={`/#${item.tagId}`} key={idx} onClick={(e) => handleClick(e, item.tagId)}>
                                            <li className="cursor-pointer hover:text-primary-blue hover:font-semibold text-slate-600 text-lg dark:text-slate-100 font-semibold">
                                                {item?.tag[lang_current]!}
                                            </li>
                                        </a>
                                    );
                                })} */}
                                <a href={`/#${MENU_ID_LIST.WHOARE}`} onClick={(e) => handleClick(e, MENU_ID_LIST.WHOARE)}>
                                    <li className="cursor-pointer hover:text-primary-blue hover:font-semibold text-slate-600 text-lg dark:text-slate-100 font-semibold">
                                        {t("headWeAre")}
                                    </li>
                                </a>
                                <a href={`/#${MENU_ID_LIST.SERVICES}`} onClick={(e) => handleClick(e, MENU_ID_LIST.SERVICES)}>
                                    <li className="cursor-pointer hover:text-primary-blue hover:font-semibold text-slate-600 text-lg dark:text-slate-100 font-semibold">
                                        {t("headServices")}
                                    </li>
                                </a>
                                <a href={`/#${MENU_ID_LIST.PRODUCTS}`} onClick={(e) => handleClick(e, MENU_ID_LIST.PRODUCTS)}>
                                    <li className="cursor-pointer hover:text-primary-blue hover:font-semibold text-slate-600 text-lg dark:text-slate-100 font-semibold">
                                        {t("headProduct")}
                                    </li>
                                </a>
                                <a href={`/#${MENU_ID_LIST.CONTACT}`} onClick={(e) => handleClick(e, MENU_ID_LIST.CONTACT)}>
                                    <li className="cursor-pointer hover:text-primary-blue hover:font-semibold text-slate-600 text-lg dark:text-slate-100 font-semibold">
                                        {t("headContact")}
                                    </li>
                                </a>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-1 flex-1 justify-end">
                        <div className="hidden lg:block">
                            <ToogleLanguage languages={languages} />
                        </div>
                        <ModeToggle />
                        <HamburgerMenu>
                            <ToogleLanguage languages={languages} />
                        </HamburgerMenu>
                    </div>
                </div>
            </header>
        </section>
    );
};
