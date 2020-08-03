import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Container, TopBar, Content } from './styles';

interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = (props) => {
  return (
    <Container>
      <TopBar>
        <Link to="/">
          <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </TopBar>
      <Content>
        <strong>{props.title}</strong>
        {props.children}
      </Content>
    </Container>
  );
}

export default PageHeader;