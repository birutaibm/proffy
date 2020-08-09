import React, { useState, useEffect, useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import Teacher from '../../components/Teacher';

import { Container, SearchForm, Label, Input, InputGroup, InputBlock, Content } from './styles';
import { useClasses } from '@proffy/frontend/hooks/classes';
import { PostClassesResponseDTO } from '@proffy/shared/apiDTOs';
import { useFocusEffect } from '@react-navigation/native';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [favorites, setFavorites] = useState<number[]>([]);
  const { teachers, searchTeachers } = useClasses();

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        setFavorites(
          JSON.parse(response)
            .map((teacher: PostClassesResponseDTO) => teacher.id)
        );
      }
    })
  }, []);

  useEffect(() => {
    loadFavorites();
    searchTeachers({ subject, week_day: Number(weekDay), time });
  }, [subject, weekDay, time]);

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        toggleChildren={<Feather name="filter" size={20} color="#fff" />}
      >
        <SearchForm>
          <Label>Matéria</Label>
          <Input
            placeholder="Qual é a matéria?"
            placeholderTextColor="#c1bccc"
            value={subject}
            onChangeText={setSubject}
          />
          <InputGroup>
            <InputBlock>
              <Label>Dia da semana</Label>
              <Input
                placeholder="Qual o dia?"
                placeholderTextColor="#c1bccc"
                value={weekDay}
                onChangeText={setWeekDay}
              />
            </InputBlock>
            <InputBlock>
              <Label>Horário</Label>
              <Input
                placeholder="Qual o horário?"
                placeholderTextColor="#c1bccc"
                value={time}
                onChangeText={setTime}
              />
            </InputBlock>
          </InputGroup>
        </SearchForm>
      </PageHeader>
      <Content
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map(teacher => (
          <Teacher
            key={teacher.id}
            favorite={favorites.includes(teacher.id)}
            data={teacher}
          />
        ))}
      </Content>
    </Container>
  );
}

export default TeacherList;