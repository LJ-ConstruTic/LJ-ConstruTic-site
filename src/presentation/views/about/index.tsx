"use client";
import { Component } from "@/domain/models/component";
import { ITeam } from "@/domain/models/Team";
import { ComponentGatewayHttp } from "@/infra/gateway/component/componentGatewayHttp";
import { TeamGatewayHttp } from "@/infra/gateway/team/teamGatewayHttp";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import { ABOUT_ID } from "@/lib/data";
import { ContactUs } from "@/presentation/components/ContactUs";
import { Container } from "@/presentation/components/ContainerRoot";
import { Card, Typography } from "@material-tailwind/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { getCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const OUR_TEAM = [
    {
        id: 1,
        name: "José Cabral",
        job: "Software Engineer & Data Engineer",
        imageUrl: "https://ljconstrutic.com/media/img/teams/jose.png",
    },
    {
        id: 2,
        name: "Pedro Muteka",
        job: "Software Developer",
        imageUrl:
            "https://media.licdn.com/dms/image/v2/D4D03AQGIKsTFvOAQzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1687275167622?e=1755129600&v=beta&t=3tApTEs9MCVINFSp4sHsKbYLPosD2xx3lsuhU9bEHAQ",
    },
    {
        id: 3,
        name: "Fábio Junik",
        job: "Software Developer",
        imageUrl:
            "https://media.licdn.com/dms/image/v2/D4D03AQGF-_aIPZnelQ/profile-displayphoto-shrink_400_400/B4DZXimPFlHwAg-/0/1743263429486?e=1755129600&v=beta&t=ba7w0Rh4k8cZqnLqa7hCNAWZdlO0HoTyMUUT9zLichY",
    },
];

const IMG_EYE = "/look.png";
const IMG_FOGUET = "/foguet.png";
const IMG_URL =
    "https://s3-alpha-sig.figma.com/img/76b5/81b4/1102dd2a4b2e8801ba6094755a2b4ed9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7nJJRVUsP9YNcdrNz2tMY-L9O8P~XfLOwn-bC1ro9YMH34mOMAxxTJ5lBTTbiFmHEV~HDoR-uJozA~vaSPAozUKwQK68IqdWx0vpeiqta4gmBfe777-M-qqbwvhpmiEZjMutsG0TPvenAmmWp7-nyf4m-SKsmcJF6MD06X9ScbUYnxGvhV9cXHRAUY6CXns6qUBPxO56lgdaNzsq47W5B8Cd5tz7HNSagSabbpSY~cZr420MO7aQT3cUWI6ebXQ9HcshfvqbijPnm~UhPHwi7dKA6zpoXGQeHpi~VcnJU76-CgPem13hww~maiM6tx6f9HM3G6~uMYGUbCwQhsJ4A__";
const IMG1 = "/history1.jpg";

const IMG2 = "/history2.jpg";

export const AboutView = () => {
    const [Teams, setTeams] = useState<{ size: number; items: ITeam[] }>({ size: 0, items: [] });
    const slideRef = React.useRef<any>(null);
    const t = useTranslations("About");
    const httpClient = new AxiosAdapter();
    const componentGatewayHttp = new ComponentGatewayHttp(httpClient);
    const teamGatewayHttp = new TeamGatewayHttp(httpClient);
    const [aboutComponent, setAboutComponent] = useState<Component>();
    const lang_current = getCookie("NEXT_LOCALE") as string;

    async function GetInfoAbout() {
        try {
            const response = (await componentGatewayHttp.getComponentByTag(ABOUT_ID)) as Component;
            setAboutComponent(response);
        } catch (error) {}
    }

    async function GetTeams() {
        try {
            const response = await teamGatewayHttp.getTeam();
            setTeams(response);
        } catch (error) {}
    }

    useEffect(() => {
        GetInfoAbout();
        GetTeams();
    }, []);

    return (
        <main className="w-full min-h-screen">
            <div
                className="w-full h-[378px] bg-primary-blue bg-opacity-65 pt-[60px]  lg:pt-[105px] text-white"
                style={{
                    backgroundImage: `url(${IMG1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "soft-light",
                }}
            >
                <Container>
                    <h3 className="text-2xl text-center md:text-start font-bold md:text-[38px]">{t("title")}</h3>
                    <p className="max-w-[722px] text-sm text-justify md:text-start lg:text-base mt-[14px]">{t("description")}</p>
                </Container>
            </div>

            <Container>
                <section className="w-full flex mt-[54px] items-center">
                    <div className="relative w-full lg:max-w-[700px] h-[401px] hidden xl:flex">
                        <div className="w-[420.82px] absolute h-[340px] rounded-[14px] left-40 top-0 bg-black">
                            <img src={IMG2} alt="" className="w-full h-full object-cover rounded-[14px]" />
                        </div>
                        <div className="w-[380px] absolute h-[340px] rounded-[14px] top-32 left-0 bg-black">
                            <img src={IMG1} alt="" className="w-full h-full object-cover rounded-[14px]" />
                        </div>
                    </div>
                    <div className="w-full xl:max-w-[580px] flex flex-col gap-2">
                        <h3 className="lg:text-[32px] text-xl text-green-400">{t("history.title")}</h3>
                        <h4 className="lg:text-[48px] text-2xl mb-8 font-bold text-primary-blue">{t("history.subtitle")}</h4>
                        <div className="flex flex-col gap-4">
                            <p className="text-justify">{t("weHistoryContext")}</p>
                            <p className="text-justify">{t("weHistoryContext2")}</p>
                            <p className="text-justify">{t("weHistoryContext3")}</p>
                        </div>
                    </div>
                </section>

                <section className="lg:mt-[125px] mt-[50px] w-full">
                    <div className="flex items-center gap-4">
                        <div className="w-[100px] h-[70px] rounded-[10px] shadow-xl flex items-center justify-center">
                            <img src={IMG_EYE} alt="" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="lg:text-[28px] text-base text-primary-blue">{t("our")}</span>
                            <span className="lg:text-[32px] text-base text-primary-blue font-semibold underline underline-offset-4">
                                {t("weVision")}
                            </span>
                        </div>
                    </div>
                    <div className="lg:max-w-[1190px] w-full text-[#766F6F] dark:text-slate-300 dark:bg-black mx-auto mt-[20px] lg:mt-[32px] bg-[#F5F5F5] p-8">
                        <p className="text-justify ">{t("weVisionContext")}</p>
                    </div>
                </section>

                <section className="lg:mt-[125px] mt-[50px] w-full">
                    <div className="flex items-center gap-4 flex-1 justify-end">
                        <div className="flex flex-col gap-2">
                            <span className="lg:text-[28px] text-base text-primary-blue">{t("our")}</span>
                            <span className="lg:text-[32px] text-base text-primary-blue font-semibold underline underline-offset-4">
                                {t("weMission")}
                            </span>
                        </div>
                        <div className="w-[100px] h-[70px] rounded-[10px] shadow-xl flex items-center justify-center">
                            <img src={IMG_FOGUET} width={50} alt="" />
                        </div>
                    </div>
                    <div className="lg:max-w-[1190px] text-[#766F6F] dark:text-slate-300 dark:bg-black mx-auto mt-[32px] bg-[#F5F5F5] p-8 flex flex-col gap-4 w-full">
                        <p className="text-justify">{t("weMissionContext")}</p>
                        <p>{t("weMissionContext2")}.</p>
                    </div>
                </section>
            </Container>
            {Teams ? (
                <section className="w-full bg-[#FBFBFB] dark:bg-black h-auto mt-5 lg:mt-[95px]">
                    <Container>
                        <div className="flex items-center gap-2 pt-[36px]">
                            <span className="lg:text-[28px] text-xl text-green-400">{t("our")}</span>
                            <span className="lg:text-[32px] text-xl text-primary-blue font-semibold">{t("team")}</span>
                        </div>
                        <section className="lg:mt-[14px] w-full">
                            <Splide
                                ref={slideRef}
                                options={{
                                    fixedWidth: "auto",
                                    fixedHeight: "auto",
                                    type: "loop",
                                    pagination: false,
                                    arrows: false,
                                    perPage: 1,
                                    width: "100%",
                                    drag: "free",
                                    interval: 3000,
                                    rewind: true,
                                    gap: 24,
                                    speed: 800,
                                    perMove: 1,
                                    autoPlay: true,
                                    loop: true,
                                }}
                                style={{ width: "100%", height: "auto" }}
                            >
                                {OUR_TEAM.length > 0
                                    ? OUR_TEAM?.map((item: any) => (
                                          <SplideSlide key={item.id}>
                                              <OficialCard key={item.id} item={item} />
                                          </SplideSlide>
                                      ))
                                    : null}
                            </Splide>
                        </section>
                    </Container>
                </section>
            ) : null}
            <ContactUs />
        </main>
    );
};

const OficialCard = ({ item }: { item: ITeam | any }) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    if (!item.id) return null;
    return (
        <>
            <Card className="lg:max-w-xs max-w-[15rem] max-h-[400px] h-auto">
                <Card.Header as="img" className="max-h-[200px]" src={item.imageUrl} alt={item.name} />
                <Card.Body className="text-center line-clamp-2">
                    <Typography type="h5" className="text-slate-900 dark:text-slate-200 text-base">
                        <span className="text-base">{item.name}</span>
                    </Typography>
                    <Typography className="my-1 text-foreground text-xs md:text-sm">{item.job}</Typography>
                </Card.Body>
            </Card>
        </>
    );
};
