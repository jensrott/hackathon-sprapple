import React, { Component } from 'react';
import { Container, Header, Tabs, Tab, Text } from 'native-base';
import Leaderboard from '../components/Leaderboard';
import firebase from 'firebase';
import AppLoading from '../components/AppLoading';

export default class TabScreen extends React.Component {
  constructor() {
    super();
    this.state = ({
      kmTotal: [],
      coTotal: [],
      puntenTotal: [],
      loading: true
    })
  }
  componentDidMount() {
    this.getData('kmTotal')
    this.getData('puntenTotal')
    this.getData('coTotal')
  }
  getData(value) {
    firebase.database().ref('users').orderByChild(value).limitToLast(10).once('value', (snapshot) => {
      console.log('getting data');
      let data = [];
      snapshot.forEach((snapchild) => {
        data.push(snapchild.val())
      })
      data.sort((a, b) => {
        return b[value] - a[value];
      });
      this.setState({
        [value] : data,
        loading: false,
      })
    })
  }
  render() {
    return (
      <Container>
        <Tabs initialPage={0}
        >
          <Tab heading="Points"
          >
          {this.state.loading ? 
            <AppLoading /> :
            <Leaderboard data={this.state.puntenTotal} type='puntenTotal' />
          }
          </Tab>
          <Tab heading="Km">
          {this.state.loading ? 
            <AppLoading /> :
            <Leaderboard data={this.state.kmTotal} type='kmTotal'/>
          }
          </Tab>
          <Tab heading="Co">
          {this.state.loading ? 
            <AppLoading /> :
            <Leaderboard data={this.state.coTotal} type='coTotal'/>
          }
          
          </Tab>
        </Tabs>
      </Container>
    )
  }
}