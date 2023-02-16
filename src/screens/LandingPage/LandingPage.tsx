import { View, Button, Text, Image } from "react-native";
import styled from "styled-components/native";
import MyButton from "../../components/MyButton";
import { BackgroundView, ContainerView } from "./style";

export default function LandingPage() {
  return (
    <BackgroundView>
      <ContainerView>
        <WelcomeImage
          source={require("../../assets/images/landing-page.png")}
        />
        <Title>Crie sua conta na Divide Aí</Title>
        <Subtitle>
          Divide Aí é uma poderosa ferramenta para te salvar de problemas com
          despesas compartilhadas!
        </Subtitle>
        <MyButton
          width="80%"
          title="Entrar"
          cor="#0369c9"
          fontColor="#fff"
          accessibilityLabel="Learn more about this purple button"
        />
        <MyButton
          width="80%"
          title="Criar uma conta"
          cor="#fff"
          fontColor="#0369c9"
          border="2px solid #0369c9"
          accessibilityLabel="Learn more about this purple button"
        />
      </ContainerView>
    </BackgroundView>
  );
}

const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  width: 200px;
  margin-inline: auto;
  line-height: 30px;
  margin-bottom: 8px;
  color: #2a2a2a;
`;

const Subtitle = styled.Text`
  font-size: 12px;
  text-align: center;
  line-height: 18px;
  color: #838383;
  font-weight: 600;
  margin-bottom: 10px;
`;

const WelcomeImage = styled.Image`
  width: 80%;
  height: 300px;
  margin-bottom: 14px;
`;
