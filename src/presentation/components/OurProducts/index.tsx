"use client";
import Link from "next/link";
import { Container } from "../ContainerRoot";
import React, { useState } from "react";
import { IProduct } from "@/domain/models/Product";
import { getCookie } from "cookies-next";
import { Component } from "@/domain/models/component";
import { AnimatePresence, motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MENU_ID_LIST } from "@/lib/data";
import Image from "next/image";

type props = {
    products: IProduct[];
    productComponent: Component;
};

export const OurProducts: React.FC<props> = ({ products, productComponent }) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;

    return (
        <Container>
            <section data-aos="fade-up" id={MENU_ID_LIST.PRODUCTS} className="w-full mt-10 xl:mt-[101px]">
                <h2 className="font-bold text-[32px] text-center">{productComponent?.items[0].tag[lang_current]!}</h2>
                <div className="mt-5 md:mt-8 w-full flex">
                    <Splide
                        options={{
                            type: "loop",
                            pagination: true,
                            arrows: false,
                            perPage: 3,
                            drag: "free",
                            width: "100%",
                            gap: "1rem",
                            interval: 3000,
                            rewind: true,
                            speed: 800,
                            perMove: 1,
                            autoPlay: true,
                            loop: true,
                        }}
                        style={{ padding: 0, margin: 0 }}
                    >
                        {products?.map((item, idx) => (
                            <SplideSlide key={idx}>
                                <Link href={`/products/${item?.idx}`} key={item?.id}>
                                    <ProductCard key={idx} item={item} tagRegion={lang_current!} />
                                </Link>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </section>
        </Container>
    );
};

export const ProductCard = ({ item, tagRegion }: { item: IProduct; tagRegion: string }) => {
    return (
        <div className="w-full h-auto flex flex-col">
            <div className="w-[400] h-[400px] rounded-[16px]">
                <Image
                    loading="lazy"
                    quality={90}
                    layout="responsive"
                    src={item?.imageUrl ?? "image"}
                    alt={item?.title?.tag[tagRegion]!}
                    width={400}
                    height={400}
                    className="object-center object-cover"
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col mt-2 text-center">
                    <span className="font-bold text-base lg:text-xl">{item?.title?.tag[tagRegion]!}</span>
                    <span className="lg:text-sm text-xs ">{""}</span>
                </div>
                {false && (
                    <Link href={`/products/${item.idx}`}>
                        <span className="lg:text-sm text-sm underline underline-offset-4 text-primary-blue">Ver mais</span>
                    </Link>
                )}
            </div>
        </div>
    );
};
