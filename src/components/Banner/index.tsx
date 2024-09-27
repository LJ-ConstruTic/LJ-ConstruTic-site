import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../ContainerRoot";

export const Banner = () => {
    return (
        <Container>
            <section className="w-full flex mt-5 items-center">
                <div className="w-full flex flex-col gap-9">
                    <h4 className="text-[52px] font-bold leading-[65.35px]">
                        Qualidade e eficiência <br /> em um só lugar
                    </h4>
                    <p className="text-base max-w-[504px]">
                        Realizamos o sonho de todos de ter uma construção digna e moderna, ou um sistema inteligente que ajude na gestão do
                        dia a dia, transformando esse sonho em um direito para todos
                    </p>
                    <div>
                        <Button className="bg-primary-blue dark:text-white flex items-center">
                            <span>Contacte-nos agora</span>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
                <div className="w-full h-[500px] bg-black rounded-[14px]"></div>
            </section>
        </Container>
    );
};
