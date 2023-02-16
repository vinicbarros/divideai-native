import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity<IButtonProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: 40px;
  background-color: ${(props) => props.cor};
  height: 55px;
  border: ${(props) => (props.border ? props.border : "none")};
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    background-color: ${(props) => props.dcor};
  }
`;

export const ButtonTitle = styled.Text<ITextProps>`
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: ${(props) => props.fontColor};
`;

interface IButtonProps {
  cor?: string;
  dcor?: string;
  border?: string;
  width?: string;
}

interface ITextProps {
  fontColor: string;
}
