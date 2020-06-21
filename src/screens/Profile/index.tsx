import React, { useCallback } from 'react';
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
  PhotoGridImageButton,
  PhotoGridImage,
} from './styles';
import { ScrollView, Alert } from 'react-native';
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
import DefaultProfilePicture from '../../../assets/static/default-profile-picture.png';
import ImagePicker from 'react-native-image-picker';
import api from '../../services/apiClient';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const { signOut, user } = useAuth();
  const { avatarList } = user;

  const handleChangeAvatar = useCallback(async () => {
    ImagePicker.showImagePicker(
      {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      async response => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao tentar selecionar foto');
          return;
        }

        const data = new FormData();

        data.append('photo', {
          uri: response.uri,
          type: 'image/png',
          name: 'photo',
        });

        try {
          const res = await api.put('/users/avatar', data, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });

          console.log(res);
        } catch (error) {
          console.log(error);
        }
      }
    );
  }, []);

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
            {user.avatarList?.length > 0 ? (
              <ProfilePicture source={{ uri: user.avatarList[0].url }} />
            ) : (
              <ProfilePicture source={DefaultProfilePicture} />
            )}
            <ProfileName>
              {user.name
                ? `${user.name} (@${user.username})`
                : `@${user.username}`}
            </ProfileName>
          </ProfileCard>

          <InfoCards>
            <InfoCard>
              <InfoCardNumber onPress={() => navigation.navigate('Questions')}>
                {user.answerCount || 0}
              </InfoCardNumber>
              <InfoCardTitle>respostas</InfoCardTitle>
            </InfoCard>

            <InfoCard style={{ marginLeft: 16 }}>
              <InfoCardNumber onPress={() => navigation.navigate('Questions')}>
                {user.questionCount || 0}
              </InfoCardNumber>
              <InfoCardTitle>perguntas</InfoCardTitle>
            </InfoCard>
          </InfoCards>

          <SectionTitle>Suas fotos</SectionTitle>
          <PhotoGrid>
            {avatarList.map(avatar => (
              <PhotoGridImage source={{ uri: avatar.url }} />
            ))}
            {[...Array(6 - avatarList.length)].map(_x => (
              <PhotoGridImageButton onPress={handleChangeAvatar}>
                <Icon name="image" color="#fff" size={22} />
              </PhotoGridImageButton>
            ))}
          </PhotoGrid>
        </ScrollView>
      </LinearGradient>
    </Container>
  );
};

export default Profile;
