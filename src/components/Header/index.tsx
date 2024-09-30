import { ToogleLanguage } from "../SelectLanguage";
import { ModeToggle } from "../ui/toogleMode";

export const Header = () => {
    return (
        <header className="flex justify-between items-center h-20 max-w-[1248px] w-full mx-auto px-3 xl:px-0">
            <div className="flex items-center gap-10">
                <h2 className="font-bold text-2xl">
                    <span className="text-primary-blue">LJ</span>ConstruTic
                </h2>
                <nav>
                    <ul className="md:flex items-center hidden gap-4 lg:gap-6">
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
                </nav>
            </div>
            <div className="flex items-center gap-1">
                <ToogleLanguage />
                <ModeToggle />
            </div>
        </header>
    );
};
