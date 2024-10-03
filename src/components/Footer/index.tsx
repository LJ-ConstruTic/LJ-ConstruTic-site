import { Container } from "../ContainerRoot";

export const Footer = () => {
    return (
        <footer className="w-full h-[305px] bg-gray-200 dark:bg-black mt-[31px]">
            <Container>
                <div className="w-full flex flex-col items-center h-[278px] py-3 gap-4">
                    <h1 className="font-bold text-2xl">
                        <span className="text-primary-blue">LJ</span>ConstruTic
                    </h1>

                    <ul className="flex gap-2 lg:gap-8 text-sm">
                        <li>
                            <a href="#">Quem somos</a>
                        </li>
                        <li>
                            <a href="#">Produtos</a>
                        </li>
                        <li>
                            <a href="#">Serviços</a>
                        </li>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                    </ul>

                    <div></div>

                    <div className="flex flex-col gap-3">
                        <div className="text-center text-sm">
                            <p>
                                Luís José - Construção e Soluções Tecnológicas LDA,Santa <br /> Cruz -Vila, Lobito, Benguela
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-sm">
                            <span>+244 933 477 555</span>
                            <span>info@ljconstrutic.com</span>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="w-full flex justify-center items-center">
                <span className="text-sm">Copyright &copy; Todos os Direitos Reservados</span>
            </div>
        </footer>
    );
};
