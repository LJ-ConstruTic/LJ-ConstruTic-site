"use client";
import Link from "next/link";
import { Container } from "../ContainerRoot";
import React from "react";
import { IProduct } from "@/domain/models/Product";
import { getCookie } from "cookies-next";
import { Component } from "@/domain/models/component";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { MENU_ID_LIST } from "@/lib/data";
import { Card, Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

type props = {
    products: IProduct[];
    productComponent: Component;
};

export const PRODUCTS: IProduct[] = [
    {
        id: "5911C84E-3B1A-4ADB-A1DF-6F2F5A4BA4CE",
        idx: 1,
        createdAt: "19/12/2024",
        updatedAt: "19/12/2024",
        isActive: true,
        imageUrl: "/umbundo.jpeg",
        title: {
            tagId: "AA929599-CEE1-41A4-A12C-31099DFEA331",
            idxTag: 1,
            keyFrontView: "proUmbCultute",
            tag: {
                pt: "Umbundu e Cultura",
                umb: "Umbundu l’utuwa",
                en: "Umbundu and Culture",
                es: "Umbundu y cultura",
            },
        },
        children: [
            {
                tagId: "4643A3E2-D4B1-44F3-937C-637839D8CCDF",
                isActiveTag: true,
                keyFrontViewTag: "proUmbCultuteContext",
                tag: {
                    pt: "Um software multiplataforma com o objectivo de incentivar a cultura dialética angolana que serve como um dicionário e também um tradutor a distintos idiomas.",
                    umb: "Tchatyamelã k’ovituwa ale ovisila, tukwete-vo umesene waswa-po, enene vali una walita mwele l’utuwa wetu mulo v’ofeka yetu yOngola, ndetchi Onungandaka v«elimi lyetu, ale vakapitiyandaka valimi añgi-añgi.",
                    en: "A multiplatform software with the aim of encouraging Angolan dialectical culture that serves as a dictionary and also a translator for different languages.",
                    es: "Un software multiplataforma con el objetivo de fomentar la cultura dialéctica angoleña que sirve como diccionario y también como traductor de diferentes idiomas.",
                },
            },
        ],
    },
    {
        id: "2D63A6BE-80A8-47A7-9C65-3AEC770D92AD",
        idx: 2,
        createdAt: "19/12/2024",
        updatedAt: "19/12/2024",
        isActive: true,
        imageUrl: "/saude.jpeg",
        title: {
            tagId: "5C4790A8-1DB9-4764-9796-F681E019F2EE",
            idxTag: 2,
            keyFrontView: "proHealt",
            tag: {
                pt: "Minha Saúde",
                umb: "Uhayele wange",
                en: "My Health",
                es: "mi salud",
            },
        },
        children: [
            {
                tagId: "A0D7E27B-5372-496B-8501-BFB5A49B0652",
                isActiveTag: true,
                keyFrontViewTag: "proHealtContext",
                tag: {
                    pt: "Um software ERP/CRM multiplataforma de gestão ambulatorial hospitalar centrado na unificação de informação dinamizando o processo de consultas, internamento, registos históricos dos pacientes, resultados clínicos e muito mais com duas versões uma para o pessoal sanitário e outra para os pacientes.",
                    umb: "Tchatyamelã k’uhayele, tukwete viñgi-viñgi vina vikwatisa-ko ndetchi v’esaku, tchikale v’okutaliliya uveyi, tchikale v’okuyekisa olombeyi, tchikale-vo v’okukonomwisa ovoveyi. Apa ndeti tukwete-po ovimahõ vivali: okwavela esaku k’olombeyi, kwenda-vo etato lilwa kwasakuli ale ovimbanda.",
                    en: "A multiplatform ERP/CRM software for hospital outpatient management focused on unifying information, streamlining the process of consultations, hospitalization, patient history records, clinical results and much more with two versions, one for healthcare staff and the other for patients.",
                    es: "Un software ERP/CRM multiplataforma para la gestión ambulatoria hospitalaria enfocado a unificar información, agilizar el proceso de consultas, hospitalización, historial de pacientes, resultados clínicos y mucho más con dos versiones, una para personal sanitario y otra para pacientes.",
                },
            },
        ],
    },
    {
        id: "1FF97AD9-1916-4DFB-B38D-0577B92577C3",
        idx: 3,
        createdAt: "19/12/2024",
        updatedAt: "19/12/2024",
        isActive: true,
        imageUrl: "/contas.jpeg",
        title: {
            tagId: "CC0FB845-6BE7-4164-A97C-6AFE58D7DC26",
            idxTag: 3,
            keyFrontView: "proBudget",
            tag: {
                pt: "Orçamento e Custo",
                umb: "Ecilingu kwenda okulipisa",
                en: "Budget and Cost",
                es: "Presupuesto y costo",
            },
        },
        children: [
            {
                tagId: "52CE5D18-C5E0-4E11-9CEE-12713FDCBF9E",
                isActiveTag: true,
                keyFrontViewTag: "proBudgetContext",
                tag: {
                    pt: "Um software multiplataforma com objetivo de dar um orçamento fiável e eficiente de maneira espontânea contando com as variáveis baseada na necessidade de cada projeto.",
                    umb: "Osapulo wo vilinga vyosimbu vyosi, okukwata ecilingu ekulihiso kwenda ociliho, onjila ya kimwe, okuliteya valingi vikasi kwenda esunga lyosi lyocikwavo.",
                    en: "A multiplatform software with the objective of providing a reliable and efficient budget spontaneously, taking into account the variables based on the needs of each project.",
                    es: "Un software multiplataforma con el objetivo de brindar un presupuesto confiable y eficiente de manera espontánea, tomando en cuenta las variables en función de las necesidades de cada proyecto.",
                },
            },
            {
                tagId: "2EC66CC5-20D6-44B7-A70B-F5BABAA74BF1",
                isActiveTag: true,
                keyFrontViewTag: "proBudgetContext2",
                tag: {
                    pt: "Inicialmente o software está pensado para responder às duas áreas que paramos: Construção Civil e Urbana e Informações e Telecomunicações ITC/IT",
                    umb: "Vyepi, osapulo walingiwa okuliteya epindelo limwe liwatwike: Omutunda wo Okulombolola Epalandu lyolwasi kwenda Okukwatiwa kwovipito vyolutwe ITC/IT.",
                    en: "Initially the software is designed to respond to the two areas we stopped at: Civil and Urban Construction and Information and Telecommunications ITC/IT",
                    es: "Inicialmente el software está diseñado para dar respuesta a las dos áreas en las que nos detuvimos: Construcción Civil y Urbana e Información y Telecomunicaciones TIC/IT",
                },
            },
        ],
    },
    {
        id: "B64B589F-5686-4E18-9168-D9137F27CEBC",
        idx: 4,
        createdAt: "19/12/2024",
        updatedAt: "19/12/2024",
        isActive: true,
        imageUrl: "/mineradados.jpeg",
        title: {
            tagId: "87953288-25B2-41D3-9135-43FD27BA8191",
            idxTag: 5,
            keyFrontView: "proDateMining",
            tag: {
                pt: "Mineria de Dados",
                umb: "Ongupi yavela-po",
                en: "Data Mining",
                es: "Minería de datos",
            },
        },
        children: [
            {
                tagId: "B01BE7A3-EF33-4EC2-80D0-5A7601E03532",
                isActiveTag: true,
                keyFrontViewTag: "proDateMiningContext1",
                tag: {
                    pt: "Um software pensado para empresas em que consiste aceder a determinados dados e transformar em informação mais legível em diversos formatos.",
                    umb: "Tukwete ongupi yavelapo, muna tusoleka vyosi vyatyamelã kw’asapulo, otcho tutele okusalehã kuvosi omu mwaleluka.",
                    en: "Software designed for companies that consists of accessing certain data and transforming it into more readable information in different formats.",
                    es: "Software diseñado para empresas que consiste en acceder a determinados datos y transformarlos en información más legible en diferentes formatos.",
                },
            },
            {
                tagId: "3152BB66-A898-4E3B-AAF1-F991301ACFFC",
                isActiveTag: true,
                keyFrontViewTag: "proDateMiningContext2",
                tag: {
                    pt: "Acedemos os dados e damos saída em diversos formatos como dasboad, gráficos interactivos, tabelas dinâmicas ou mesmo ficheiros planos.",
                    umb: "Tutelã okuyikula ongupi eyi ndeti omu mwavela-po kwenda mwasesama.",
                    en: "We access the data and output it in different formats such as dasboad, interactive graphs, pivot tables or even flat files.",
                    es: "Accedemos a los datos y los generamos en diferentes formatos como dasboad, gráficos interactivos, tablas dinámicas o incluso archivos planos.",
                },
            },
            {
                tagId: "33BDE008-3194-40CE-A7C2-2FAE4CE0FCDC",
                isActiveTag: true,
                keyFrontViewTag: "proDateMiningContext3",
                tag: {
                    pt: "Respeitamos os acordos de acessos aos dados e o manuseamento de dados sensíveis tanto da empresa assim como o que indica a Lei 22/11 de 17 de junho, Lei da Proteção de Dados Pessoais – LPDP de Angola.",
                    umb: "Tukwete otchisumbiso tchinene l’oloseo kwenda olohuminho, ndomo tchasonehiwa v’ovihandele-ko vy’ofeka yetu y’Ongola, v’Otchihandeleko 22/11 tchatayiwa k’eteke ly’ekwi epanduvali k’osayi ya Kavambi.",
                    en: "We respect the company's data access agreements and the handling of sensitive data as well as what is indicated in Law 22/11 of June 17, Personal Data Protection Law – LPDP of Angola.",
                    es: "Respetamos los acuerdos de acceso a datos de la empresa y el manejo de datos sensibles, así como lo indicado en la Ley 22/11, de 17 de junio, Ley de Protección de Datos Personales – LPDP de Angola.",
                },
            },
        ],
    },
];

export const OurProducts: React.FC<props> = ({ products, productComponent }) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const t = useTranslations("Products");

    return (
        <Container>
            <section id={MENU_ID_LIST.PRODUCTS} className="w-full mt-10 xl:mt-[50px]">
                <h2 data-aos="fade-up" className="font-bold text-[24px] md:text-[32px] text-slate-700 dark:text-slate-100 text-center">
                    {t("title")}
                </h2>
                <div data-aos="fade-up" className="mt-4 w-full cursor-move reset-padding-margin">
                    <Splide
                        options={{
                            type: "loop",
                            fixedWidth: "auto",
                            fixedHeight: "auto",
                            width: "100%",
                            gap: 40,
                            breakpoints: {
                                640: {
                                    fixedWidth: "auto",
                                    fixedHeight: "auto",
                                    perPage: 1,
                                    gap: 10,
                                },
                                768: {
                                    fixedWidth: "auto",
                                    fixedHeight: "auto",
                                    perPage: 2,
                                    gap: 20,
                                },
                                1024: {
                                    fixedWidth: "auto",
                                    fixedHeight: "auto",
                                    perPage: 3,
                                    gap: 40,
                                },
                            },
                            pagination: true,
                            arrows: false,
                            perPage: 3,
                            perMove: 1,
                            drag: "free",
                            interval: 3000,
                            rewind: true,
                            speed: 800,
                            autoplay: true,
                        }}
                        style={{ padding: 0, margin: 0 }}
                    >
                        {PRODUCTS?.map((item, idx) => (
                            <SplideSlide key={idx}>
                                <Link href={`/products/${item?.idx}`} key={item?.id}>
                                    <ProductCard key={idx} item={item} tagRegion={lang_current!} />
                                </Link>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </section>
        </Container>
    );
};

export const ProductCard = ({ item, tagRegion }: { item: IProduct; tagRegion: string }) => {
    const t = useTranslations("About");
    return (
        <>
            <Card className="xl:max-w-[330px] max-w-[15rem] max-h-[300px] lg:max-h-[450px] h-auto w-full dark:bg-black ">
                <Card.Header
                    className="md:max-h-[200px] mx-auto border-b max-h-[200px] h-[150px] md:h-full text-slate-800 dark:text-slate-100"
                    as="img"
                    src={item?.imageUrl ?? "image"}
                    alt={item?.title?.tag[tagRegion]!}
                />
                <Card.Body className="0 px-4">
                    <Typography type="h6" className="text-slate-500 dark:text-slate-100">
                        <span className="text-base">{item?.title?.tag[tagRegion]!}</span>
                    </Typography>
                </Card.Body>
                <Card.Footer className="px-4">
                    <Button size={"sm"} className="dark:border-none border-none bg-primary-blue dark:text-white">
                        {t("buttonMore")}
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};
