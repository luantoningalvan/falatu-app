import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const Text = styled.Text`
  color: white;
  font-size: 16px;
  margin-right: 8px;
  font-family: 'Comfortaa-Regular';
`;

export const Paper = styled.View`
  background: white;
  border-radius: 16px;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
`;

export const ReportReasons = styled.View`
  width: 100%;
`;
export const Reason = styled.TouchableOpacity`
  padding: 8px 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ececec;
`;
export const ReasonText = styled.Text`
  font-size: 17px;
  font-family: 'Comfortaa-Regular';
`;

export const ModalIcon = styled.View`
  height: 80px;
  width: 100px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background: white;
  align-items: center;
  justify-content: center;
  margin-top: -56px;
`;

export const ModaTitle = styled.Text`
  font-size: 24px;
  line-height: 24px;
  width: 100%;
  text-align: center;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ececec;
  font-family: 'Comfortaa-Bold';
`;
