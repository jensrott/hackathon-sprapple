import React, { Component } from 'react';
import { Platform, RefreshControl } from 'react-native'
import { Container, Content, List, ListItem,Text, Left, Right, Badge, Picker, Form, Item, Icon } from 'native-base';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import AppLoading from '../components/AppLoading';

export default class LeaderScreen extends React.Component {
  constructor() {
    super();
    this.state = ({
      leaderData : [],
      selected: "puntenTotal",
      loading: true,
      refreshing: false,
    });
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
    console.log(this.state.selected)
    this.loadData(value);
  }
  loadData(value) {
    console.log(value)
    firebase.database().ref('users').orderByChild(value).limitToLast(10).once('value', (snapshot) => {
      console.log('getting data');
      let data = [];
      snapshot.forEach((snapchild) => {
        data.push(snapchild.val())
      })
      data.sort((a, b) => {
        return b[value] - a[value];
      });
      this.setState({leaderData: data, loading: false, refreshing: false})
      //console.log(data);
    })
  }
  componentDidMount() {
    this.loadData(this.state.selected)

  }
  render() {
    if(this.state.loading) {
      return (
        <AppLoading />
      )
    }
    else {
      return (
        <Container>
          <Content>
            <Form style={{backgroundColor: 'white'}}>
              <Item>
                <Icon active name='arrow-dropdown' />
                <Picker
                iosHeader= "Select leaderboard"
                mode="dropdown"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
                style={{width: (Platform.OS === 'ios') ? undefined: 200}}
                >
                <Item label="Points leaderboard" value="puntenTotal"/>
                <Item label="Co2 leaderboard" value="coTotal"/>
                <Item label="Km leaderboard" value="kmTotal"/>
                </Picker>
              </Item>
            </Form>
            <List
            dataArray={this.state.leaderData}
            refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={() => {this.setState({refreshing: true}), this.loadData('puntenTotal')}} />}
            renderRow={(item) =>
            <ListItem>
              <Left>
                <Text>{item.name}</Text>
              </Left>
              <Right>
                <Badge primary>
                  <Text>{(item[this.state.selected]).toFixed(2)}</Text>
                </Badge>
              </Right>
            </ListItem>
            }
            >
            </List>
          </Content>
        </Container>
        )
    }
    
    
  }
}