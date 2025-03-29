"use client";

import Link from "next/link";
import { Container } from "../ContainerRoot";
import React from "react";
import { IService } from "@/domain/models/Service";
import { getCookie } from "cookies-next";
import { MENU_ID_LIST } from "@/lib/data";
import { useTranslations } from "next-intl";

type props = {
    servicesType: IService[];
    isLoading?: boolean;
};

export const OurServices: React.FC<props> = ({ servicesType }) => {
    const t = useTranslations("Services");
    return (
        <Container>
            <section data-aos="fade-up" id={MENU_ID_LIST.SERVICES} className="w-full mt-[30px] lg:mt-[96px]">
                <h2 className="font-bold text-2xl lg:text-[32px] text-center">{t("title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-[59px] gap-6">
                    {servicesType?.map((service) => (
                        <ServiceItem key={service.idx} item={service} />
                    ))}
                </div>
            </section>
        </Container>
    );
};

export const ServiceItem = ({ item }: { item: IService }) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const t = useTranslations("Services");

    return (
        <div className="w-full h-[243px] flex items-center shadow-md gap-4 rounded-[8px] dark:bg-black bg-gray-50 ">
            <div className="lg:max-w-[300.35px] w-[300px] h-[243px] rounded-tl-[12px] rounded-bl-[12px] bg-black">
                <img
                    loading="lazy"
                    className="w-full h-full object-cover object-center rounded-tl-[12px] rounded-bl-[12px]"
                    src={item?.imageUrl ?? "image"}
                    alt={item?.imageUrl}
                />
            </div>
            <div className="w-full flex flex-col gap-3">
                <h3 className="font-semibold text-base lg:text-[24px]">{item?.name?.tag[lang_current]!}</h3>
                <p className="lg:text-[14px] text-sm line-clamp-4">{item?.description?.tag[lang_current]!}</p>
                <Link href={`/services/${item.idx}`} className="lg:text-[16px] text-sm underline underline-offset-4 text-primary-blue">
                    <span>{t("buttonMore")}</span>
                </Link>
            </div>
        </div>
    );
};
