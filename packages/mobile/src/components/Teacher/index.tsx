import React, { useCallback, useState } from 'react';
import { Image, Linking, AsyncStorage } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  FavoritedButton,
  ContactButton,
  ContactButtonText, 
} from './styles';
import { useConnections } from '@proffy/frontend/hooks/connections';

interface Props {
  data: {
    id: number;
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    subject: string;
    whatsapp: string;
  }
  favorite: boolean;
}

const Teacher: React.FC<Props> = ({ data, favorite }) => {
  const { createNewConnection } = useConnections();
  const [isFavorite, setFavorite] = useState(favorite);

  const handleToggleFavorite = useCallback(async () => {
    const favoritesStr = await AsyncStorage.getItem('favorites');
    const favorites: any[] = favoritesStr ? JSON.parse(favoritesStr) : [];
    if (isFavorite) {
      favorites.splice(favorites.findIndex(favorite => favorite.id === data.id));
      setFavorite(false);
    } else {
      favorites.push(data);
      setFavorite(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  }, []);

  const handleContact = useCallback(() => {
    createNewConnection(data.id);
    Linking.openURL(`whatsapp://send?phone=${data.whatsapp}`);
  }, []);

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: data.avatar }} />
        <ProfileInfo>
          <Name>{data.name}</Name>
          <Subject>{data.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>
        {data.bio}
      </Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ {data.cost}</PriceValue>
        </Price>
        <ButtonsContainer>
          {isFavorite ? (
            <FavoritedButton onPress={handleToggleFavorite}>
              <Image source={unfavoriteIcon} />
            </FavoritedButton>
          ) : (
            <FavoriteButton onPress={handleToggleFavorite}>
              <Image source={heartOutlineIcon} />
            </FavoriteButton>
          )}
          <ContactButton onPress={handleContact}>
            <Image source={whatsappIcon} />
            <ContactButtonText>Entra em contato</ContactButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
}

export default Teacher;