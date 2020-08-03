import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container } from './styles';

const Teacher: React.FC = () => {
  return (
    <Container>
      <header>
        <img src="https://avatars1.githubusercontent.com/u/19666564?s=460&u=0c5de999726b91cd952737d4a24cefb7f310eda4&v=4" alt="Foto"/>
        <div>
          <strong>Rafael Arantes</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        blevers....
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
}

export default Teacher;