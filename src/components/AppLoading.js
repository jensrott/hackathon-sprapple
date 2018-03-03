import React, {Component} from 'react';
import { Container, Content, Spinner, Text} from 'native-base';
export default class AppLoading extends Component {
  render() {
      return (
          <Container>
            <Content>
              <Spinner color='grey'/>
            </Content>
          </Container>
      );
  }
}