import { ITeam } from "@/model/ITeam";
import api from "./apiClient";

export async function getTeams(): Promise<ITeam[]> {
    const response = (await api.get("/Team")).data as ITeam[];
    return response;
}
