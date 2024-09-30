import { AboutUs } from "@/components/About";
import { Banner } from "@/components/Banner";
import { ContactUs } from "@/components/ContactUs";
import { Goals } from "@/components/goal";
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
            <Goals />
            <ContactUs />
        </main>
    );
};
