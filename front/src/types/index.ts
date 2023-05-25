export interface TeamProps{
    id: number;
    name: string;
}

export interface MatchProps{
    id: number;
    date: string;
    host: TeamProps;
    visitor: TeamProps;
}

export interface ContextProps {
    myTeam: TeamProps | undefined;
    myTeams: TeamProps[];
    myMatches: MatchProps[];
    myTheme: ThemeProps;
    setMyTeam: Function;
    setMyTheme: Function;
}

export interface ThemeProps {
    name: string;
    background: string;
    main: string;
    title: string;
    text: string;
    imgbackground: string;
}
