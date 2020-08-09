import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const Banner = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: Poppins_400Regular;
  line-height: 30px;
  margin-top: 80px;
`;
export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)`
  height: 150px;
  width: 48%;
  background-color: #333;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonPrimary = styled(Button)`
  background-color: #9871f5;
`;

export const ButtonSecondary = styled(Button)`
  background-color: #04d361;
`;

export const ButtonImage = styled.Image``;
export const ButtonText = styled.Text`
  font-family: Archivo_700Bold;
  font-size: 20px;
  color: #fff;
`;

export const TotalConnections = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;