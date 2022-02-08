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
} from './styles';
import {ScrollView, RefreshControl} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/Auth';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/Feather';
import DefaultProfilePicture from '../../../assets/static/default-profile-picture.png';
import {UploadPicButton} from '../../components/UploadPicButton';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const {signOut, refreshMe, user} = useAuth();
  const {avatarList} = user;

  // Control for refresh page
  const [isRefreshing, setRefreshing] = React.useState<boolean>(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshMe();
    setRefreshing(false);
  };

  return (
    <Container>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }>
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
            <ProfilePicture source={{uri: user.avatarList[0].url}} />
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

          <InfoCard style={{marginLeft: 16}}>
            <InfoCardNumber onPress={() => navigation.navigate('Questions')}>
              {user.questionCount || 0}
            </InfoCardNumber>
            <InfoCardTitle>perguntas</InfoCardTitle>
          </InfoCard>
        </InfoCards>

        <SectionTitle>Suas fotos</SectionTitle>
        <PhotoGrid
          data={[
            ...avatarList,
            ...Array.from(Array(6 - avatarList.length).keys()),
          ]}
          keyExtractor={(item, index: number) => item._id || 'empty' + index}
          numColumns={3}
          renderItem={({item}, index: number) => (
            <UploadPicButton
              externalUri={item.url}
              externalFileKey={item.key}
              index={index}
            />
          )}
        />
      </ScrollView>
    </Container>
  );
};

export default Profile;
