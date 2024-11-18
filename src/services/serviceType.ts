import { IServiceType } from "@/model/IServiceType";
import api from "./apiClient";

export async function getServices(): Promise<IServiceType[]> {
    const response = (await api.get("/ServiceType")).data as IServiceType[];
    return response.filter((service) => service.id.trim() !== "");
}

export async function postServiceType(serviceType: Omit<IServiceType, "id" | "idx">): Promise<IServiceType> {
    const response = await api.post("/ServiceType", serviceType);
    return response.data;
}

export async function getServiceById(id: string): Promise<IServiceType> {
    const response = (await api.get(`/ServiceType/${id}`)).data;
    return response;
}

export async function updateService(id: string, serviceType: Omit<IServiceType, "id" | "idx">): Promise<IServiceType> {
    const response = await api.put(`/ServiceType/${id}`, serviceType);
    return response.data;
}
