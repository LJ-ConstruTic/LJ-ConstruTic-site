"use client";

import { Container } from "../ContainerRoot";
import { IGoal } from "@/domain/models/Goals";

type props = {
    goals: IGoal[];
};

export const Goals = ({ goals }: props) => {
    return (
        <section data-aos="fade-up" className="w-full px-3 xl:px-0 mt-[42px] lg:mt-[96px]">
            <Container>
                <h2 className="font-bold text-xl lg:text-2xl text-center">Metas</h2>
                <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center xl:place-items-start gap-8 mt-8 mb-20">
                    {goals?.map((item, idx) => {
                        return <GoalItem key={idx} item={item} isHorizontal={idx > 4} />;
                    })}
                </section>
            </Container>
        </section>
    );
};

export const GoalItem = ({ item, isHorizontal }: { item: IGoal; isHorizontal?: boolean }) => {
    if (isHorizontal) {
        return (
            <div className="lg:max-w-[275.99px] w-full h-[234px] bg-gray-50 dark:bg-black rounded-[8px] flex flex-col gap-1 pt-1">
                <div className="relative -left-6 flex items-center gap-6">
                    <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center  bg-green-500">
                        <span className="text-white text-2xl lg:text-4xl font-bold">{item.idx?.toString()}</span>
                    </div>
                    <h3 className="font-bold text-xl relative -top-4">Meta {item.idx}</h3>
                </div>
                <div className="w-full px-3">
                    <p className="text-xs mt-3 line-clamp-7 text-justify lg:text-start">{item.description?.tag.pt}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="lg:max-w-[414px] w-full h-[148px] bg-gray-50 dark:bg-black rounded-[8px] flex gap-1 pt-4">
            <div className="relative -left-6">
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-green-500">
                    <span className="text-white text-xl  lg:text-4xl font-bold">{item.idx?.toString()}</span>
                </div>
            </div>
            <div className="w-full">
                <h3 className="font-bold text-xl">Meta {item.idx}</h3>
                <p className="text-xs mt-3 line-clamp-4  text-justify lg:text-start">{item.description?.tag.pt}</p>
            </div>
        </div>
    );
};
