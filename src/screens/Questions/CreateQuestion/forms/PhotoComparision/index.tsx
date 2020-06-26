import React, { useRef, useCallback } from 'react';
import { Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { QuestionCard, Options, Option } from './styles';
import Input from '../../../../../components/Form/Input';
import Button from '../../../../../components/Button';
import { useQuestion } from '../../../../../hooks/Question';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Written: React.FC = () => {
  const formRef = useRef(null);
  const { newQuestion } = useQuestion();
  const { navigate } = useNavigation();

  const handleSubmit = useCallback(
    async data => {
      try {
        await newQuestion({ type: 'written', title: data.title });
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
        <Input name="title" placeholder="Digite a sua pergunta..." />

        <Options>
          <Option>
            <Icon name="plus-circle" size={32} color="#333" />
          </Option>
          <Option>
            <Icon name="plus-circle" size={32} color="#333" />
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

export default Written;
