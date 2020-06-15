import React from 'react';
import {
  Container,
  ProfileCard,
  ProfilePicture,
  ProfileName,
  InfoCards,
  InfoCard,
  InfoCardTitle,
  InfoCardNumber,
  SectionTitle,
  PhotoGrid,
  PhotoGridImage,
} from './styles';
import { ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/Auth';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Feather';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();
  return (
    <Container>
      <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
        <ScrollView>
          <Header>
            <Menu>
              <MenuTrigger>
                <Icon name="settings" size={24} color="#fff" />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption
                  onSelect={() => navigation.navigate('Settings')}
                  text="Configurações"
                />
                <MenuOption onSelect={() => signOut()} text="Sair" />
              </MenuOptions>
            </Menu>
          </Header>
          <ProfileCard>
            <ProfilePicture
              source={{
                uri:
                  'https://scontent.fcxj1-1.fna.fbcdn.net/v/t1.0-9/90864277_1143914932612369_1772337165435404288_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=QUNGoVuQIUoAX95XxK8&_nc_ht=scontent.fcxj1-1.fna&oh=7fdacdeccaaddd9247d08133391dfbc9&oe=5F0A4B0E',
              }}
            />
            <ProfileName>Luan</ProfileName>
          </ProfileCard>

          <InfoCards>
            <InfoCard>
              <InfoCardNumber>23</InfoCardNumber>
              <InfoCardTitle>respostas</InfoCardTitle>
            </InfoCard>

            <InfoCard style={{ marginLeft: 16 }}>
              <InfoCardNumber>5</InfoCardNumber>
              <InfoCardTitle>perguntas</InfoCardTitle>
            </InfoCard>
          </InfoCards>

          <SectionTitle>Suas fotos</SectionTitle>

          <PhotoGrid>
            <PhotoGridImage>
              <Icon name="image" color="#fff" size={22} />
            </PhotoGridImage>
            <PhotoGridImage>
              <Icon name="image" color="#fff" size={22} />
            </PhotoGridImage>
            <PhotoGridImage>
              <Icon name="image" color="#fff" size={22} />
            </PhotoGridImage>
            <PhotoGridImage>
              <Icon name="image" color="#fff" size={22} />
            </PhotoGridImage>
            <PhotoGridImage>
              <Icon name="image" color="#fff" size={22} />
            </PhotoGridImage>
            <PhotoGridImage>
              <Icon name="image" color="#fff" size={22} />
            </PhotoGridImage>
          </PhotoGrid>
        </ScrollView>
      </LinearGradient>
    </Container>
  );
};

export default Profile;
