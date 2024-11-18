"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "../ContainerRoot";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import * as yup from "yup";
import { useFormik } from "formik";
import { IContact } from "@/model/IContact";
import { ErrorMessage } from "../ErrorMessage";
import toast from "react-hot-toast";
import { sendEmailContact } from "@/services/contact";
import { useState } from "react";

export const ContactUs = () => {
    const [disabled, setDisabled] = useState<boolean>(false);
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Campo obrigatorio"),
            phone: yup.string().required("Campo obrigatorio"),
            email: yup.string().required("Campo obrigatorio"),
            message: yup.string().required("Campo obrigatorio"),
        }),
        onSubmit: async (values: Omit<IContact, "idx">) => {
            setDisabled(true);
            console.log(values, ":::::::::::::::::::::");
            try {
                const response = await sendEmailContact(values);
                if (response) {
                    toast.success("Mensagem enviada com sucesso!");
                    formik.resetForm();
                    setDisabled(false);
                }
            } catch (error) {
                console.error(error);
                toast.error("Ups, ocorreu um erro inesperado!");
                setDisabled(false);
            } finally {
                setDisabled(false);
            }
        },
    });

    return (
        <section data-aos="fade-in" id="contact" className="w-full mt-[80px] lg:mt-[135px]">
            <Container>
                <section className="flex flex-col lg:flex-row w-full gap-10">
                    <div className="w-full h-[420px] lg:h-[679px] rounded-[14px] ">
                        <iframe
                            src="https://www.google.com/maps?q=-12.394712,13.551266&amp;hl=es&amp;z=14&amp;output=embed"
                            width="100%"
                            height="100%"
                            className="rounded-[14px]"
                            frameBorder="0"
                        ></iframe>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold text-xl lg:text-2xl">Precisa de mais informações?</h2>
                            <span className="text-sm">Contacta-nos e diz-nos em que podemos ajuda-lo.</span>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="mt-5 flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm lg:text-base">
                                    Nome*
                                </label>
                                <Input
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    name="name"
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name && <ErrorMessage message={formik.errors.name} />}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm lg:text-base">
                                    Telefone*
                                </label>
                                <Input
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    name="phone"
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.phone && formik.errors.phone && <ErrorMessage message={formik.errors.phone} />}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm lg:text-base">
                                    Email*
                                </label>
                                <Input
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    name="email"
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && <ErrorMessage message={formik.errors.email} />}
                            </div>
                            <div>
                                <Textarea
                                    rows={10}
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                    name="message"
                                    onBlur={formik.handleBlur}
                                    className="resize-none"
                                ></Textarea>
                                {formik.touched.message && formik.errors.message && <ErrorMessage message={formik.errors.message} />}
                            </div>

                            <div>
                                <Button type="submit" disabled={disabled} className="flex items-center bg-primary-blue gap-1 text-white">
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
