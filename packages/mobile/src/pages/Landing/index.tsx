import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import { useConnections } from '@proffy/frontend/hooks/connections';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import { Container, Banner, Title, TitleBold, ButtonsContainer, ButtonPrimary, ButtonImage, ButtonText, ButtonSecondary, TotalConnections } from './styles';

const Landing: React.FC = () => {
  const { connections } = useConnections();

  const { navigate } = useNavigation();

  return (
    <Container>
      <Banner source={landingImage} resizeMode='contain' />
      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>
          O que deseja fazer?
        </TitleBold>
      </Title>
      <ButtonsContainer>
        <ButtonPrimary onPress={() => navigate('Study')}>
          <ButtonImage source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>
        <ButtonSecondary onPress={() => navigate('GiveClasses')}>
          <ButtonImage source={giveClassesIcon} />
          <ButtonText>Dar aula</ButtonText>
        </ButtonSecondary>
      </ButtonsContainer>
      <TotalConnections>
        Total de {connections} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
}

export default Landing;