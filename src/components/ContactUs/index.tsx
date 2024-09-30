import { ArrowRight } from "lucide-react";
import { Container } from "../ContainerRoot";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const ContactUs = () => {
    return (
        <section className="w-full mt-[135px]">
            <Container>
                <section className="flex flex-col lg:flex-row w-full gap-10">
                    <div className="w-full h-[679px] bg-black"></div>
                    <div className="w-full">
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold text-2xl">Precisa de mais informações?</h2>
                            <span className="text-sm">Contacta-nos e diz-nos em que podemos ajuda-lo.</span>
                        </div>
                        <form action="" className="mt-5 flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="">Nome*</label>
                                <Input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Telefone*</label>
                                <Input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Email*</label>
                                <Input type="text" />
                            </div>
                            <div>
                                <Textarea rows={10}></Textarea>
                            </div>

                            <div>
                                <Button className="flex items-center bg-primary-blue gap-1 text-white">
                                    <span>Enviar</span>
                                    <ArrowRight />
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>
            </Container>
        </section>
    );
};
