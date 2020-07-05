import React, { useState, useRef, useCallback } from 'react';
import { Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { QuestionCard, Options, Option, OptionImage } from './styles';
import Input from '../../../../../components/Form/Input';
import Button from '../../../../../components/Button';
import { useQuestion } from '../../../../../hooks/Question';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';

interface SourceData {
  uri: string;
  type: string;
  name: string;
}

const PhotoComparision: React.FC = () => {
  const formRef = useRef(null);
  const [options, setOptions] = useState<SourceData[]>([
    {},
    {},
  ] as SourceData[]);

  const { newQuestion } = useQuestion();
  const { navigate } = useNavigation();

  const handleSubmit = useCallback(
    async data => {
      try {
        await newQuestion({
          type: 'photocomp',
          title: data.title,
          files: [
            {
              uri: options[0].uri,
              type: 'image/png',
              name: options[0].name,
            },
            {
              uri: options[1].uri,
              type: 'image/png',
              name: options[1].name,
            },
          ],
        });
        navigate('Questions');
        Alert.alert('Pergunta criada com sucesso');
      } catch (error) {
        Alert.alert('Erro ao criar pergunta');
      }
    },
    [newQuestion, navigate, options]
  );

  const showImagePicker = async (index: number) => {
    const imagePickerOptions = {
      title: 'Escolha uma foto bem legal',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(imagePickerOptions, async response => {
      if (response.didCancel) {
        return;
      }

      if (response.error) {
        Alert.alert('Erro', response.error);
      }

      setOptions(
        options.map((cItem, cIndex) =>
          cIndex === index
            ? {
                uri: response.uri,
                type: 'image/png',
                name: 'file',
              }
            : cItem
        )
      );
    });
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef} style={{ width: '100%' }}>
      <QuestionCard>
        <Input name="title" placeholder="Digite a sua pergunta..." />

        <Options>
          {options.map((opt, i) => {
            return (
              <Option onPress={() => showImagePicker(i)}>
                {Object.keys(opt).length !== 0 ? (
                  <OptionImage
                    source={{ uri: opt.uri }}
                    height={200}
                    width={200}
                  />
                ) : (
                  <Icon name="plus-circle" size={32} color="#333" />
                )}
              </Option>
            );
          })}
        </Options>
      </QuestionCard>

      <Button
        icon="plus-circle"
        grow
        onPress={() => (formRef.current as any).submitForm()}>
        Criar
      </Button>
    </Form>
  );
};

export default PhotoComparision;
