import React, { useState, useCallback, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Container, HeaderDescription, Content, ScheduleItem } from './styles';
import { useHistory } from 'react-router-dom';

interface IScheduleItem {
  week_day: string;
  from: string;
  to: string;
}

const TeacherForm: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [scheduleItems, setScheduleItems] = useState<IScheduleItem[]>([
    { week_day: '', from: '', to: '' }
  ]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems(old => [
      ...old,
      { week_day: '', from: '', to: '' }
    ]);
  }, []);

  const setScheduleItem = useCallback(
    (position: number, field: string, value: string) => {
      setScheduleItems(old =>
        old.map((item, index) =>
          (index === position)
            ? { ...item, [field]: value }
            : item
        )
      );
    },
    []
  );

  const handleFormSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    api.post('classes', {
      name,
      avatar,
      bio,
      whatsapp,
      subject,
      cost: Number(cost),
      schedule: scheduleItems.map(item => {
        return { ...item, week_day: Number(item.week_day)}
      }),
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    }).catch(() =>
      alert('Erro no cadastro!')
    );
  }, [avatar, bio, cost, history, name, scheduleItems, subject, whatsapp]);

  return (
    <Container className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
      >
        <HeaderDescription>
          O primeiro passo é preencher esse formulário
        </HeaderDescription>
      </PageHeader>
      <Content>
        <form onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome completo" 
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
            <Textarea
              name="bio"
              label="Biografia" 
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
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
            <Input
              name="cost"
              label="Custo da sua hora de aula"
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => (
              <ScheduleItem key={index.toString()}>
                <Select
                  name="week_day"
                  label="Dia da semana"
                  value={scheduleItem.week_day}
                  onChange={e => setScheduleItem(index, 'week_day', e.target.value)}
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
                  name="from"
                  label="Das"
                  value={scheduleItem.from}
                  onChange={e => setScheduleItem(index, 'from', e.target.value)}
                />
                <Input
                  type="time"
                  name="to"
                  label="Até"
                  value={scheduleItem.to}
                  onChange={e => setScheduleItem(index, 'to', e.target.value)}
                />
              </ScheduleItem>
            ))}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso" />
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type="submit">Salvar casdastro</button>
          </footer>
        </form>
      </Content>
    </Container>
  );
}

export default TeacherForm;