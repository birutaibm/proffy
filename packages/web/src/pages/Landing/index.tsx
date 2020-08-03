import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { Container, Content, LogoContainer, HeroImage, ButtonsContainer, TotalConnections } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content className="container">
        <LogoContainer>
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt=""/>

        <ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt=""/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-class">
            <img src={giveClassIcon} alt=""/>
            Dar aula
          </Link>
        </ButtonsContainer>

        <TotalConnections>
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt=""/>
        </TotalConnections>
      </Content>
    </Container>
  );
}

export default Landing;