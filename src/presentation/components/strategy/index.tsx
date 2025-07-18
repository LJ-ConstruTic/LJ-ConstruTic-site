import { useTranslations } from "next-intl";
import { Container } from "../ContainerRoot";

const imgStrategy = "/strategy.jpg";

export const Strategy = () => {
    const t = useTranslations("Strategy");
    return (
        <section data-aos="fade-up" className="w-full mt-[42px] py-4 lg:py-0 lg:mt-[96px] h-auto lg:h-[508px] dark:bg-black bg-white">
            <Container>
                <section className="w-full lg:h-[508px] h-auto flex lg:flex-row flex-col gap-8 items-center">
                    <div className="flex flex-col gap-8 max-w-[640px]">
                        <h2 className="lg:text-2xl text-xl font-bold text-slate-950 dark:text-slate-100">{t("homEstrategiesTitle")}</h2>
                        <div className="flex flex-col gap-5 text-sm lg:text-base text-slate-950 dark:text-slate-100 lg:text-start text-justify">
                            <p className="text-justify" dangerouslySetInnerHTML={{ __html: t("homEstrategiesContext") }} />
                            <p className="text-justify" dangerouslySetInnerHTML={{ __html: t("homEstrategiesContext2") }} />{" "}
                        </div>
                    </div>
                    <div className="w-full lg:h-[380px] h-auto rounded-[14px]">
                        <img src={imgStrategy} className="w-full h-full object-cover rounded-[14px]" alt="estrategia" />
                    </div>
                </section>
            </Container>
        </section>
    );
};
