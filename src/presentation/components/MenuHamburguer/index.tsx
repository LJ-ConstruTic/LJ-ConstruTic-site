"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScroll } from "../Header/useScroll";
import { MENU_ID_LIST } from "@/lib/data";
import { useTranslations } from "next-intl";

type Props = {
    children: React.ReactNode;
};

const HamburgerMenu = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { handleClick } = useScroll();
    const t = useTranslations("header");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button className="flex items-center lg:hidden justify-center w-10 h-10 text-gray-700 focus:outline-none" onClick={toggleMenu}>
                {isOpen ? <X width={24} /> : <Menu width={24} />}
            </button>

            <nav
                className={`absolute top-12 right-0 bg-white dark:bg-black border border-gray-200 rounded-lg shadow-lg w-40 transition-transform duration-300 ${
                    isOpen ? "transform scale-100" : "transform scale-0"
                }`}
            >
                <ul className="flex flex-col space-y-2 p-4">
                    <li
                        className="hover:text-primary-blue text-sm hover:font-semibold"
                        onClick={(e: any) => handleClick(e, MENU_ID_LIST.WHOARE)}
                    >
                        <a href={`/#${MENU_ID_LIST.WHOARE}`}>{t("headWeAre")}</a>
                    </li>
                    <li
                        className="hover:text-primary-blue text-sm hover:font-semibold"
                        onClick={(e: any) => handleClick(e, MENU_ID_LIST.PRODUCTS)}
                    >
                        <a href={`/#${MENU_ID_LIST.PRODUCTS}`}>{t("headProduct")}</a>
                    </li>
                    <li
                        className="hover:text-primary-blue text-sm hover:font-semibold"
                        onClick={(e: any) => handleClick(e, MENU_ID_LIST.SERVICES)}
                    >
                        <a href={`/#${MENU_ID_LIST.SERVICES}`}>{t("headServices")}</a>
                    </li>
                    <li
                        className="hover:text-primary-blue text-sm hover:font-semibold"
                        onClick={(e: any) => handleClick(e, MENU_ID_LIST.CONTACT)}
                    >
                        <a href={`/#${MENU_ID_LIST.CONTACT}`}>{t("headContact")}</a>
                    </li>
                    <li>{children}</li>
                </ul>
            </nav>
        </div>
    );
};

export { HamburgerMenu };
