import { AboutUs } from "@/components/About";
import { Banner } from "@/components/Banner";
import { OurProducts } from "@/components/OurProducts";
import { OurServices } from "@/components/OurServices";
import { Strategy } from "@/components/strategy";

export const HomeView = () => {
    return (
        <main>
            <Banner />
            <OurProducts />
            <AboutUs />
            <OurServices />
            <Strategy />
        </main>
    );
};
