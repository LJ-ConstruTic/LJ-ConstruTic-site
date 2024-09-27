import { AboutUs } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Container } from "@/components/ContainerRoot";
import { OurProducts } from "@/components/OurProducts";
import { OurServices } from "@/components/OurServices";

export const HomeView = () => {
    return (
        <main>
            <Banner />
            <OurProducts />
            <AboutUs />
            <OurServices />
        </main>
    );
};
