"use client";

import { IService } from "@/domain/models/Service";
import ServiceGatewayHttp from "@/infra/gateway/service/serviceGatewayHttp";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import { MENU_ID_LIST } from "@/lib/data";
import { ContactUs } from "@/presentation/components/ContactUs";
import { useScroll } from "@/presentation/components/Header/useScroll";
import Loading from "@/presentation/components/loading";
import { SERVICE_TYPE } from "@/presentation/components/OurServices";
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
    const { handleClick } = useScroll();

    function getServiceById(id: string) {
        // try {
        // const response = await serviceGatewayHttp.getServiceById(Number(id));
        // if (response?.result === 0) {
        // window.location.replace("/not-found");
        // return;
        // }
        const service = SERVICE_TYPE.find((s) => s.idx === Number(id));
        if (!service) {
            window.location.replace("/not-found");
            return;
        }
        setService(service);
        setIsLoandig(false);
        // } catch (error) {
        // setIsLoandig(false);
        // }
    }

    useEffect(() => {
        getServiceById(params.id);
    }, [params.id]);

    if (isLoandig) return <Loading />;

    return (
        <main className="w-full min-h-screen dark:bg-transparent">
            <section className="max-w-[1248px] px-3 xl:px-0 h-auto py-5 xl:py-0 xl:h-[573px] mx-auto w-full flex flex-col items-center gap-10 lg:flex-row ">
                <div className="lg:max-w-[500px] rounded-[14px] h-[400px] w-full bg-black">
                    <img src={service?.imageUrl} alt={service?.title?.tag.pt} className="w-full rounded-md h-full object-cover border" />
                </div>
                <div className="w-full flex flex-col gap-10">
                    <div>
                        <h3 className="text-green-500">{t("title")}</h3>
                        <h2 className="font-bold text-2xl">Serviço {service?.title?.tag[lang_current]}</h2>
                    </div>
                    <div>
                        {service?.children?.map((child) => (
                            <div key={child.idx} className="flex flex-col gap-6 text-sm text-justify lg:text-start max-w-[700px]">
                                <p className="text-justify text-sm md:text-base">{child?.tag[lang_current!]}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Button
                            onClick={(e: any) => handleClick(e, MENU_ID_LIST.CONTACT)}
                            className="bg-primary-blue text-white flex gap-1"
                        >
                            <span>{t("contactButton")}</span>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </section>

            <ContactUs />
        </main>
    );
}
