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
import ProductGatewayHttp from "@/infra/gateway/product/productGatewayHttp";
import ServiceGatewayHttp from "@/infra/gateway/service/serviceGatewayHttp";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import { IProduct } from "@/domain/models/Product";
import { IService } from "@/domain/models/Service";
import GoalGatewayHttp from "@/infra/gateway/goal/goalGatewayHttp";
import { IGoal } from "@/domain/models/Goals";

export const HomeView = () => {
    const httpClient = new AxiosAdapter();
    const productGatewayHttp = new ProductGatewayHttp(httpClient);
    const serviceGatewayHttp = new ServiceGatewayHttp(httpClient);
    const goalGatewayHttp = new GoalGatewayHttp(httpClient);
    const [products, setProduct] = useState<IProduct[]>([]);
    const [services, setService] = useState<IService[]>([]);
    const [goals, setGoal] = useState<IGoal[]>([]);

    async function GetProducts() {
        try {
            const response = await productGatewayHttp.getAllProducts();
            setProduct(response);
        } catch (error) {
            console.error(error);
        }
    }

    async function GetServices() {
        try {
            const response = await serviceGatewayHttp.getServices();
            setService(response);
        } catch (error) {
            console.error(error);
        }
    }

    async function GetGoals() {
        try {
            const response = await goalGatewayHttp.getGoals();
            setGoal(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        GetProducts().then(() => GetProducts());
        GetServices().then(() => GetServices());
        GetGoals().then(() => GetGoals());
    }, []);

    return (
        <main>
            <Banner />
            <OurProducts products={products!} />
            <AboutUs />
            <OurServices servicesType={services!} isLoading={false} />
            <Strategy />
            <Goals goals={goals!} />
            <ContactUs />
            <MoveUpButton />
        </main>
    );
};
