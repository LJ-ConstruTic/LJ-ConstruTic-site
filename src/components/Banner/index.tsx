import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../ContainerRoot";

export const Banner = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 200);
        }
    };

    return (
        <Container>
            <section className="w-full flex xl:flex-row flex-col mt-5 items-center">
                <div className="w-full flex flex-col gap-9">
                    <h4 className="lg:text-[52px] text-4xl sm:text-5xl font-bold sm:leading-[50px] xl:leading-[65.35px]">
                        Qualidade e eficiência <br /> em um só lugar
                    </h4>
                    <p className="text-sm text-left lg:text-start lg:text-base xl:max-w-[504px]">
                        Realizamos o sonho de todos de ter uma construção digna e moderna, ou um sistema inteligente que ajude na gestão do
                        dia a dia, transformando esse sonho em um direito para todos
                    </p>
                    <div>
                        <a href="#contact" onClick={(e) => handleClick(e, "contact")}>
                            <Button className="bg-primary-blue dark:text-white flex gap-1 items-center">
                                <span>Contacte-nos agora</span>
                                <ArrowRight width={16} />
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="w-full h-[500px] xl:flex hidden bg-black rounded-[14px]"></div>
            </section>
        </Container>
    );
};
