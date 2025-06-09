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
                <h2 className="font-bold text-xl lg:text-2xl text-center text-slate-700 dark:text-slate-100">{t("homGoalsTitle")}</h2>
                <section className="w-full grid grid-cols-1 h-auto md:grid-cols-2 lg:grid-cols-4 place-items-center xl:place-items-start gap-8 mt-8 mb-20">
                    {/* {goals?.map((item, idx) => {
                        return <GoalItem key={idx} tagRegion={lang_current!} index={idx + 1} item={item} isHorizontal={idx > 4} />;
                    })} */}
                    <GoalItem
                        tagRegion={lang_current!}
                        index={1}
                        item={{
                            name: t("GoalNam0"),
                            description: t("GoalDesc0"),
                        }}
                        isHorizontal={false}
                    />
                    <GoalItem
                        tagRegion={lang_current!}
                        index={2}
                        item={{
                            name: t("homGoalItemTitle2"),
                            description: t("homGoalItemContext2"),
                        }}
                        isHorizontal={false}
                    />
                    <GoalItem
                        tagRegion={lang_current!}
                        index={3}
                        item={{
                            name: t("homGoalItemTitle3"),
                            description: t("homGoalItemContext3"),
                        }}
                        isHorizontal={false}
                    />
                    <GoalItem
                        tagRegion={lang_current!}
                        index={4}
                        item={{
                            name: t("homGoalItemTitle4"),
                            description: t("homGoalItemContext4"),
                        }}
                        isHorizontal={false}
                    />
                    <GoalItem
                        tagRegion={lang_current!}
                        index={5}
                        item={{
                            name: t("homGoalItemTitle5"),
                            description: t("homGoalItemContext5"),
                        }}
                        isHorizontal={false}
                    />
                    <GoalItem
                        tagRegion={lang_current!}
                        index={6}
                        item={{
                            name: t("homGoalItemTitle6"),
                            description: t("homGoalItemContext6"),
                        }}
                        isHorizontal={false}
                    />
                    <GoalItem
                        tagRegion={lang_current!}
                        index={7}
                        item={{
                            name: t("homGoalItemTitle7"),
                            description: t("homGoalItemContext7"),
                        }}
                        isHorizontal={false}
                    />
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
    item: IGoal | any;
    index: number;
    isHorizontal?: boolean;
    tagRegion: string;
}) => {
    return (
        <div className="lg:max-w-[414px] dark:border w-full h-[160px] bg-[#f2f2f2] dark:bg-slate-900 rounded-[8px] flex gap-1 pt-4">
            <div className="relative -left-4 -top-6">
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-green-500">
                    <span className="text-white text-xl  font-bold">{index.toString()}</span>
                </div>
            </div>
            <div className="w-full h-auto">
                <h3 className="font-bold text-xl ">{item.name}</h3>
                <p className="text-xs mt-3 line-clamp-8  text-justify lg:text-start">{item.description}</p>
            </div>
        </div>
    );
};
