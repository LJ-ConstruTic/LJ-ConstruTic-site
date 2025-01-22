import HttpClient from "@/infra/http/httpClient";
import ServiceGateway from "./serviceGateway";
import { IService } from "@/domain/models/Service";

export default class ServiceGatewayHttp implements ServiceGateway {
    constructor(private readonly httpClient: HttpClient) {}
    async getServices(): Promise<IService[]> {
        const response = await this.httpClient.get("/Service");
        return response as IService[];
    }
    postServiceType(serviceType: Omit<IService, "id" | "idx">): Promise<IService> {
        throw new Error("Method not implemented.");
    }
}
