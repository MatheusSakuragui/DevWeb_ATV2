import { Router } from "express";
import TeamController from "../controllers/TeamController";
const team = Router();
team.post("/", TeamController.createTeam);
team.get("/teams", TeamController.getTeams);
team.get("/team/:name", TeamController.getByName);
team.put("/team", TeamController.UpdateTeamValues);
team.delete("/team", TeamController.DeleteTeam);

export default team;