import React, { useRef, useCallback } from 'react';
import { Alert } from 'react-native';
import { Form } from '@unform/mobile';
import { QuestionAvatar, QuestionCard } from './styles';
import Input from '../../../../../components/Form/Input';
import Button from '../../../../../components/Button';
import { useQuestion } from '../../../../../hooks/Question';
import { useNavigation } from '@react-navigation/native';
import DefaultProfilePicture from '../../../../../../assets/static/default-profile-picture.png';

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
    <Form onSubmit={handleSubmit} ref={formRef} style={{ width: '100%' }}>
      <QuestionCard>
        <QuestionAvatar source={DefaultProfilePicture} />

        <Input name="title" placeholder="Digite a sua pergunta..." />
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
