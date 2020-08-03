import React from 'react';

import PageHeader from '../../components/PageHeader';

import { Container, Form, Input, Content } from './styles';
import Teacher from '../../components/Teacher';

const TeacherList: React.FC = () => {
  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <Input>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </Input>
          <Input>
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </Input>
          <Input>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </Input>
        </Form>
      </PageHeader>

      <Content>
        <Teacher />
      </Content>
    </Container>
  );
}

export default TeacherList;