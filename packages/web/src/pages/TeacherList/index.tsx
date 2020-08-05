import React, { useState, useCallback, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import Teacher, { Props as TeacherProps } from '../../components/Teacher';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import { Container, Form, Content } from './styles';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);

  const searchTeachers = useCallback(() => {
    // const query: string[] = [];
    // if (subject.length) {
    //   query.push(`subject=${subject}`);
    // }
    // if (weekDay.length) {
    //   query.push(`week_day=${weekDay}`);
    // }
    // if (time.length) {
    //   query.push(`time=${time}`);
    // }
    // const queryParams = query.length ? `?${query.join('&')}` : '';
    // api.get(`classes${queryParams}`)
    api.get('classes', {
      params: { subject, time, week_day: weekDay }
    }).then(
      ({data}) => setTeachers(data)
    ).catch(
      () => setTeachers([])
    );
  }, [subject, time, weekDay]);
  
  useEffect(() => {
    searchTeachers();
  }, [searchTeachers, subject, time, weekDay]);

  return (
    <Container className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Ciências', label: 'Ciências'},
              {value: 'Educação física', label: 'Educação física'},
              {value: 'Física', label: 'Física'},
              {value: 'Geografia', label: 'Geografia'},
              {value: 'História', label: 'História'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'Química', label: 'Química'},
              {value: 'Português', label: 'Português'},
              {value: 'Inglês', label: 'Inglês'},
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={weekDay}
            onChange={e => setWeekDay(e.target.value)}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </Form>
      </PageHeader>

      <Content>
        {teachers.map((teacher: TeacherProps) => (
          <Teacher key={teacher.id} {...teacher} />
        ))}
      </Content>
    </Container>
  );
}

export default TeacherList;