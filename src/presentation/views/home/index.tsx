"use client";
import { AboutUs } from "@/presentation/components/About";
import { Banner } from "@/presentation/components/Banner";
import { ContactUs } from "@/presentation/components/ContactUs";
import { Goals } from "@/presentation/components/goal";
import { MoveUpButton } from "@/presentation/components/MoveUp";
import { OurProducts } from "@/presentation/components/OurProducts";
import { OurServices } from "@/presentation/components/OurServices";
import { Strategy } from "@/presentation/components/strategy";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import ProductGatewayHttp from "@/infra/gateway/product/productGatewayHttp";
import ServiceGatewayHttp from "@/infra/gateway/service/serviceGatewayHttp";
import AxiosAdapter from "@/infra/http/axiosAdapter";

export const HomeView = () => {
    const httpClient = new AxiosAdapter();
    const productGatewayHttp = new ProductGatewayHttp(httpClient);
    const serviceGatewayHttp = new ServiceGatewayHttp(httpClient);
    const [product, setProduct] = useState<any>([]);
    const { data: servicesType, error, isLoading } = useSWR("services", () => serviceGatewayHttp.getServices());
    const { data: products, isLoading: loading2 } = useSWR("products", () => productGatewayHttp.getAllProducts());

    async function GetProducts() {
        try {
            const response = await productGatewayHttp.getAllProducts();
            setProduct(response);
            console.log(product, "tudo::::::::::", error);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        GetProducts();
    }, []);
    return (
        <main>
            <Banner />
            <OurProducts products={product!} />
            <AboutUs />
            <OurServices servicesType={servicesType!} isLoading={isLoading} />
            <Strategy />
            <Goals />
            <ContactUs />
            <MoveUpButton />
        </main>
    );
};
