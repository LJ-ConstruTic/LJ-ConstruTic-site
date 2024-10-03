import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProductPage({ params }: { params: { id: string } }) {
    return (
        <main className="w-full min-h-screen bg-gray-50 dark:bg-transparent">
            <section className="max-w-[1248px] px-3 xl:px-0 h-auto py-5 xl:py-0 xl:h-[573px] mx-auto w-full flex flex-col items-center gap-10 lg:flex-row ">
                <div className="xl:max-w-[540px] rounded-[14px] h-[473px] w-full bg-black"></div>
                <div className="w-full flex flex-col gap-10">
                    <div>
                        <h3 className="text-primary-blue">Nossos Produtos</h3>
                        <h2 className="font-bold text-2xl">Produto {params.id}</h2>
                    </div>
                    <div className="flex flex-col gap-6 text-sm text-justify lg:text-start">
                        <p>
                            Um software ERP/CRM multiplataforma de gestão ambulatorial hospitalar centrado na unificação de informação
                            dinamizando o processo de consultas, internamento, registos históricos dos pacientes, resultados clínicos e
                            muito mais com duas versões uma para o pessoal sanitário e outra para os pacientes. 
                        </p>
                        <p>
                            Um software ERP/CRM multiplataforma de gestão ambulatorial hospitalar centrado na unificação de informação
                            dinamizando o processo de consultas, internamento, registos históricos dos pacientes, resultados clínicos e
                            muito mais com duas versões uma para o pessoal sanitário e outra para os pacientes. 
                        </p>
                        <p>
                            Um software ERP/CRM multiplataforma de gestão ambulatorial hospitalar centrado na unificação de informação
                            dinamizando o processo de consultas, internamento, registos históricos dos pacientes, resultados clínicos e
                            muito mais com duas versões uma para o pessoal sanitário e outra para os pacientes. 
                        </p>
                    </div>
                    <div>
                        <Button className="bg-primary-blue text-white flex gap-1">
                            <span>Solicitar agora</span>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
