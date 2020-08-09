import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #fff;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  font-family: Archivo_700Bold;
  color: #32264d;
  font-size: 20px;
`;

export const Subject = styled.Text`
  font-family: Poppins_400Regular;
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

export const Bio = styled.Text`
  margin: 0 24px;
  font-family: Poppins_400Regular;
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

export const Footer = styled.View`
  background-color: #fafafc;
  padding: 24px;
  margin-top: 24px;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: Poppins_400Regular;
  font-size: 14px;
  color: #6a6180;
`;

export const PriceValue = styled.Text`
  font-family: Archivo_700Bold;
  font-size: 16px;
  color: #8257e5;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

const Button = styled(RectButton)`
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const FavoriteButton = styled(Button)`
  background-color: #8257e5;
  width: 56px;
`;

export const FavoritedButton = styled(FavoriteButton)`
  background-color: #e33d3d;
`;

export const ContactButton = styled(Button)`
  background-color: #04d361;
  flex: 1;
  flex-direction: row;
`;

export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 16px;
  margin-left: 16px;
`;
