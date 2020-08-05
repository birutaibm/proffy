import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetConnectionsResponseDTO } from '@proffy/shared/apiDTOs';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

import { Container, Content, LogoContainer, HeroImage, ButtonsContainer, TotalConnections } from './styles';

const Landing: React.FC = () => {
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    api.get<GetConnectionsResponseDTO>('/connections').then(response => {
      setConnections(response.data.total);
    });
  }, []);

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
          Total de {connections} conexões já realizadas
          <img src={purpleHeartIcon} alt=""/>
        </TotalConnections>
      </Content>
    </Container>
  );
}

export default Landing;