import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const IMG1 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/ia2.jpg?etag=%221b2fc-66393773%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=547%2B340&quality=85";

const IMG2 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/unsplash_prXwCmJolGA___serialized1.jpg?etag=%221dc60fa-666186f3%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=499%2B340";

export const AboutUs = () => {
    return (
        <main className="bg-[#fbfbfb] dark:bg-black w-full h-auto">
            <section
                data-aos="fade-in"
                id="aboutus"
                className="xl:max-w-[1248px] mx-auto w-full xl:h-[529px] h-auto px-3 xl:px-0 py-4 xl:py-0 gap-5 xl:gap-0 mt-[20px] lg:mt-[80px] flex flex-col xl:flex-row items-center dark:bg-black"
            >
                <div className="relative w-full max-w-[700px] h-[401px] hidden xl:flex">
                    <div className="w-[473.82px] absolute h-[340px] rounded-[14px] left-28 top-0 bg-black">
                        <img src={IMG2} alt="" className="w-full h-full object-cover rounded-[14px]" />
                    </div>
                    <div className="w-[473.82px] absolute h-[340px] rounded-[14px] top-24  bg-black">
                        <img src={IMG1} alt="" className="w-full h-full object-cover rounded-[14px]" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-8">
                    <h3 className="font-bold text-2xl">Sobre</h3>
                    <p className="xl:max-w-[579.15px] text-sm text-justify xl:text-start xl:text-base">
                        Reunimos duas áreas importantes e seus derivados no mercado de hoje: Construção Civil e Urbana e Soluções Tecnologia
                        em Tecnologia em Comunicação e Informação TIC/IT (Informática) brindando aos nossos clientes serviços de qualidade
                        com as tecnologias modernas.
                    </p>
                    <div>
                        <Button className="bg-primary-blue flex items-center gap-1 dark:text-white">
                            <Link href="/about">
                                <span>Saiba mais</span>
                            </Link>
                            <ArrowRight width={16} />
                        </Button>
                    </div>
                </div>
                <div className="xl:w-[473.82px] w-full h-[340px] flex  xl:hidden rounded-[14px] bg-black">
                    <img src={IMG1} className="w-full h-full object-cover rounded-[14px]" alt="" />
                </div>
            </section>
        </main>
    );
};
