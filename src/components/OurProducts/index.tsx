export const OurProducts = () => {
    return (
        <section className="w-full pt-[101px]">
            <h2 className="font-bold text-[32px] text-center">Nossos produtos</h2>
            <div className="mt-16 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i, j) => (
                    <Product key={i} />
                ))}
            </div>
        </section>
    );
};

export const Product = () => {
    return (
        <div className="w-full h-[409px] flex flex-col">
            <div className="w-full h-[306px] bg-black rounded-[16px]"></div>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <span className="font-bold text-2xl">Nome do Produto</span>
                    <span className="text-sm ">Descrição do Produto</span>
                </div>
                <span className="text-sm underline text-primary-blue">Ver mais</span>
            </div>
        </div>
    );
};
