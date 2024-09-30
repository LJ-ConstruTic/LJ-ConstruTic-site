import { Container } from "../ContainerRoot";

export const Goals = () => {
    return (
        <section className="w-full mt-[96px]">
            <Container>
                <h2 className="font-bold text-2xl text-center">Metas</h2>
                <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 mb-20">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i, j) => (
                        <GoalItem key={i} item={i} isHorizontal={i > 4} />
                    ))}
                </section>
            </Container>
        </section>
    );
};

export const GoalItem = ({ item, isHorizontal }: { item: number; isHorizontal?: boolean }) => {
    if (isHorizontal) {
        return (
            <div className="max-w-[275.99px] w-full h-[234px] bg-gray-50 dark:bg-transparent dark:border dark:border-white rounded-[8px] flex flex-col gap-1 pt-1">
                <div className="relative -left-6 flex items-center gap-6">
                    <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-black">
                        <span className="text-white text-4xl font-bold">{item}</span>
                    </div>
                    <h3 className="font-bold text-xl relative -top-4">Meta {item}</h3>
                </div>
                <div className="w-full px-3">
                    <p className="text-xs mt-3 line-clamp-7">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum perspiciatis non dolor impedit saepe ratione illo
                        recusandae animi, molestias debitis doloremque deleniti assumenda sunt quae nisi soluta, atque id similique?Lorem
                        ipsum dolor sit amet consectetur. Duis at lorem{" "}
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className="max-w-[414px] w-full h-[148px] bg-gray-50 dark:bg-transparent dark:border dark:border-white rounded-[8px] flex gap-1 pt-4">
            <div className="relative -left-6">
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center bg-black">
                    <span className="text-white text-4xl font-bold">{item}</span>
                </div>
            </div>
            <div className="w-full">
                <h3 className="font-bold text-xl">Meta {item}</h3>
                <p className="text-xs mt-3 line-clamp-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum perspiciatis non dolor impedit saepe ratione illo
                    recusandae animi, molestias debitis doloremque deleniti assumenda sunt quae nisi soluta, atque id similique?Lorem ipsum
                    dolor sit amet consectetur. Duis at lorem{" "}
                </p>
            </div>
        </div>
    );
};
