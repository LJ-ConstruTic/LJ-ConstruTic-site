import { ArrowRight } from "lucide-react";
import { Container } from "../ContainerRoot";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const ContactUs = () => {
    return (
        <section data-aos="fade-in" id="contact" className="w-full mt-[80px] lg:mt-[135px]">
            <Container>
                <section className="flex flex-col lg:flex-row w-full gap-10">
                    <div className="w-full h-[420px] lg:h-[679px] rounded-[14px] bg-black"></div>
                    <div className="w-full">
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold text-xl lg:text-2xl">Precisa de mais informações?</h2>
                            <span className="text-sm">Contacta-nos e diz-nos em que podemos ajuda-lo.</span>
                        </div>
                        <form action="" className="mt-5 flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm lg:text-base">
                                    Nome*
                                </label>
                                <Input type="text" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm lg:text-base">
                                    Telefone*
                                </label>
                                <Input type="text" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm lg:text-base">
                                    Email*
                                </label>
                                <Input type="text" />
                            </div>
                            <div>
                                <Textarea rows={10}></Textarea>
                            </div>

                            <div>
                                <Button className="flex items-center bg-primary-blue gap-1 text-white">
                                    <span>Enviar</span>
                                    <ArrowRight width={16} />
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>
            </Container>
        </section>
    );
};
