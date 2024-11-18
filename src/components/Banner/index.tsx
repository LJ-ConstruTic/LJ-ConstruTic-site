"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../ContainerRoot";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const IMG_1 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/software2222.jpeg?etag=%22212ee6-6661b500%22&sourceContentType=image%2Fjpeg&withoutEnlargement&resize=2500&quality=85";
const IMG_2 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/softwareMatenance22webp.webp?etag=%22e0da-6661a706%22&sourceContentType=image%2Fwebp";
const IMG_3 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/unsplash__TPTXZd9mOo%281%29.jpg?etag=%2219aa52-6660e172%22&sourceContentType=image%2Fjpeg&withoutEnlargement&resize=2500&quality=85";

const bannerArray = [
    {
        name: "Tecnologia",
        imgUrl: IMG_1,
        tag: "software",
    },
    {
        name: "Manutenção",
        imgUrl: IMG_2,
        tag: "software_matenance",
    },
    {
        name: "Construção",
        imgUrl: IMG_3,
        tag: "software",
    },
];

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
            <section className="w-full flex lg:flex-row flex-col gap-4 lg:gap-0 mt-5 items-center">
                <div className="w-full flex flex-col items-center lg:items-start lg:gap-9 gap-3">
                    <h4 className="lg:text-[52px] text-3xl text-center md:text-start font-bold sm:leading-[50px] xl:leading-[65.35px]">
                        Qualidade e eficiência <br className="xl:block hidden" /> em um só lugar
                    </h4>
                    <p className="text-sm text-center  lg:text-left xl:text-base md:max-w-[504px]">
                        Realizamos o sonho de todos de ter uma construção digna e moderna, ou um sistema inteligente que ajude na gestão do
                        dia a dia, transformando esse sonho em um direito para todos
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <a href="#contact" onClick={(e) => handleClick(e, "contact")}>
                            <Button className="bg-primary-blue dark:text-white flex gap-1 items-center">
                                <span>Contacte-nos agora</span>
                                <ArrowRight width={16} />
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="w-full h-[300px] lg:h-[500px] flex rounded-[14px]">
                    <Splide
                        options={{
                            type: "loop",
                            pagination: true,
                            arrows: false,
                            perPage: 1,
                            width: "100%",
                            drag: "free",
                            interval: 3000,
                            rewind: true,
                            speed: 800,
                            perMove: 1,
                            autoPlay: true,
                            loop: true,
                        }}
                        style={{ width: "100%", padding: 0, margin: 0 }}
                    >
                        {bannerArray?.map((item, idx) => (
                            <SplideSlide key={idx}>
                                <img className="w-full h-full object-cover rounded-[14px]" src={item.imgUrl} alt={item.name} />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </section>
        </Container>
    );
};
