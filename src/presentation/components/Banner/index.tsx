"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../ContainerRoot";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Item } from "@/domain/models/component";
import { getCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { useScroll } from "../Header/useScroll";
import { MENU_ID_LIST } from "@/lib/data";
import Image from "next/image";

const IMG_1 = "/banner1.jpg";
const IMG_2 = "/banner2.jpg";
const IMG_3 = "/banner3.jpg";

const bannerArray = [
    {
        name: "Tecnologia",
        imgUrl: IMG_1,
        tag: "software",
    },
    {
        name: "Manutenção",
        imgUrl: IMG_2,
        tag: "software_matenance",
    },
    {
        name: "Construção",
        imgUrl: IMG_3,
        tag: "software",
    },
];

type props = {
    bannerData: Item[];
};

export const Banner = ({ bannerData }: props) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const t = useTranslations("HomePage.banner");
    const { handleClick, targetId } = useScroll();

    return (
        <section className="w-full flex lg:flex-row flex-col lg:gap-0 h-auto">
            <div className="w-full relative h-full max-h-[500px] xl:max-h-[590px]">
                <Splide
                    className="w-full h-full reset-padding-margin"
                    options={{
                        type: "loop",
                        pagination: false,
                        arrows: false,
                        fixedWidth: "100%",
                        fixedHeight: "100%",
                        perPage: 1,
                        perMove: 1,
                        drag: "free",
                        interval: 3000,
                        rewind: true,
                        speed: 800,
                        width: "100%",
                    }}
                    style={{ padding: 0, margin: 0 }}
                >
                    {bannerArray?.map((item, idx) => (
                        <SplideSlide key={idx}>
                            <main data-aos="fade-down" className="w-full relative h-auto flex flex-col">
                                <section className="relative w-full h-auto xl:max-w-[1280px] mx-auto">
                                    <div className="w-full top-20 xl:top-28 absolute z-[100] px-3 xl:px-0 flex flex-col justify-center lg:justify-start items-center lg:items-start lg:gap-9 gap-8">
                                        <h4 className="lg:text-4xl xl:text-5xl md:text-3xl text-white text-2xl text-center md:text-start font-bold sm:leading-[50px] xl:leading-[65.35px]">
                                            {t("homTitle")}
                                        </h4>
                                        <p className="text-xs md:text-base text-center md:text-justify text-white lg:text-left xl:text-xl lg:max-w-[700px]">
                                            {t("homPresentation")}
                                        </p>
                                        <div className="flex justify-center md:justify-start">
                                            <Button
                                                onClick={(e: any) => handleClick(e, MENU_ID_LIST.CONTACT)}
                                                className="rounded-lg md:px-5 px-3 bg-primary-blue dark:text-white py-3 md:py-6 flex gap-1 items-center"
                                            >
                                                <span>{t("buttonContact")}</span>
                                                <ArrowRight width={16} />
                                            </Button>
                                        </div>
                                    </div>
                                </section>
                                <div className="w-full h-full bg-black relative">
                                    <Image
                                        loading="lazy"
                                        width={1000}
                                        height={1000}
                                        src={item.imgUrl}
                                        alt=""
                                        className="w-full h-[400px] xl:h-[580px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-70"></div>
                                </div>
                            </main>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
};
