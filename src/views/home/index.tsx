"use client";
import { AboutUs } from "@/components/About";
import { Banner } from "@/components/Banner";
import { ContactUs } from "@/components/ContactUs";
import { Goals } from "@/components/goal";
import { MoveUpButton } from "@/components/MoveUp";
import { OurProducts } from "@/components/OurProducts";
import { OurServices } from "@/components/OurServices";
import { Strategy } from "@/components/strategy";
import { getProducts } from "@/services/product";
import { getServices } from "@/services/serviceType";
import React from "react";
import useSWR from "swr";

export const HomeView = () => {
    const { data: servicesType, isLoading } = useSWR("serviceType", getServices);
    const { data: products, isLoading: loading2 } = useSWR("products", getProducts);
    return (
        <main>
            <Banner />
            <OurProducts products={products!} />
            <AboutUs />
            <OurServices servicesType={servicesType!} isLoading={isLoading} />
            <Strategy />
            <Goals />
            <ContactUs />
            <MoveUpButton />
        </main>
    );
};
