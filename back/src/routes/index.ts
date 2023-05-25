import { Router } from "express";
import teams from "./teamRoutes";
import matches from "./matchRoutes";

const routes = Router();

routes.use("/team", teams);
routes.use("/match", matches);

export default routes;