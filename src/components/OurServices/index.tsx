import Link from "next/link";
import { Container } from "../ContainerRoot";

export const OurServices = () => {
    return (
        <Container>
            <section data-aos="fade-up" id="services" className="w-full mt-[30px] lg:mt-[96px]">
                <h2 className="font-bold text-2xl lg:text-[32px] text-center">Nossos Serviços</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-[59px] gap-6">
                    {[1, 2, 3, 4].map((i, j) => (
                        <ServiceItem key={i} item={i} />
                    ))}
                </div>
            </section>
        </Container>
    );
};

export const ServiceItem = ({ item }: { item: number }) => {
    return (
        <div className="w-full h-[243px] flex items-center shadow-lg gap-4 rounded-[8px] bg-gray-50 dark:bg-black">
            <div className="lg:max-w-[241.35px] w-full h-[243px] rounded-tl-[12px] rounded-bl-[12px] bg-black"></div>
            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-xl lg:text-[24px]">Serviço 1</h3>
                <p className="lg:text-[16px] text-sm line-clamp-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel orci vel dui suscipit scelerisque.
                </p>
                <Link href={`/services/${item}`}>
                    <span>Ler mais</span>
                </Link>
            </div>
        </div>
    );
};
