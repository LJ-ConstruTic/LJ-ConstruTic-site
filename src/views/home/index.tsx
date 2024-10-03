"use client";
import { AboutUs } from "@/components/About";
import { Banner } from "@/components/Banner";
import { ContactUs } from "@/components/ContactUs";
import { Goals } from "@/components/goal";
import Loading from "@/components/loading";
import { MoveUpButton } from "@/components/MoveUp";
import { OurProducts } from "@/components/OurProducts";
import { OurServices } from "@/components/OurServices";
import { Strategy } from "@/components/strategy";
import { MoveUp } from "lucide-react";
import React, { useEffect, useState } from "react";

export const HomeView = () => {
    return (
        <main>
            <Banner />
            <OurProducts />
            <AboutUs />
            <OurServices />
            <Strategy />
            <Goals />
            <ContactUs />
            <MoveUpButton />
        </main>
    );
};
