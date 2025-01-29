"use client";

import { IService } from "@/domain/models/Service";
import ServiceGatewayHttp from "@/infra/gateway/service/serviceGatewayHttp";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import { Button } from "@/presentation/components/ui/button";
import { getServiceById } from "@/services/serviceType";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function ServicePage({ params }: { params: { id: string } }) {
    const [service, setService] = useState<IService>();

    const httpClient = new AxiosAdapter();
    const serviceGatewayHttp = new ServiceGatewayHttp(httpClient);

    async function getServiceById(id: string) {
        try {
            const response = await serviceGatewayHttp.getServiceById(Number(id));
            setService(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getServiceById(params.id);
        getServiceById(params.id);
    }, [params.id]);

    return (
        <main className="w-full min-h-screen bg-gray-50 dark:bg-transparent">
            <section className="max-w-[1248px] px-3 xl:px-0 h-auto py-5 xl:py-0 xl:h-[573px] mx-auto w-full flex flex-col items-center gap-10 lg:flex-row ">
                <div className="lg:max-w-[540px] rounded-[14px] h-[473px] w-full bg-black">
                    <img src={service?.urlImg} alt={service?.name?.tag.pt} className="w-full h-full object-cover" />
                </div>
                <div className="w-full flex flex-col gap-10">
                    <div>
                        <h3 className="text-green-500">Nossos Serviços</h3>
                        <h2 className="font-bold text-2xl">Serviço {service?.name?.tag.pt}</h2>
                    </div>
                    <div className="flex flex-col gap-6 text-sm text-justify lg:text-start">
                        <p>{service?.description?.tag.pt}</p>
                    </div>
                    <div>
                        <Button className="bg-primary-blue text-white flex gap-1">
                            <span>Solicitar agora</span>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
