import React, {useState, useCallback} from 'react';
import {Alert} from 'react-native';
import {Dimensions} from 'react-native';
import {
  Container,
  Text,
  Paper,
  ModalIcon,
  ModaTitle,
  ReportReasons,
  Reason,
  ReasonText,
} from './style';
import Icon from 'react-native-vector-icons/Feather';
import {usePlay} from '../../hooks/Play';
import Modal from 'react-native-modal';

interface ReportButtonProps {
  question: {
    _id: string;
  };
}

const ReportButton = ({question}: ReportButtonProps) => {
  const {reportQuestion} = usePlay();
  const [isOpen, setIsOpen] = useState(false);

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  const reasons = [
    {
      type: 'porn',
      title: 'Contém pornografia',
    },
    {
      type: 'gore',
      title: 'Imagem nojenta/aterrorizante',
    },
  ];

  const handleReport = useCallback(
    async (reason: string) => {
      try {
        await reportQuestion({question: question._id, reportReason: reason});
        setIsOpen(false);
        Alert.alert('Denúncia efetuada com sucesso!');
      } catch (error) {
        Alert.alert('Erro');
      }
    },
    [question._id, reportQuestion],
  );
  return (
    <>
      <Modal
        isVisible={isOpen}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        hideModalContentWhileAnimating
        useNativeDriver
        onBackButtonPress={() => setIsOpen(false)}
        onBackdropPress={() => setIsOpen(false)}>
        <Paper>
          <ModalIcon>
            <Icon name="alert-triangle" size={50} color="#ff2255" />
          </ModalIcon>
          <ModaTitle>Denunciar pergunta</ModaTitle>
          <ReportReasons>
            {reasons.map(reason => (
              <Reason onPress={() => handleReport(reason.type)}>
                <ReasonText>{reason.title}</ReasonText>
              </Reason>
            ))}
          </ReportReasons>
        </Paper>
      </Modal>
      <Container onPress={() => setIsOpen(true)}>
        <Text>DENUNCIAR</Text>
        <Icon name="info" size={24} color="#fff" />
      </Container>
    </>
  );
};

export default ReportButton;
