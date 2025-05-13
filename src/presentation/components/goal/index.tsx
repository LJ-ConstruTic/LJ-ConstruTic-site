"use client";

import { getCookie } from "cookies-next";
import { Container } from "../ContainerRoot";
import { IGoal } from "@/domain/models/Goals";
import { useTranslations } from "next-intl";

type props = {
    goals: IGoal[];
};

export const Goals = ({ goals }: props) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const t = useTranslations("Goals");

    return (
        <section data-aos="fade-up" className="w-full px-3 xl:px-0 mt-[42px] lg:mt-[96px]">
            <Container>
                <h2 className="font-bold text-xl lg:text-2xl text-center text-slate-700 dark:text-slate-100">{t("title")}</h2>
                <section className="w-full grid grid-cols-1 h-auto md:grid-cols-2 lg:grid-cols-4 place-items-center xl:place-items-start gap-8 mt-8 mb-20">
                    {goals?.map((item, idx) => {
                        return <GoalItem key={idx} tagRegion={lang_current!} index={idx + 1} item={item} isHorizontal={idx > 4} />;
                    })}
                </section>
            </Container>
        </section>
    );
};

export const GoalItem = ({
    item,
    isHorizontal,
    tagRegion,
    index,
}: {
    item: IGoal;
    index: number;
    isHorizontal?: boolean;
    tagRegion: string;
}) => {
    return (
        <div className="lg:max-w-[414px] dark:border w-full h-[148px] bg-[#f2f2f2] dark:bg-slate-900 rounded-[8px] flex gap-1 pt-4">
            <div className="relative -left-4 -top-6">
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-green-500">
                    <span className="text-white text-xl  font-bold">{index.toString()}</span>
                </div>
            </div>
            <div className="w-full h-auto">
                <h3 className="font-bold text-xl ">{item.name?.tag[tagRegion]!}</h3>
                <p className="text-xs mt-3 line-clamp-8  text-justify lg:text-start">{item.description?.tag[tagRegion]!}</p>
            </div>
        </div>
    );
};
