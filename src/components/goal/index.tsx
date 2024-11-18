"use client";

import useSWR from "swr";
import { Container } from "../ContainerRoot";
import { getGoals } from "@/services/Goals";
import { IGoals } from "@/model/IGoals";

export const Goals = () => {
    const { data: Goals, isLoading } = useSWR("goals", getGoals);

    return (
        <section data-aos="fade-up" className="w-full px-3 xl:px-0 mt-[42px] lg:mt-[96px]">
            <Container>
                <h2 className="font-bold text-xl lg:text-2xl text-center">Metas</h2>
                <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center xl:place-items-start gap-8 mt-8 mb-20">
                    {Goals?.map((item, idx) => {
                        if (idx > 10) return;
                        return <GoalItem key={idx} item={item} isHorizontal={idx > 4} />;
                    })}
                </section>
            </Container>
        </section>
    );
};

export const GoalItem = ({ item, isHorizontal }: { item: IGoals; isHorizontal?: boolean }) => {
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
                    <p className="text-xs mt-3 line-clamp-7 text-justify lg:text-start">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum perspiciatis non dolor impedit saepe ratione illo
                        recusandae animi, molestias debitis doloremque deleniti assumenda sunt quae nisi soluta, atque id similique?Lorem
                        ipsum dolor sit amet consectetur. Duis at lorem{" "}
                    </p>
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
                <p className="text-xs mt-3 line-clamp-4  text-justify lg:text-start">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum perspiciatis non dolor impedit saepe ratione illo
                    recusandae animi, molestias debitis doloremque deleniti assumenda sunt quae nisi soluta, atque id similique?Lorem ipsum
                    dolor sit amet consectetur. Duis at lorem{" "}
                </p>
            </div>
        </div>
    );
};
