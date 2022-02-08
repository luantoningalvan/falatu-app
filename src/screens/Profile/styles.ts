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
  font-size: 18px;
  font-family: 'Poppins-Light';
  margin-top: 8px;
  letter-spacing: 3px;
`;

export const InfoCards = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 32px;
`;

export const InfoCard = styled.View`
  flex: 1;
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0px 0px 10px black;
`;
export const InfoCardTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  text-align: center;
`;
export const InfoCardNumber = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 32px;
  color: ${props => props.theme.palette.pink};
  text-align: center;
`;

export const SectionTitle = styled.Text`
  color: white;
  font-size: 24px;
  margin: 0px 32px 8px;
`;
export const PhotoGrid = styled.FlatList`
  flex-direction: row;
  margin: 0px 24px 16px;
  flex-wrap: wrap;
`;
