import { Router } from "express";
import MatchController from "../controllers/MatchController";
const match = Router();

match.post("/", MatchController.createMatch);
match.get("/", MatchController.getMatches);
match.delete("/", MatchController.deleteMatch);
match.get("/:id", MatchController.getByTeam);
match.put("/:id", MatchController.updateMatch);

export default match;