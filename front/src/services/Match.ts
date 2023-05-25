import Route from "./route";
import { MatchProps } from "../types";

class MatchService {
  async createMatch(idCasa: number, idVisitante: number): Promise<void> {
    await Route.post("/match", { idCasa, idVisitante });
  }

  async getMatches(): Promise<MatchProps[]> {
    const { data } = await Route.get("/match");
    return data;
  }

  async updateMatch(id: number, idHost: number, idVisitor: number, date: string): Promise<void> {
    await Route.put(`/match/${id}`, { idHost, idVisitor, date });
  }

  async getMatchesByTeam(id: number): Promise<MatchProps[]> {
    const { data } = await Route.get(`/match/${id}`);
    return data;
  }

}

const matchService = new MatchService();
export default matchService;
