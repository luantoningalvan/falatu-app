import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 86px;
  padding: 16px;
`;

export const ProfileCard = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const ProfilePicture = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`;

export const ProfileName = styled.Text`
  color: white;
  font-size: 26px;
  font-family: 'Comfortaa-Light';
  margin-top: 8px;
  letter-spacing: 5px;
`;

export const InfoCards = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
`;

export const InfoCard = styled.View`
  width: 150px;
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0px 0px 10px black;
`;
export const InfoCardTitle = styled.Text`
  font-family: 'Comfortaa-Regular';
  font-size: 16px;
  text-align: center;
`;
export const InfoCardNumber = styled.Text`
  font-family: 'Comfortaa-Bold';
  font-size: 32px;
  color: ${props => props.theme.palette.pink};
  text-align: center;
`;
