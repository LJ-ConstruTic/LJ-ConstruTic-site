import { IProduct } from "@/domain/models/Product";
import ProductGateway from "./productGateway";
import HttpClient from "@/infra/http/httpClient";

export default class ProductGatewayHttp implements ProductGateway {
    constructor(private httpClient: HttpClient) {}
    async getAllProducts(): Promise<IProduct[]> {
        const response = await this.httpClient.get("/Product");
        return response as IProduct[];
    }
    getProductById(id: string): Promise<IProduct> {
        throw new Error("Method not implemented.");
    }
    async createProduct(product: Omit<IProduct, "id" | "idx">): Promise<IProduct> {
        const response = await this.httpClient.post("/Product", product);
        return response as IProduct;
    }
    updateProduct(id: string, product: Omit<IProduct, "id" | "idx">): Promise<IProduct> {
        throw new Error("Method not implemented.");
    }
    async deleteProduct(id: string): Promise<IProduct> {
        const response = await this.httpClient.delete(`/Product/${id}`);
        return response as IProduct;
    }
}
