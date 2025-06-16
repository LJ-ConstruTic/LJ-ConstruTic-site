"use client";

import { Container } from "../ContainerRoot";
import React from "react";
import { IService } from "@/domain/models/Service";
import { getCookie } from "cookies-next";
import { MENU_ID_LIST } from "@/lib/data";
import { useTranslations } from "next-intl";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { Button } from "../ui/button";

type props = {
    servicesType: IService[];
    isLoading?: boolean;
};

export const SERVICE_TYPE: IService[] = [
    {
        id: "83498855-738F-4551-BF3E-7216DD1D8038",
        idx: 2,
        createdAt: "26/12/2024",
        updatedAt: "26/12/2024",
        isActive: true,
        imageUrl: "/tech.jpg",
        title: {
            tagId: "6D692A6F-EA2F-40EC-9AD4-92407152501B",
            idxTag: 75,
            keyFrontView: "servTic",
            tag: {
                pt: "Tecnologia",
                umb: "Umesene",
                en: "Technology",
                es: "Tecnología",
            },
        },
        children: [
            {
                tagId: "C94EB704-5D90-45B2-982F-5B7B99C6B25B",
                idx: 76,
                keyFrontViewTag: "servTicContext1",
                tag: {
                    pt: "Hoje em dia, o mundo da Informação e Telecomunicações TIC/IT, nos exige simplicidade, acessibilidade e a segurança de acesso a dados como fatores essenciais para fazerem da comunicação uma ferramenta imprescindível para todos os sectores empresariais assim como particular.",
                    umb: "V’oloneke vilo, evi vyatyamelã k’esapulo visukila okuti viveluka kwenda vikola-po, otcho vilisoke la vosi kwenda-vo vosi vavikolele. Opo ndoto yapa esapulo lilinga eñgwalehelõ l’elitokeko, tchikale ly’olohwasi la vakwavo, tchikale olohwasi l’omanu vosi.",
                    en: "Nowadays, the world of Information and Telecommunications ICT/IT demands simplicity, accessibility and security of access to data as essential factors to make communication an essential tool for all business sectors as well as individuals.",
                    es: "Hoy en día, el mundo de la Información y las Telecomunicaciones TIC/TI exige sencillez, accesibilidad y seguridad en el acceso a los datos como factores imprescindibles para hacer de la comunicación una herramienta imprescindible para todos los sectores empresariales así como para los particulares.",
                },
            },
            {
                tagId: "A608AABD-F062-4EAF-A36C-E6644F2A4308",
                idx: 77,
                keyFrontViewTag: "servTicContext2",
                tag: {
                    pt: "Oferecemos soluções tecnológicas à medida com IA como IoT, Big Data e Ciência de Dados para empresas, assim como para autônomos ou mesmo para indivíduos baseado somente nas necessidades requeridas pelo cliente, evitando o uso de aplicações de terceiros com funcionalidades genéricas aumentando o seu custo económico de aquisição.",
                    umb: "Twa londa okuti twa panga visungululo vyetekinologia olondunge, vali oku kolela oco mwa mona olinga vyokwete: Inteligência Artificial (IA), Internet das Coisas (IoT), Big Data, pamwe Ciência de Dados. Eci citangwa k’omahalo go vapangele, ovakola vali ovandu vakwene, oco citava oku lombolola olinga yociente. Twa teya okuti kaciti twatunde ovipapelo vyokutekinologia vyovantu vatatu, vali vyokupanga vyalinga vyokupita ombanda.",
                    en: "We offer tailor-made technological solutions with AI such as IoT, Big Data and Data Science for companies, as well as for freelancers or even for individuals based solely on the needs required by the client, avoiding the use of third-party applications with generic functionalities increasing their economic cost of acquisition.",
                    es: "Ofrecemos soluciones tecnológicas con IA a medida como IoT, Big Data y Data Science para empresas, así como para autónomos o incluso para particulares en función únicamente de las necesidades requeridas por el cliente, evitando el uso de aplicaciones de terceros con funciones genéricas. funcionalidades aumentando su coste económico de adquisición.",
                },
            },
            {
                tagId: "708E1ABB-14A9-4AD2-ADCD-3DF63C0C020F",
                idx: 5522,
                keyFrontViewTag: "ServDesc",
                tag: {
                    pt: "Se oferece soluções tecnológicas à medida para empresas assim como para autônomos ou mesmo produtos individuais.",
                    umb: "Citwala ovilongiso vyolutwe vyalikasilili k’ofima, eci ciwa k’okutekula kwenda ovitangi viwa.",
                    en: "It offers tailor-made technological solutions for companies as well as freelancers or even individual products.",
                    es: "Ofrece soluciones tecnológicas a medida tanto para empresas como para autónomos o incluso productos individuales.",
                },
            },
        ],
    },
    {
        id: "999FE49A-1040-4AB5-936D-CA72D7C88CDB",
        idx: 4,
        createdAt: "26/12/2024",
        updatedAt: "26/12/2024",
        isActive: true,
        imageUrl: "/constru.jpg",
        title: {
            tagId: "4BB2B68C-51AD-475B-929D-981493CFE5FD",
            idxTag: 73,
            keyFrontView: "servBuild",
            tag: {
                pt: "Construção",
                umb: "Ovitunga",
                en: "Construction",
                es: "Construcción",
            },
        },
        children: [
            {
                tagId: "08364A3A-D961-4FAE-BAF7-192ACFF94339",
                idx: 74,
                keyFrontViewTag: "servBuildContext",
                tag: {
                    pt: "Oferecemos os melhores serviços de Construção Urbana brindada com muitos anos de experiências ao longo de muitos anos com trabalhadores autónomos e melhores qualificados nos seguintes serviços.",
                    umb: "Kwavosi, twetcha upange waswa-po w’okutunga olupale, l’oluhimo lwaswa-po, momo tukwete olomesene vyalilongisa omu mwasesama.",
                    en: "We offer the best Urban Construction services based on many years of experience with self-employed workers and the best qualified in the following services.",
                    es: "Ofrecemos los mejores servicios de Construcción Urbana basados ??en muchos años de experiencia con trabajadores autónomos y los mejores cualificados en los siguientes servicios.",
                },
            },
        ],
    },
    {
        id: "E8846737-5168-4D2D-8DCB-43C375E86E6F",
        idx: 6,
        createdAt: "26/12/2024",
        updatedAt: "26/12/2024",
        isActive: true,
        imageUrl: "/saless.jpg",
        title: {
            tagId: "D4499DAE-56A5-497F-ABF0-4426EE58F987",
            idxTag: 86,
            keyFrontView: "servSales",
            tag: {
                pt: "Venda",
                umb: "Ovitanda",
                en: "Sale",
                es: "Venta",
            },
        },
        children: [
            {
                tagId: "FB05F6D9-8882-4502-9788-B7D3649C3539",
                idx: 5524,
                keyFrontViewTag: "ServVendDesc",
                tag: {
                    pt: "Nossa empresa brinda a venda de diferentes productos das áreas que oferece seus serviços.",
                    umb: "Ofima yetu itwala okutungisisa ovitangi vyovivalo vyosi vyovitwala vyakulemba.",
                    en: "Our company offers the sale of different products from the areas in which it offers its services.",
                    es: "Nuestra empresa ofrece la venta de diferentes productos de las zonas en las que ofrece sus servicios.",
                },
            },
        ],
    },
    {
        id: "B06F9075-5B4F-49F2-85F6-98F8FC4ACC79",
        idx: 1003,
        createdAt: "28/12/2024",
        updatedAt: "28/12/2024",
        isActive: true,
        imageUrl: "/repair.jpg",
        title: {
            tagId: "CFC250BD-46F9-4E31-8F16-7E6B1B1FD910",
            idxTag: 79,
            keyFrontView: "servRepairs",
            tag: {
                pt: "Reparações",
                umb: "Okupanga evi vyanholehã",
                en: "Repairs",
                es: "Refacción",
            },
        },
        children: [
            {
                tagId: "554C2BBD-520E-48C1-9D23-3A9997F0A411",
                idx: 5523,
                keyFrontViewTag: "ServRepDesc",
                tag: {
                    pt: "Além de oferecer os serviços tecnológicos, também reparamos aparelhos ou dispositivos eletrônicos.",
                    umb: "Kunyamo yokutwala vyakulemba vyolutwe, tusanga okulihisa ovikanda vyolondaka vyolutwe.",
                    en: "In addition to offering technological services, we also repair appliances or electronic devices.",
                    es: "Además de ofrecer servicios tecnológicos, también reparamos electrodomésticos o dispositivos electrónicos.",
                },
            },
        ],
    },
];

export const OurServices: React.FC<props> = ({ servicesType }) => {
    const t = useTranslations("Services");
    return (
        <Container>
            <section data-aos="fade-up" id={MENU_ID_LIST.SERVICES} className="w-full mt-[30px] lg:mt-[96px]">
                <h2 className="font-bold text-slate-700 dark:text-slate-100 text-2xl lg:text-[32px] text-center">{t("title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-[59px] gap-6">
                    {SERVICE_TYPE?.map((service) => (
                        <ServiceItem key={service.idx} item={service} />
                    ))}
                </div>
            </section>
        </Container>
    );
};

export const ServiceItem = ({ item }: { item: IService }) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const t = useTranslations("Services");

    return (
        <>
            <Card className="w-full max-w-[48rem] flex flex-row ">
                <CardHeader shadow={false} floated={false} className="m-0 w-2/5 shrink-0 rounded-r-none">
                    <img src={item?.imageUrl ?? "image"} alt={item?.imageUrl} className="h-full w-full object-cover" />
                </CardHeader>
                <CardBody className="p-6 flex flex-col w-full h-full justify-center gap-2">
                    <Typography variant="h4" className="mb-2 text-xl font-semibold text-slate-700 dark:text-slate-100 line-clamp-1">
                        {item?.title?.tag[lang_current]!}
                    </Typography>
                    <a href={`/services/${item.idx}`} className="inline-block">
                        <Button className="flex items-center  gap-2 dark:text-white bg-primary-blue border-none">
                            <span>{t("buttonMore")}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </>
    );
};
