import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Component } from "@/domain/models/component";
import { getCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { MENU_ID_LIST } from "@/lib/data";

const IMG1 = "/history2.jpg";

const IMG2 = "/contrutiction.jpg";
type props = {
    aboutComponent: Component;
};

export const AboutUs = ({ aboutComponent }: props) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const t = useTranslations("About");
    return (
        <main className="bg-white dark:bg-black w-full h-auto">
            <section
                id={MENU_ID_LIST.WHOARE}
                className="xl:max-w-[1248px] mx-auto w-full xl:h-[529px] h-auto px-3 xl:px-0 py-4 xl:py-0 gap-5 xl:gap-0 mt-[20px] lg:mt-[80px] flex flex-col xl:flex-row items-center dark:bg-black"
            >
                <div data-aos="fade-right" className="relative w-full max-w-[700px] h-[401px] hidden xl:flex">
                    <div className="w-[350.82px] absolute h-[300px] rounded-[14px] left-56 top-0 bg-black">
                        <img src={IMG2} alt="" className="w-full h-full object-cover  rounded-[14px]" />
                    </div>
                    <div className="w-[350.82px] absolute h-[300px] rounded-[14px] top-36  bg-black">
                        <img src={IMG1} alt="" className="w-full h-full object-cover rounded-[14px]" />
                    </div>
                </div>
                <div data-aos="fade-left" className="w-full flex flex-col gap-8">
                    <h3 className="font-bold text-center md:text-start text-2xl text-slate-950 dark:text-slate-100">{t("weHistory")}</h3>
                    <p className="w-full text-sm text-justify text-gray-950 dark:text-gray-100 xl:text-start xl:text-base">
                        {t("weHistoryContext")}
                    </p>
                    <div>
                        <Button className="bg-primary-blue flex items-center gap-1  dark:text-white">
                            <Link href="/about">
                                <span>{t("buttonMore")}</span>
                            </Link>
                            <ArrowRight width={16} />
                        </Button>
                    </div>
                </div>
                <div className="xl:w-[473.82px] w-full h-[200px] md:h-[340px] flex  xl:hidden rounded-[14px] bg-black">
                    <img src={IMG1} className="w-full h-full object-cover rounded-[14px]" alt="" />
                </div>
            </section>
        </main>
    );
};
