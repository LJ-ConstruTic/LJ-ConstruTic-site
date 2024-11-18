import { Container } from "../ContainerRoot";

const imgStrategy =
    "https://ljconstrutic.com/____impro/1/onewebmedia/estrategiaNego.gif?etag=%223308e-66428864%22&sourceContentType=image%2Fgif&ignoreAspectRatio&resize=704%2B352";

export const Strategy = () => {
    return (
        <section data-aos="fade-up" className="w-full mt-[42px] py-4 lg:py-0 lg:mt-[96px] h-auto lg:h-[508px] dark:bg-black bg-gray-50">
            <Container>
                <section className="w-full h-[508px] flex lg:flex-row flex-col gap-8 items-center">
                    <div className="flex flex-col gap-8 max-w-[640px]">
                        <h2 className="lg:text-2xl text-xl font-bold">Estratégia</h2>
                        <div className="flex flex-col gap-5 text-sm lg:text-base lg:text-start text-justify">
                            <p>
                                Realizamos uma pesquisa extensa  no mercado para identificar as necessidades dos clientes no setor de
                                Construção, soluções tecnológicas (Tic), reparações de dispositivos eletrônicos, assim como Venda de
                                materiais referente às áreas que trabalhamos.
                            </p>
                            <p>
                                Somos conscientes  que o mercado é competitivo e exige  a necessidade de adaptação rápida no processo
                                evolutivo  tecnológico para atender a demanda dos  clientes, é por esta razão  que nossos especialistas têm
                                trabalhado arduamente para implementar as melhores soluções em cada projeto.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[380px] rounded-[14px]">
                        <img src={imgStrategy} className="w-full h-full object-cover rounded-[14px]" alt="estrategia" />
                    </div>
                </section>
            </Container>
        </section>
    );
};
