import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const AboutUs = () => {
    return (
        <section className="max-w-[1548px] mx-auto w-full h-[529px] bg-[#fbfbfb] mt-[80px] flex items-center dark:bg-transparent">
            <div className="relative w-full max-w-[700px] h-[401px]">
                <div className="w-[473.82px] absolute h-[340px] rounded-[14px] left-48 top-0 bg-black"></div>
                <div className="w-[473.82px] absolute h-[340px] rounded-[14px] top-24 left-14 bg-black"></div>
            </div>
            <div className="w-full flex flex-col gap-8">
                <h3 className="font-bold text-2xl">Sobre</h3>
                <p className="max-w-[579.15px] text-base">
                    Reunimos duas áreas importantes e seus derivados no mercado de hoje: Construção Civil e Urbana e Soluções Tecnologia em
                    Tecnologia em Comunicação e Informação TIC/IT (Informática) brindando aos nossos clientes serviços de qualidade com as
                    tecnologias modernas.
                </p>
                <div>
                    <Button className="bg-primary-blue flex items-center gap-1 dark:text-white">
                        <span>Saiba mais</span>
                        <ArrowRight />
                    </Button>
                </div>
            </div>
        </section>
    );
};
