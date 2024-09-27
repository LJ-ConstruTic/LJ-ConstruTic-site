import { Banner } from "@/components/Banner";
import { Container } from "@/components/ContainerRoot";
import { OurProducts } from "@/components/OurProducts";

export const HomeView = () => {
    return (
        <Container>
            <Banner />
            <OurProducts />
        </Container>
    );
};
