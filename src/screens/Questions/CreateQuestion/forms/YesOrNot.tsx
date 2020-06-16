import React, { useRef, useCallback } from 'react';
import { Alert } from 'react-native';
import { Form } from '@unform/mobile';
import {
  QuestionAvatar,
  QuestionCard,
  Options,
  Option,
  OptionText,
} from './styles';
import Input from '../../../../components/Form/Input';
import Button from '../../../../components/Button';
import { useQuestion } from '../../../../hooks/Question';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const YesOrNot: React.FC = () => {
  const formRef = useRef(null);
  const { newQuestion } = useQuestion();
  const { navigate } = useNavigation();

  const handleSubmit = useCallback(
    async data => {
      try {
        await newQuestion({ type: 'yesornot', title: data.title });
        navigate('Questions');
        Alert.alert('Pergunta criada com sucesso');
      } catch (error) {
        Alert.alert('Erro ao criar pergunta');
      }
    },
    [newQuestion, navigate]
  );

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <QuestionCard>
        <QuestionAvatar
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1263694342247583744/I6oEWdq__400x400.jpg',
          }}
        />

        <Input name="title" placeholder="Digite a sua pergunta..." />
        <Options>
          <Option>
            <OptionText>Sim</OptionText>
            <Icon name="check" size={22} style={{ marginLeft: 8 }} />
          </Option>
          <Option>
            <Icon name="x" size={22} style={{ marginRight: 8 }} />
            <OptionText>Não</OptionText>
          </Option>
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

export default YesOrNot;
