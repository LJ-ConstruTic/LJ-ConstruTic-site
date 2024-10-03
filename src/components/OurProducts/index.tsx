import Link from "next/link";
import { Container } from "../ContainerRoot";

export const OurProducts = () => {
    return (
        <Container>
            <section data-aos="fade-up" id="products" className="w-full mt-[101px]">
                <h2 className="font-bold text-[32px] text-center">Nossos produtos</h2>
                <div className="mt-5 md:mt-16 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 lg:gap-8">
                    {[1, 2, 3, 4].map((i, j) => (
                        <Product key={i} item={i} />
                    ))}
                </div>
            </section>
        </Container>
    );
};

export const Product = ({ item }: { item: number }) => {
    return (
        <div className="w-full h-[309px] lg:h-[409px] flex flex-col">
            <div className="w-full h-[206px] lg:h-[306px] bg-black rounded-[16px]"></div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <span className="font-bold text-base lg:text-2xl">Nome do Produto</span>
                    <span className="lg:text-sm text-xs ">Descrição do Produto</span>
                </div>
                <Link href={`/products/${item}`}>
                    <span className="lg:text-sm text-xs underline text-primary-blue">Ver mais</span>
                </Link>
            </div>
        </div>
    );
};
