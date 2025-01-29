import Link from "next/link";
import { Container } from "../ContainerRoot";
import React from "react";
import { IService } from "@/domain/models/Service";

type props = {
    servicesType: IService[];
    isLoading?: boolean;
};

export const OurServices: React.FC<props> = ({ servicesType }) => {
    return (
        <Container>
            <section data-aos="fade-up" id="services" className="w-full mt-[30px] lg:mt-[96px]">
                <h2 className="font-bold text-2xl lg:text-[32px] text-center">Nossos Serviços</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-[59px] gap-6">
                    {servicesType && servicesType?.map((service) => <ServiceItem key={service.idx} item={service} />)}
                </div>
            </section>
        </Container>
    );
};

export const ServiceItem = ({ item }: { item: IService }) => {
    return (
        <div className="w-full h-[243px] flex items-center shadow-md gap-4 rounded-[8px] dark:bg-black bg-gray-50 ">
            <div className="lg:max-w-[300.35px] w-[300px] h-[243px] rounded-tl-[12px] rounded-bl-[12px] bg-black">
                <img className="w-full h-full object-cover rounded-tl-[12px] rounded-bl-[12px]" src={item.urlImg} alt={item.urlImg} />
            </div>
            <div className="w-full flex flex-col gap-3">
                <h3 className="font-bold text-xl lg:text-[24px]">{item.name?.tag.pt}</h3>
                <p className="lg:text-[14px] text-sm line-clamp-4">{item.description?.tag.pt}</p>
                <Link href={`/services/${item.idx}`} className="lg:text-[16px] text-sm underline underline-offset-4 text-primary-blue">
                    <span>Ler mais</span>
                </Link>
            </div>
        </div>
    );
};
