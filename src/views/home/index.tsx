"use client";
import { AboutUs } from "@/components/About";
import { Banner } from "@/components/Banner";
import { ContactUs } from "@/components/ContactUs";
import { Goals } from "@/components/goal";
import Loading from "@/components/loading";
import { OurProducts } from "@/components/OurProducts";
import { OurServices } from "@/components/OurServices";
import { Strategy } from "@/components/strategy";
import React, { useEffect } from "react";

export const HomeView = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <main>
            {isLoading && <Loading />}
            <Banner />
            <OurProducts />
            <AboutUs />
            <OurServices />
            <Strategy />
            <Goals />
            <ContactUs />
        </main>
    );
};
