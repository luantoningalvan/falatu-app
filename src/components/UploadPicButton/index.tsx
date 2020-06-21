/* eslint-disable curly */
import React from 'react';
import { Alert, Platform } from 'react-native';
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
  index?: number;
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
  const [sourceData, setSourceData] = React.useState<SourceData>({
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

  const uploadImage = async () => {
    // Create a new multipart/form-data
    const data = new FormData();

    // Append image to form data
    data.append('file', {
      name: sourceData.fileName,
      type: sourceData.type,
      uri: Platform.OS === 'android' ? source : source.replace('file://', ''),
    });

    // Send PUT request to server
    const apiData = await api.put('/users/avatar', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(apiData.data);
  };

  const removeImage = async () => {
    // Send DELETE request to server
    const data = await api.delete(`/users/avatar/${index}`);
    console.log(data);
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
      // Store image source in state
      setSource(response.uri);

      console.log(response.fileName, response.type);

      // Store metadata
      setSourceData({ fileName: response.fileName!, type: response.type! });

      await uploadImage();
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
