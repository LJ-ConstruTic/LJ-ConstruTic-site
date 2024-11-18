import Link from "next/link";
import { Container } from "../ContainerRoot";
import { IProduct } from "@/model/IProduct";
import React from "react";

type props = {
    products: IProduct[];
};

export const OurProducts: React.FC<props> = ({ products }) => {
    return (
        <Container>
            <section data-aos="fade-up" id="products" className="w-full mt-[101px]">
                <h2 className="font-bold text-[32px] text-center">Nossos produtos</h2>
                <div className="mt-5 md:mt-16 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 lg:gap-8">
                    {products?.map((item, idx) => (
                        <Product key={idx} item={item} />
                    ))}
                </div>
            </section>
        </Container>
    );
};

export const Product = ({ item }: { item: IProduct }) => {
    return (
        <div className="w-full h-[309px] lg:h-[409px] flex flex-col">
            <div className="w-full h-[206px] lg:h-[306px] rounded-[16px]">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <span className="font-bold text-base lg:text-2xl">{item.title}</span>
                    <span className="lg:text-sm text-xs ">{""}</span>
                </div>
                <Link href={`/products/${item.id}`}>
                    <span className="lg:text-sm text-xs underline text-primary-blue">Ver mais</span>
                </Link>
            </div>
        </div>
    );
};
