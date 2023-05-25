import styled from "styled-components";
import { Left } from "../../components/Left";
import { Right } from "../../components/Right";
import { Header } from "../../components/Header";
import { SwitchTheme } from "../../components/SwitchTheme";

function InitialPage() {
  return (
    <BodyWrapper>
      <Header />
      <ContentWrapper>
        <Left />
        <Right />
      </ContentWrapper>
      <SwitchTheme />
    </BodyWrapper>
  );
}

export default InitialPage;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.background};
  @media (max-width: 800px) {
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin: 1.4rem;
  flex: 1;
  width: calc(100% - 2.8rem);

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;
