import React, { useCallback, useState, useMemo } from 'react';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.png';

import { Container, TopBar, Link, Header, Title } from './styles';

interface Props {
  title: string;
  toggleChildren?: React.ReactNode;
}

const PageHeader: React.FC<Props> = (props) => {
  const [showChildren, setShowChildren] = useState(false);

  const toggleChildrenButton = useMemo(() => {
    if (props.toggleChildren) {
      return (
        <BorderlessButton onPress={() => setShowChildren(old => !old)}>
          {props.toggleChildren}
        </BorderlessButton>
      );
    } else {
      return null;
    }
  }, [props.toggleChildren, setShowChildren]);

  const { navigate } = useNavigation();

  const handleGoBack = useCallback(() => {
    navigate('Landing');
  }, []);

  return (
    <Container>
      <TopBar>
        <Link onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain"/>
        </Link>
        <Image source={logoImg} resizeMode="contain"/>
      </TopBar>
      <Header>
        <Title>{props.title}</Title>
        {toggleChildrenButton}
      </Header>
      {showChildren && props.children}
    </Container>
  );
}

export default PageHeader;