import { Request, Response } from "express";
import { Team } from "../models/teams";
import AppDataSource from "../data-source";
import { ILike } from "typeorm";

class TeamController {

  public async createTeam(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    try {
      const newTeam = new Team();
      newTeam.name = name;

      await AppDataSource.manager.save(Team, newTeam);
      return res.json( `O time${name} foi cadastrado!` );
    } 
    catch (error) {
      if (error.code === "23505") {
        return res.json({
          error: `O nome ${name} já existe`,
        });
      }
    }
  }

  public async getTeams(req: Request, res: Response): Promise<Response> {
    try {
      const find = await AppDataSource.getRepository(Team).find({ order: {name: "ASC",}});
      return res.json(find);
    } catch (error) {
      console.log(error);
    }
  }

  public async UpdateTeamValues( req: Request, res: Response): Promise<Response> {
    const { id, name } = req.body;
    try {
      const update = await AppDataSource.getRepository(Team).findOneBy({id: id,});
      update.name = name;
      await AppDataSource.getRepository(Team).save(update);
      res.json(update);
    } catch (error) {
      if (error.code === "23505") {
        return res.json({
          error: `nome ${name} já existe!`,
        });
      }
    }
  }

  public async DeleteTeam(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      const deleteTeam = await AppDataSource.getRepository(Team)
        .createQueryBuilder()
        .delete()
        .from(Team)
        .where("id = :id", { id: id })
        .execute();
      return res.json(deleteTeam);
    } catch (error) {
      return res.json(error);
    }
  }

  public async getByName(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;
    try {
      const getAll = await AppDataSource.getRepository(Team).find({order: {name: "ASC",},where: {name: ILike(`%${name}%`),},});
      return res.json(getAll);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new TeamController();