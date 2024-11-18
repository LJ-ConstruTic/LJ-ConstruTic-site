import { Container } from "../ContainerRoot";

export const Footer = () => {
    return (
        <footer className="w-full py-10 bg-gray-200 dark:bg-black mt-8">
            <Container>
                <div className="w-full flex flex-col  py-6 gap-6">
                    {/* Logo Section */}
                    <h1 className="font-bold text-2xl text-left">
                        <span className="text-primary-blue">LJ</span>ConstruTic
                    </h1>
                    <div className="flex  gap-10">
                        <ul className="flex flex-col  gap-3  text-sm">
                            <li>
                                <a href="#aboutus" className="hover:text-primary-blue transition">
                                    Quem somos
                                </a>
                            </li>
                            <li>
                                <a href="#products" className="hover:text-primary-blue transition">
                                    Produtos
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-primary-blue transition">
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-primary-blue transition">
                                    Contato
                                </a>
                            </li>
                        </ul>

                        <div className="text-sm space-y-8">
                            <div className="space-y-1">
                                <span className="block">+244 933 477 555</span>
                                <span className="block">info@ljconstrutic.com</span>
                            </div>
                            <p>
                                Luís José - Construção e Soluções Tecnológicas LDA, <br />
                                Santa Cruz - Vila, Lobito, Benguela
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="w-full border-t border-gray-300 dark:border-gray-700 py-4 text-center">
                    <span className="text-sm">Copyright &copy; {new Date().getFullYear()} Todos os Direitos Reservados</span>
                </div>
            </Container>
        </footer>
    );
};
