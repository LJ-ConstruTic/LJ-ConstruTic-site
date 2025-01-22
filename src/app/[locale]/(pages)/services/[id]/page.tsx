"use client";

import { Button } from "@/presentation/components/ui/button";
import { getServiceById } from "@/services/serviceType";
import { ArrowRight } from "lucide-react";
import useSWR from "swr";

export default function ServicePage({ params }: { params: { id: string } }) {
    const { data: service, isLoading } = useSWR("/serviceTypeItem", () => getServiceById(params.id));

    return (
        <main className="w-full min-h-screen bg-gray-50 dark:bg-transparent">
            <section className="max-w-[1248px] px-3 xl:px-0 h-auto py-5 xl:py-0 xl:h-[573px] mx-auto w-full flex flex-col items-center gap-10 lg:flex-row ">
                <div className="lg:max-w-[540px] rounded-[14px] h-[473px] w-full bg-black">
                    <img src={service?.urlImg} alt={service?.imgName} className="w-full h-full object-cover" />
                </div>
                <div className="w-full flex flex-col gap-10">
                    <div>
                        <h3 className="text-green-500">Nossos Serviços</h3>
                        <h2 className="font-bold text-2xl">Serviço {service?.name}</h2>
                    </div>
                    <div className="flex flex-col gap-6 text-sm text-justify lg:text-start">
                        <p>{service?.description}</p>
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
