"use client";

import { IService } from "@/domain/models/Service";
import ServiceGatewayHttp from "@/infra/gateway/service/serviceGatewayHttp";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import Loading from "@/presentation/components/loading";
import { Button } from "@/presentation/components/ui/button";
import { getCookie } from "cookies-next";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function ServicePage({ params }: { params: { id: string } }) {
    const [service, setService] = useState<IService>();
    const [isLoandig, setIsLoandig] = useState(true);
    const t = useTranslations("Services");
    const httpClient = new AxiosAdapter();
    const serviceGatewayHttp = new ServiceGatewayHttp(httpClient);
    const lang_current = getCookie("NEXT_LOCALE") as string;

    async function getServiceById(id: string) {
        try {
            const response = await serviceGatewayHttp.getServiceById(Number(id));
            if (response?.result === 0) {
                window.location.replace("/not-found");
                return;
            }
            setService(response);
            setIsLoandig(false);
        } catch (error) {
            console.error(error);
            window.location.replace("/not-found");
            setIsLoandig(false);
        }
    }

    useEffect(() => {
        getServiceById(params.id);
    }, [params.id]);

    if (isLoandig) return <Loading />;

    return (
        <main className="w-full min-h-screen bg-gray-50 dark:bg-transparent">
            <section className="max-w-[1248px] px-3 xl:px-0 h-auto py-5 xl:py-0 xl:h-[573px] mx-auto w-full flex flex-col items-center gap-10 lg:flex-row ">
                <div className="lg:max-w-[540px] rounded-[14px] h-[473px] w-full bg-black">
                    <img src={service?.imageUrl} alt={service?.name?.tag.pt} className="w-full h-full object-cover" />
                </div>
                <div className="w-full flex flex-col gap-10">
                    <div>
                        <h3 className="text-green-500">{t("title")}</h3>
                        <h2 className="font-bold text-2xl">Serviço {service?.name?.tag[lang_current]}</h2>
                    </div>
                    <div className="flex flex-col gap-6 text-sm text-justify lg:text-start">
                        <p>{service?.description?.tag[lang_current]}</p>
                    </div>
                    <div>
                        <Button className="bg-primary-blue text-white flex gap-1">
                            <span>{t("contactButton")}</span>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
