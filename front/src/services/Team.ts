import Route from "./route";
import { TeamProps } from "../types";

class TeamService {
  async createTeam(name: string): Promise<void> {
    await Route.post("/team", { name });
  }

  async getTeams(): Promise<TeamProps[]> {
    const { data } = await Route.get("/team/teams");
    return data;
  }

  async updateTeam(id: number, name: string): Promise<void> {
    await Route.put("/team/team", { id, name });
  }

  async getTeamByName(teamName: string): Promise<TeamProps> {
    const { data } = await Route.get(`/team/team/${teamName}`);
    return data;
  }
}

const teamService = new TeamService();
export default teamService;
