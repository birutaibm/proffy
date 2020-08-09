import React, { useCallback } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import { Container } from './styles';

export interface Props {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  cost: number;
  subject: string;
  whatsapp: string;
}

const Teacher: React.FC<Props> = (data) => {
  const createNewConnection = useCallback(() => {
    api.post('connections', { user_id: data.id });
  }, [data.id]);

  return (
    <Container>
      <header>
        <img src={data.avatar} alt="Foto"/>
        <div>
          <strong>{data.name}</strong>
          <span>{data.subject}</span>
        </div>
      </header>
      <p>
        {data.bio}
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {data.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${data.whatsapp}`}
          target="blanck"
        >
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </Container>
  );
}

export default Teacher;
