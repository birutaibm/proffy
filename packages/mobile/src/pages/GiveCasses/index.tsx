import React from 'react';

import backgroundImage from '../../assets/images/give-classes-background.png';

import { Container, BackgroundImage, Title, Description, OkButton, ButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';

const GiveCasses: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <BackgroundImage resizeMode="contain" source={backgroundImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Description>
      </BackgroundImage>

      <OkButton onPress={goBack}>
        <ButtonText>Tudo bem</ButtonText>
      </OkButton>
    </Container>
  );
}

export default GiveCasses;