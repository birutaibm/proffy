import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { PostClassesResponseDTO, GetClassesResponseDTO } from '@proffy/shared/apiDTOs';

import PageHeader from '../../components/PageHeader';
import Teacher from '../../components/Teacher';

import { Container, Content } from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<GetClassesResponseDTO>([]);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        setFavorites(
          JSON.parse(response)
            .map((teacher: PostClassesResponseDTO) => teacher.id)
        );
      }
    })
  });

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos"></PageHeader>
      <Content
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map(teacher => (
          <Teacher
            key={teacher.id}
            favorite
            data={teacher}
          />
        ))}
      </Content>
    </Container>
  );
}

export default Favorites;