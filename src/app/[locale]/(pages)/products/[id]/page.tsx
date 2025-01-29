"use client";

import { IProduct } from "@/domain/models/Product";
import ProductGatewayHttp from "@/infra/gateway/product/productGatewayHttp";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import { Button } from "@/presentation/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<IProduct>();
    const httpClient = new AxiosAdapter();
    const productGatewayHttp = new ProductGatewayHttp(httpClient);

    async function getProduct(productId: string) {
        try {
            const response = await productGatewayHttp.getProductById(productId);
            setProduct(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProduct(params.id);
        getProduct(params.id);
    }, [params.id]);

    return (
        <main className="w-full min-h-screen bg-gray-50 dark:bg-transparent">
            <section className="max-w-[1248px] px-3 xl:px-0 h-auto py-5 xl:py-0 xl:h-[573px] mx-auto w-full flex flex-col items-center gap-10 lg:flex-row ">
                <div className="xl:max-w-[540px] rounded-[14px] h-[473px] w-full ">
                    <img src={product?.imageUrl} alt={product?.title?.tag.pt} className="w-full h-full object-top" loading="lazy" />
                </div>
                <div className="w-full flex flex-col justify-between gap-10">
                    <div>
                        <h3 className="text-green-500">Nossos Produtos</h3>
                        <h2 className="font-bold text-2xl">{product?.title?.tag.pt}</h2>
                    </div>
                    <div className="flex flex-col gap-6 text-sm text-justify lg:text-start">
                        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel orci vel dui suscipit scelerisque.  </p>
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
