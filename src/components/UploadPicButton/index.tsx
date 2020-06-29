/* eslint-disable curly */
import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Feather';
import { ButtonWrapper } from './styles';
import api from '../../services/apiClient';
import { PhotoGridImage } from '../TouchablePicture/styles';

interface UploadPicButtonProps {
  index?: number | string;
  externalUri?: string;
  externalFileKey?: string;
}

interface SourceData {
  fileName: string;
  type: string;
}

export const UploadPicButton: React.ComponentType<UploadPicButtonProps> = ({
  index,
  externalUri,
  externalFileKey,
}) => {
  const [source, setSource] = React.useState<string>('');
  const [, setSourceData] = React.useState<SourceData>({
    fileName: '',
    type: '',
  });

  const options = {
    title: 'Escolha uma foto bem legal',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const uploadImage = useCallback(async response => {
    const data = new FormData();
    console.log('chegou');
    data.append('file', {
      uri: response.uri,
      type: 'image/png',
      name: 'file',
    });

    try {
      const res = await api.put('/users/avatar', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const removeImage = async () => {
    // Send DELETE request to server
    await api.delete(`/users/avatar/${index}`);
    setSource('');
    setSourceData({ fileName: '', type: '' });
  };

  const showImagePicker = async () => {
    ImagePicker.showImagePicker(options, async response => {
      // On user cancelled
      if (response.didCancel) return;

      // If some error occurs
      if (response.error) {
        Alert.alert('Erro', response.error);
      }
      setSource(response.uri);
      setSourceData({ fileName: response.fileName!, type: response.type! });

      await uploadImage(response);
    });
  };

  React.useEffect(() => {
    if (externalUri && externalFileKey) {
      setSource(externalUri);
      setSourceData({ fileName: externalFileKey, type: 'image/jpg' });
    }
  }, [externalUri, externalFileKey]);

  return source !== '' ? (
    <Menu>
      <MenuTrigger>
        <PhotoGridImage source={{ uri: source }} />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption onSelect={() => removeImage()} text="Remover" />
      </MenuOptions>
    </Menu>
  ) : (
    <ButtonWrapper onPress={() => showImagePicker()}>
      <Icon name="image" color="#fff" size={22} />
    </ButtonWrapper>
  );
};
