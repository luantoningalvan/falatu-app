import React, { useState, useEffect } from 'react';
import {
  Container,
  CreateQuestionButton,
  SectionTitle,
  Answers,
  Answer,
  AnswerIcon,
  AnswerTitle,
  AnswerTime,
  TabsSwitcher,
  Tabs,
  Tab,
  TabTitle,
  TabContent,
  Question,
  QuestionTitle,
  QuestionIcon,
  QuestionCount,
} from './styles';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useQuestion } from '../../hooks/Question';
import Icon from 'react-native-vector-icons/Feather';

const Questions: React.FC = () => {
  const [selectedTab, selectTab] = useState('own');
  const navigation = useNavigation();
  const { questions, loading, getMineQuestions } = useQuestion();

  useEffect(() => {
    async function getQuestions() {
      await getMineQuestions();
    }
    getQuestions();
  }, [getMineQuestions]);
  return (
    <Container>
      <LinearGradient colors={['#D90368', '#741960']} style={{ flex: 1 }}>
        <Header>
          <CreateQuestionButton
            onPress={() => navigation.navigate('CreateQuestion')}>
            <Icon name="plus-circle" size={24} color="#fff" />
          </CreateQuestionButton>
        </Header>
        <ScrollView style={{ flex: 1 }}>
          <SectionTitle>Respostas Recentes</SectionTitle>
          <Answers>
            <Answer>
              <AnswerIcon name="message-square" />
              <AnswerTitle>Quantos anos eu aparento ter?</AnswerTitle>
              <AnswerTime>32s</AnswerTime>
            </Answer>
            <Answer>
              <AnswerIcon name="image" />
              <AnswerTitle>Qual bermuda eu compro?</AnswerTitle>
              <AnswerTime>1min</AnswerTime>
            </Answer>
            <Answer>
              <AnswerIcon name="image" />
              <AnswerTitle>Qual bermuda eu compro?</AnswerTitle>
              <AnswerTime>2min</AnswerTime>
            </Answer>
          </Answers>

          <SectionTitle>Suas perguntas</SectionTitle>
          <TabsSwitcher>
            <Tabs>
              <Tab
                current={selectedTab === 'own'}
                onPress={() => selectTab('own')}>
                <TabTitle>Próprias</TabTitle>
              </Tab>
              <Tab
                current={selectedTab === 'default'}
                onPress={() => selectTab('default')}>
                <TabTitle>Padrões</TabTitle>
              </Tab>
            </Tabs>

            <TabContent>
              {!loading ? (
                <>
                  {selectedTab === 'own' && (
                    <View>
                      {questions.map(question => (
                        <Question>
                          <QuestionIcon name="image" />
                          <QuestionTitle>{question.title}</QuestionTitle>
                          <QuestionCount>
                            {question.answers.length} respostas
                          </QuestionCount>
                        </Question>
                      ))}
                    </View>
                  )}

                  {selectedTab === 'default' && (
                    <View>
                      {questions.map(question => (
                        <Question>
                          <QuestionIcon name="image" />
                          <QuestionTitle>{question.title}</QuestionTitle>
                          <QuestionCount>
                            {question.answers.length} respostas
                          </QuestionCount>
                        </Question>
                      ))}
                    </View>
                  )}
                </>
              ) : (
                <ActivityIndicator />
              )}
            </TabContent>
          </TabsSwitcher>
        </ScrollView>
      </LinearGradient>
    </Container>
  );
};

export default Questions;
