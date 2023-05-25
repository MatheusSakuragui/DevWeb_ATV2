import { createContext, useEffect, useState } from "react";
import { TeamProps, MatchProps, ContextProps, ThemeProps } from "../types";
import TeamService from "../services/Team";
import MatchService from "../services/Match";
import { darkTheme, lightTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

const MyContext = createContext({} as ContextProps);

function MyProvider({ children }: any) {
  const [myTeam, setMyTeam] = useState<TeamProps | undefined>();
  const [myTeams, setMyTeams] = useState([] as TeamProps[]);
  const [myMatches, setMyMatches] = useState([] as MatchProps[]);
  const [myTheme, setMyTheme] = useState<ThemeProps>(lightTheme);

  useEffect(() => {
    (async () => {
      const teamsReq: TeamProps[] = await TeamService.getTeams();
      setMyTeams(teamsReq);
      console.log(teamsReq);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (myTeam !== undefined) {
        const matchesReq: MatchProps[] = await MatchService.getMatchesByTeam(myTeam.id);
        setMyMatches(matchesReq);
      } else {
        const matchesReq: MatchProps[] = await MatchService.getMatches();
        setMyMatches(matchesReq);
      }
    })();
  }, [myTeam]);

  return (
    <ThemeProvider theme={myTheme}>
      <MyContext.Provider
        value={{ myTeam, myTeams, myMatches, myTheme, setMyTeam, setMyTheme }}
      >
        {children}
      </MyContext.Provider>
    </ThemeProvider>
  );
}

export { MyContext, MyProvider };
