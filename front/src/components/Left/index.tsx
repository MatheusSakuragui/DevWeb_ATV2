import styled from "styled-components";
import { useContexto } from "../../hooks";
import { H4Sld, UlSld } from "../../styles/components";
import { Match } from "../Match";

export function Left() {
  const { myMatches, myTeam } = useContexto();
  console.log(myMatches);
  
  return (
    <WrapperSld>
      <H4Sld>PARTIDAS {myTeam ? `- ${myTeam.name}` : ''}</H4Sld>

      <UlSld>
        {myMatches && myMatches.map(m => (
          <LiSld key={m.id}>
            <Match host={m.host.name} visitor={m.visitor.name} date={m.date} />
          </LiSld>
        ))}
      </UlSld>
    </WrapperSld>
  );
}

export const WrapperSld = styled.div`
  width: 60%;
  background-color: ${(props => props.theme.main)};
  color: ${(props => props.theme.text)};
  display: flex;
  text-align: center;
  flex-direction: column;
  list-style: none;
  @media (max-width: 800px) {
    width: calc(100% - 2.8rem);
    margin: 0 auto;
  }
`;

export const LiSld = styled.li`
  margin-bottom: 1rem;
  padding: 10px 0px;
`;
