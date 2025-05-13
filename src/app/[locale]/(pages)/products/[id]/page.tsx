"use client";
import { IProduct } from "@/domain/models/Product";
import ProductGatewayHttp from "@/infra/gateway/product/productGatewayHttp";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import { CONTACT_ID, MENU_ID_LIST } from "@/lib/data";
import { ContactUs } from "@/presentation/components/ContactUs";
import { useScroll } from "@/presentation/components/Header/useScroll";
import Loading from "@/presentation/components/loading";
import { Button } from "@/presentation/components/ui/button";
import { getCookie } from "cookies-next";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<IProduct>();
    const [isLoading, setIsLoading] = useState(true);
    const { handleClick, targetId } = useScroll();
    const httpClient = new AxiosAdapter();
    const productGatewayHttp = new ProductGatewayHttp(httpClient);
    const t = useTranslations("Products");
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const router = useRouter();

    async function getProduct(productId: string) {
        try {
            const response = await productGatewayHttp.getProductById(productId);
            console.log(response, "response");

            if (response?.result === 0) {
                window.location.replace("/not-found");
                return;
            }
            setProduct(response);
            setIsLoading(false);
        } catch (error) {
            window.location.replace("/not-found");
        }
    }

    useEffect(() => {
        getProduct(params.id);
    }, [params.id]);

    if (isLoading) return <Loading />;

    return (
        <main className="w-full min-h-screen dark:bg-transparent">
            <section className="max-w-[1248px] px-3 xl:px-0 h-auto py-5 xl:py-0 xl:h-[573px] mx-auto w-full flex flex-col items-center gap-10 lg:flex-row ">
                <div className="xl:max-w-[440px] rounded-md h-[403px] w-full ">
                    <Image
                        width={440}
                        height={403}
                        src={product?.imageUrl!}
                        alt={product?.title?.tag.pt}
                        className="w-full h-full object-top"
                        loading="lazy"
                        quality={90}
                        layout="responsive"
                    />
                </div>
                <div className="w-full flex flex-col justify-between gap-10">
                    <div>
                        <h3 className="text-green-500">{t("title")}</h3>
                        <h2 className="font-bold text-2xl">{product?.title?.tag[lang_current]!}</h2>
                    </div>
                    <div className="flex flex-col gap-6 text-lg text-justify lg:text-start">
                        {product?.children?.map((item: { tag: any; id: number }, idx: number) => {
                            return (
                                <p
                                    key={idx}
                                    className="dark:text-slate-100 text-black text-justify"
                                    dangerouslySetInnerHTML={{ __html: item.tag[lang_current]! }}
                                ></p>
                            );
                        })}
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
