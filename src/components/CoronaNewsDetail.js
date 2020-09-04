import React from 'react';
import {Image, Linking} from 'react-native';
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from 'native-base';
import {Get_Data_Control} from '../actions';
import {connect} from 'react-redux';

const CoronaNewsDetail = props => {
  return (
    <Container style={{marginBottom: '15%', flex: 1}}>
      <View>
        <DeckSwiper
          dataSource={props.data}
          renderItem={item => (
            <Card style={{elevation: 3}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: item.image}} />
                  <Body>
                    <Text>{item.name}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  style={{height: 300, flex: 1}}
                  source={{uri: item.image}}
                />
              </CardItem>
              <CardItem>
                <Text numberOfLines={10}>{item.description}</Text>
              </CardItem>
              <CardItem>
                <Text
                  style={{color: 'blue'}}
                  onPress={() => Linking.openURL(item.url)}>
                  Devamını Oku
                </Text>
              </CardItem>
            </Card>
          )}
        />
      </View>
    </Container>
  );
};
export default connect(
  null,
  {Get_Data_Control},
)(CoronaNewsDetail);
