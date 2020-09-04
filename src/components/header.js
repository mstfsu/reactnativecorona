import {Container, Header, Title, Button, Icon} from 'native-base';
import React, {Component} from 'react-native';
export default class HeaderExample extends Component {
  render() {
    return (
      <Header>
        <Button transparent>
          <Icon size={30} color={'#fff'} name={'ios-arrow-left'} />
        </Button>

        <Title>Header</Title>

        <Button transparent>
          <Icon size={30} color={'#fff'} name={'navicon'} />
        </Button>
      </Header>
    );
  }
}
