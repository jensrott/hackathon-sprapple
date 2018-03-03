import React, {Component} from 'react';
import { RefreshControl } from 'react-native';
import { Container, Content, Text, List, ListItem, Left, Right, Badge} from 'native-base';
import TabScreen from '../screens/TabScreen';
export default class Leaderboard extends Component {
  constructor() {
    super()
    this.sate = ({
      refreshing: false,
    })
  }
  render() {
    console.log(this.props)
    console.log(this.props.data)
      return (
          <Container>
            <Content>
              <List
              dataArray={this.props.data}
              renderRow={(item) =>
              <ListItem>
                <Left>
                  <Text>{item.name}</Text>
                </Left>
                <Right>
                  <Badge primary>
                    <Text>{(item[this.props.type]).toFixed(2)}</Text>
                  </Badge>
                </Right>
              </ListItem>
              }
              >
              </List>
            </Content>
          </Container>
      );
  }
}