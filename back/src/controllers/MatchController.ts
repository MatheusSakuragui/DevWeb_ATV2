import {Request, Response} from "express";
import AppDataSource from "../data-source";
import { Match } from "../models/match";
import { Team } from "../models/teams";

class MatchController{

    public async createMatch(req: Request, res: Response): Promise<Response>{
        const {idCasa, idVisitante } = req.body;
        try{
            const casa = await AppDataSource.getRepository(Team).findOneBy({id: idCasa});
            const fora = await AppDataSource.getRepository(Team).findOneBy({id: idVisitante});
            const newMatch = new Match();
            newMatch.host = casa;
            newMatch.visitor = fora;
            const insert = await AppDataSource.getRepository(Match).save(newMatch);
            return res.json(insert)
        }
        catch(error){
            return res.json(error)
        }
    }

    public async getMatches(req: Request, res: Response): Promise<Response>{
        const {limit, offset} = req.body;
        try{
            const find = await AppDataSource.getRepository(Match).find({order:{date:"DESC"}, relations:{host:true, visitor:true}, skip: offset, take: limit});
            return res.json(find)
        }
        catch(error){
            return res.json(error)
        }
    }

    public async updateMatch(req: Request, res: Response): Promise<Response>{
           const {id, idHost, idVisitor, date } = req.body
           try{
                const host = await AppDataSource.getRepository(Team).findOne({where: {id: idHost}});
                if (!host) {
                    return res.json({ error: "Mandante desconhecido" });
                };
                const visitor = await AppDataSource.getRepository(Team).findOne({where: {id: idVisitor}});
                if(!visitor){
                    return res.json({ error: "Visistante desconhecido" });
                }
                const updateMathc = await AppDataSource.getRepository(Match).findOne({ where: {id: id} });
                updateMathc.host = host;
                updateMathc.visitor = visitor
                updateMathc.date = date;
                const update = await AppDataSource.getRepository(Match).save(updateMathc);
                return res.json(update)
           } 
           catch(error){
                return res.json(error);
           }
    }

    public async getByTeam(req: Request, res: Response): Promise<Response>{
        const{ id } = req.params;
        try {
            const find = await AppDataSource.getRepository(Match).find({where:[{ host: { id: Number(id) } }, { visitor: { id: Number(id) } }], order:{ date: "DESC"}, relations: {host: true, visitor: true}});
            return res.json(find)
        }
        catch (error){
            return res.json(error);
        }
    }

    public async deleteMatch(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        try {
          const del = AppDataSource.createQueryBuilder().delete().from(Match).where("id = :id", { id }).execute();
          return res.json(del);
        } catch (error) {
          return res.json(error);
        }
      }
}

export default  new MatchController();