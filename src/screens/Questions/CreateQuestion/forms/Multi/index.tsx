import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import {
  QuestionAvatar,
  QuestionCard,
  RemoveButton,
  Options,
  Option,
  Content,
  AddMoreButton,
  AddMoreText,
} from './styles';
import { TextInput } from '../../../../../components/Form/styles';
import Button from '../../../../../components/Button';
import { useQuestion } from '../../../../../hooks/Question';
import { useNavigation } from '@react-navigation/native';
import DefaultProfilePicture from '../../../../../../assets/static/default-profile-picture.png';
import Icon from 'react-native-vector-icons/Feather';

const YesOrNot: React.FC = () => {
  const { newQuestion } = useQuestion();
  const { navigate } = useNavigation();

  const [title, setTitle] = useState('');
  const [options, setOptions] = useState([{ title: '' }, { title: '' }]);
  const [height, setHeight] = useState(42);

  const handleSubmit = useCallback(async () => {
    try {
      await newQuestion({ type: 'multi', title, options });
      navigate('Questions');
      Alert.alert('Pergunta criada com sucesso');
    } catch (error) {
      Alert.alert('Erro ao criar pergunta');
    }
  }, [newQuestion, navigate, options, title]);

  const handleChangeOption = (index: number, text: string) => {
    const newArray = [...options];
    newArray[index] = { title: text };
    setOptions(newArray);
  };

  const handleAddOption = () => {
    if (options.length < 4) {
      setOptions(current => [...current, { title: '' }]);
    }
  };

  const handleRemoveOption = (index: number) => {
    if (options.length > 2) {
      const newArray = [...options];
      newArray.splice(index, 1);
      setOptions(newArray);
    }
  };

  return (
    <>
      <QuestionCard>
        <QuestionAvatar source={DefaultProfilePicture} />

        <Content>
          <TextInput
            placeholder="Digite a sua pergunta..."
            value={title}
            onChangeText={t => setTitle(t)}
            style={{ maxHeight: height }}
            multiline
            onContentSizeChange={e =>
              setHeight(e.nativeEvent.contentSize.height)
            }
          />
          <Options>
            {options.map((item, index) => (
              <Option>
                <TextInput
                  placeholder={`Opção ${index + 1}`}
                  onChangeText={t => handleChangeOption(index, t)}
                  value={options[index].title}
                />
                <RemoveButton onPress={() => handleRemoveOption(index)}>
                  <Icon name="x" size={24} color="#333" />
                </RemoveButton>
              </Option>
            ))}

            <AddMoreButton onPress={handleAddOption}>
              <Icon name="plus-circle" size={22} color="#333" />
              <AddMoreText>Adicionar</AddMoreText>
            </AddMoreButton>
          </Options>
        </Content>
      </QuestionCard>

      <Button icon="plus-circle" grow onPress={handleSubmit}>
        Criar
      </Button>
    </>
  );
};

export default YesOrNot;
