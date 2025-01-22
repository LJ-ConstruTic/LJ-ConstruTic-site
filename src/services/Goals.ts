import { IGoals } from "@/domain/models/Goals";
import api from "./apiClient";

export async function getGoals(): Promise<IGoals[]> {
    const response = (await api.get("/Metas")).data as IGoals[];
    return response;
}
