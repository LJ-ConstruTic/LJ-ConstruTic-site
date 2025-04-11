"use client";
import Link from "next/link";
import { Container } from "../ContainerRoot";
import React from "react";
import { IProduct } from "@/domain/models/Product";
import { getCookie } from "cookies-next";
import { Component } from "@/domain/models/component";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MENU_ID_LIST } from "@/lib/data";
import { Card, Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

type props = {
    products: IProduct[];
    productComponent: Component;
};

export const OurProducts: React.FC<props> = ({ products, productComponent }) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;

    return (
        <Container>
            <section id={MENU_ID_LIST.PRODUCTS} className="w-full mt-10 xl:mt-[50px]">
                <h2 data-aos="fade-up" className="font-bold text-[32px] text-slate-700 dark:text-slate-100 text-center">
                    {productComponent?.items[0].tag[lang_current]!}
                </h2>
                <div data-aos="fade-up" className="mt-4 w-full flex">
                    <Splide
                        options={{
                            type: "loop",
                            pagination: true,
                            arrows: false,
                            perPage: 3,
                            drag: "free",
                            width: "100%",
                            gap: "10px",
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
    const t = useTranslations("About");
    return (
        <>
            <Card className="max-w-xs dark:bg-black ">
                <Card.Header
                    className="max-h-[250px] text-slate-800 dark:text-slate-100"
                    as="img"
                    src={item?.imageUrl ?? "image"}
                    alt={item?.title?.tag[tagRegion]!}
                />
                <Card.Body className="0">
                    <Typography type="h6" className="text-slate-800 dark:text-slate-100">
                        {item?.title?.tag[tagRegion]!}
                    </Typography>
                    <Typography className="my-1 text-foreground">{/* {item?.description?.tag[tagRegion]!} */}</Typography>
                </Card.Body>
                <Card.Footer>
                    <Button className="dark:border-none border-none bg-primary-green dark:text-white">{t("buttonMore")}</Button>
                </Card.Footer>
            </Card>
        </>
    );
};
