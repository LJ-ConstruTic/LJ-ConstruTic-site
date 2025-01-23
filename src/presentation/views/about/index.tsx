"use client";
import { ContactUs } from "@/presentation/components/ContactUs";
import { Container } from "@/presentation/components/ContainerRoot";
import { getTeams } from "@/services/Team";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import useSWR from "swr";

const IMG_EYE = "/look.png";
const IMG_FOGUET = "/foguet.png";
const IMG_URL =
    "https://s3-alpha-sig.figma.com/img/76b5/81b4/1102dd2a4b2e8801ba6094755a2b4ed9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7nJJRVUsP9YNcdrNz2tMY-L9O8P~XfLOwn-bC1ro9YMH34mOMAxxTJ5lBTTbiFmHEV~HDoR-uJozA~vaSPAozUKwQK68IqdWx0vpeiqta4gmBfe777-M-qqbwvhpmiEZjMutsG0TPvenAmmWp7-nyf4m-SKsmcJF6MD06X9ScbUYnxGvhV9cXHRAUY6CXns6qUBPxO56lgdaNzsq47W5B8Cd5tz7HNSagSabbpSY~cZr420MO7aQT3cUWI6ebXQ9HcshfvqbijPnm~UhPHwi7dKA6zpoXGQeHpi~VcnJU76-CgPem13hww~maiM6tx6f9HM3G6~uMYGUbCwQhsJ4A__";
const IMG1 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/ia2.jpg?etag=%221b2fc-66393773%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=547%2B340&quality=85";

const IMG2 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/unsplash_prXwCmJolGA___serialized1.jpg?etag=%221dc60fa-666186f3%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=499%2B340";

export const AboutView = () => {
    const { data: Teams, isLoading } = useSWR("teams", getTeams);
    const slideRef = React.useRef<any>(null);

    return (
        <main className="w-full min-h-screen">
            <div
                className="w-full h-[378px] bg-blue-500 pt-[105px] text-white"
                style={{
                    backgroundImage: `url(${IMG_URL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "soft-light",
                }}
            >
                <Container>
                    <h3 className="text-2xl font-bold text-[38px]">Sobre nós</h3>
                    <p className="max-w-[722px] mt-[14px]">
                        Reunimos duas áreas importantes e seus derivados no mercado de hoje: Construção Civil e Urbana e Soluções Tecnologia
                        em Tecnologia em Comunicação e Informação TIC/IT (Informática) brindando aos nossos clientes serviços de qualidade
                        com as tecnologias modernas.
                    </p>
                </Container>
            </div>

            <Container>
                <section className="w-full flex mt-[54px] items-center">
                    <div className="relative w-full max-w-[700px] h-[401px] hidden xl:flex">
                        <div className="w-[473.82px] absolute h-[340px] rounded-[14px] left-40 top-0 bg-black">
                            <img src={IMG2} alt="" className="w-full h-full object-cover rounded-[14px]" />
                        </div>
                        <div className="w-[473.82px] absolute h-[340px] rounded-[14px] top-24 left-0 bg-black">
                            <img src={IMG1} alt="" className="w-full h-full object-cover rounded-[14px]" />
                        </div>
                    </div>
                    <div className="w-full xl:max-w-[580px] flex flex-col gap-2">
                        <h3 className="text-[32px] text-green-400">Nós existimos por uma</h3>
                        <h4 className="text-[48px] font-bold text-primary-blue">Grande Razão</h4>

                        <p className="text-justify">
                            Na LJConstruTic (Luís José Construção e Soluções Tecnológicas LDA), transformamos sonhos em realidade! Fundada
                            em 2023, nossa empresa nasceu com a missão de oferecer serviços de alta qualidade em duas áreas que moldam o
                            futuro: Construção Civil e Urbana e Soluções Tecnológicas em Comunicação e Informação (TIC/IT). Acreditamos que
                            a construção de espaços e a tecnologia devem trabalhar juntas para criar um mundo mais moderno, acessível e
                            sustentável.
                        </p>
                        <p className="text-justify">
                            Com uma equipe de especialistas locais e internacionais, e a colaboração estreita de engenheiros de renome na
                            Espanha, estamos prontos para atender às suas necessidades, sempre superando as expectativas.
                        </p>
                    </div>
                </section>

                <section className="mt-[125px] w-full">
                    <div className="flex items-center gap-4">
                        <div className="w-[105px] h-[80px] rounded-[10px] shadow-xl flex items-center justify-center">
                            <img src={IMG_EYE} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[28px] text-primary-blue">Nossa</span>
                            <span className="text-[32px] text-primary-blue font-semibold underline underline-offset-4">Visão</span>
                        </div>
                    </div>
                    <div className="max-w-[1190px] text-[#766F6F] dark:text-slate-300 dark:bg-black mx-auto mt-[32px] bg-[#F5F5F5] p-8">
                        <p className="text-justify">
                            Construir um futuro mais inteligente e sustentável. Queremos atender à crescente demanda de soluções inovadoras
                            na Construção Civil e na Tecnologia (TIC), oferecendo produtos finais que combinam inteligência e
                            sustentabilidade. A nossa visão é impulsionada pela inovação contínua, excelência operacional e um forte
                            compromisso com o desenvolvimento humano e ambiental, contribuindo para o desenvolvimento econômico e social da
                            nossa comunidade.
                        </p>
                    </div>
                </section>

                <section className="mt-[125px] w-full">
                    <div className="flex items-center gap-4 flex-1 justify-end">
                        <div className="flex flex-col">
                            <span className="text-[28px] text-primary-blue">Nossa</span>
                            <span className="text-[32px] text-primary-blue font-semibold underline underline-offset-4">Missão</span>
                        </div>
                        <div className="w-[105px] h-[80px] rounded-[10px] shadow-xl flex items-center justify-center">
                            <img src={IMG_FOGUET} width={50} alt="" />
                        </div>
                    </div>
                    <div className="max-w-[1190px] text-[#766F6F] dark:text-slate-300 dark:bg-black mx-auto mt-[32px] bg-[#F5F5F5] p-8 flex flex-col gap-4 w-full">
                        <p className="text-justify">
                            Acessibilidade, segurança e inovação ao seu alcance. Tornamos a Construção Civil e a Tecnologia de Comunicação
                            acessíveis para todos, desde empresas até indivíduos. Nossa missão é modernizar e facilitar o acesso à
                            tecnologia e à construção, proporcionando a você uma experiência mais prática e segura.
                        </p>
                        <p>
                            Acreditamos que o sonho de possuir uma casa moderna e digna, ou de ter um sistema tecnológico eficiente, é um
                            direito e não um privilégio. Na LJConstruTic, fazemos de tudo para tornar esse sonho realidade.
                        </p>
                    </div>
                </section>
            </Container>
            <section className="w-full bg-[#FBFBFB] dark:bg-black h-[564px] mt-[95px]">
                <Container>
                    <div className="flex items-center gap-2 pt-[36px]">
                        <span className="text-[28px] text-green-400">Nossa</span>
                        <span className="text-[32px] text-primary-blue font-semibold">Equipa</span>
                    </div>
                    <section className="mt-[14px] w-full">
                        <Splide
                            ref={slideRef}
                            options={{
                                fixedWidth: 300,
                                fixedHeight: 340,
                                type: "loop",
                                pagination: false,
                                arrows: true,
                                perPage: 1,
                                width: "100%",
                                drag: "free",
                                interval: 3000,
                                rewind: true,
                                speed: 800,
                                perMove: 1,
                                autoPlay: true,
                                loop: true,
                            }}
                            style={{ width: "100%", padding: 0, margin: 0 }}
                        >
                            {Teams?.map((item) => (
                                <SplideSlide key={item.id}>
                                    <OficialCard key={item.id} item={item} />
                                </SplideSlide>
                            ))}
                        </Splide>
                    </section>
                </Container>
            </section>
            <ContactUs />
        </main>
    );
};

const OficialCard = ({ item }: { item: { name: string; job: string; imageUrl: string } }) => {
    if (!item) return null;
    return (
        <div className="w-[240px] h-[295px] cursor-pointer">
            <div className="w-full h-[250px] border rounded-[6px]">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover rounded-[6px]" />
            </div>
            <div className="w-[199.68px] h-[89px] mx-auto relative -mt-[50px] rounded-[4px] bg-white z-10 border shadow-md p-3 flex flex-col gap-2 items-center justify-center">
                <span className="font-semibold">{item.name}</span>
                <span className="text-[14px] text-center text-blue-400">{item.job}</span>
            </div>
        </div>
    );
};
