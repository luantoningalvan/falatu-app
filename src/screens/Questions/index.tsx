import React, { useState, useEffect } from 'react';
import {
  Container,
  CreateQuestionButton,
  SectionTitle,
  Answers,
  Answer,
  AnswerIcon,
  AnswerTitle,
  AnswerAnswer,
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
import { ScrollView, View } from 'react-native';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useQuestion } from '../../hooks/Question';
import Icon from 'react-native-vector-icons/Feather';
import Loader from '../../components/Loader';

const Questions: React.FC = () => {
  const [selectedTab, selectTab] = useState('active');
  const navigation = useNavigation();
  const {
    questions,
    answers,
    loading,
    getMineQuestions,
    getLastAnswers,
  } = useQuestion();

  useEffect(() => {
    async function getQuestions() {
      Promise.all([getMineQuestions(), getLastAnswers()]);
    }
    getQuestions();
  }, [getMineQuestions, getLastAnswers]);
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
          {!loading ? (
            <Answers>
              {answers.map(answer => (
                <Answer>
                  <AnswerIcon name="message-square" />
                  <AnswerTitle>{answer.title}</AnswerTitle>
                  <AnswerAnswer>{answer.answer}</AnswerAnswer>
                </Answer>
              ))}
            </Answers>
          ) : (
            <Loader />
          )}
          <SectionTitle>Suas perguntas</SectionTitle>
          <TabsSwitcher>
            <Tabs>
              <Tab
                current={selectedTab === 'active'}
                onPress={() => selectTab('active')}>
                <TabTitle>Ativas</TabTitle>
              </Tab>
              <Tab
                current={selectedTab === 'expired'}
                onPress={() => selectTab('expired')}>
                <TabTitle>Expiradas</TabTitle>
              </Tab>
            </Tabs>

            <TabContent>
              {!loading ? (
                <>
                  {selectedTab === 'active' && (
                    <View>
                      {questions
                        .filter(q => !q.expired)
                        .map(question => (
                          <Question
                            onPress={() =>
                              navigation.navigate('SeeQuestion', {
                                question: question,
                              })
                            }>
                            <QuestionIcon name="image" />
                            <QuestionTitle>{question.title}</QuestionTitle>
                            <QuestionCount>
                              {question.answers.length} respostas
                            </QuestionCount>
                          </Question>
                        ))}
                    </View>
                  )}

                  {selectedTab === 'expired' && (
                    <View>
                      {questions
                        .filter(q => q.expired)
                        .map(question => (
                          <Question
                            onPress={() =>
                              navigation.navigate('SeeQuestion', {
                                question: question,
                              })
                            }>
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
                <Loader />
              )}
            </TabContent>
          </TabsSwitcher>
        </ScrollView>
      </LinearGradient>
    </Container>
  );
};

export default Questions;
