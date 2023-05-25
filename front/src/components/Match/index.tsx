import styled from "styled-components";

export function Match({ host, visitor, date }: { host: string; visitor: string; date: string }) {
  const formatDate = (data: string) => {
    const [formated,] = new Date(data).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).split(",");
    return formated;
  };

  return (
    <DivSld>
      <span>{host}</span>
      <span className="match-divider">X</span>
      <span>{visitor}</span>
      <span>{formatDate(date)}</span>
    </DivSld>
  );
}

const DivSld = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .match-divider {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: 0.5rem 0;
  }
`;
