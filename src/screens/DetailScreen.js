import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import {ActivityIndicator, ListView, StatusBar, TouchableOpacity, Platform } from 'react-native'
import { Container, Button, Text, Content, Header, Item, Grid, Col, Icon, Input, Card, CardItem, View, Thumbnail, List, ListItem, Left, Right, Body, Footer, FooterTab} from 'native-base';
import firebase from 'firebase'
import { FirebaseAuth } from '../firebase/firebase';

let data = [];
export default class DetailScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      commentData : data,
      comment: '',
      loading: true,
    }
    this.fireRef = firebase.database().ref('activity-comments');
    this.fireRef.off();
    console.log('Detail page constructor');
    this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
  }
  componentWillReceiveProps() {
    this.fireRef.child(this.props.data.key).off();
  }
  componentDidMount() {
    Actions.refresh(this.props.data)
    console.log(this.state.commentData);
    console.log('fireref on');
    var that = this
    that.fireRef.child(this.props.data.key).on('child_added', (data) => {
      let newData = [...that.state.commentData]
      newData.push(data);
      this.setState({commentData: newData, loading: false})
    });
    
    //that.fireRef.child(this.props.data.key).off();
  }
  componentWillUnmount() {
    console.log('UNMOUNT');
    //firebase.database().ref('activity-comments/' + this.props.data.key).off();
  }
  addRow(data) {
    const key = firebase.database().ref('activity-comments/' + this.props.data.key).push().key;
    firebase.database().ref('activity-comments/' + this.props.data.key + '/' + key).set({
      authorId: firebase.auth().currentUser.uid,
      author: firebase.auth().currentUser.displayName,
      comment: this.state.comment
    });
  }
  async deleteRow(secId, rowId, rowMap, data) {
    console.log(data);
    console.log(this.props.data.key);
    console.log(data.key)
      //await firebase.database().ref('activity-comments/' + this.props.data.key + '/' + data.key).set(null)
      rowMap[`${secId}${rowId}`].props.closeRow();
      let newData = [...this.state.commentData]
      newData.splice(rowId,1)
      this.setState({commentData: newData});
    
  }
  render() {
    const projectKey = this.props.data.key;
    if(this.props.data) {
      return (
        <Container>
          <Header style={{marginTop: StatusBar.currentHeight, backgroundColor:'white'}}>
            <Content>
              <Item>
                <Input 
                onChangeText={(comment) => this.setState({ comment })}
                placeholder = "Add a comment" />
                <Button onPress={() => this.addRow()} style={{margin: Platform.OS === 'android' ? 5 : 0}}>
                  <Icon name="add" />
                </Button>
              </Item>
            </Content>
          </Header>
          <Content>
              <Card>
                <CardItem>
                  <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={() => Actions.profile({id: this.props.data.val().uid})} >
                      <Thumbnail large source={{uri: 'https://i.imgur.com/RRWRFac.png'}} />
                    </TouchableOpacity>
                    <View style={{paddingLeft:10}}>
                      <Text style={{fontSize:20}} onPress={() => Actions.profile({id: this.props.data.val().uid})} >{this.props.data.val().author}</Text>
                      <Text note style={{paddingBottom:5}}>{this.props.data.val().city} - 10 uur geleden</Text>
                      <Icon name={this.props.data.userLiked === true ? 'ios-heart' : 'ios-heart-outline'} style={{fontSize:25, color:'red'}}><Text note style={{lineHeight:25}}> {this.props.data.likeCount}</Text></Icon>
                    </View>
                  </View>
                </CardItem>
                <CardItem style={{marginBottom:20}}>
                  <Grid>
                    <Col style={{ alignItems:'center' }}>
                      <Icon name='ios-bicycle' style={{fontSize:40}}/>
                      <Text note>{this.props.data.val().km} km</Text>
                    </Col>
                    <Col style={{ alignItems:'center' }}>
                      <Icon name='ios-trophy-outline' style={{fontSize:40}}/>
                      <Text note>{this.props.data.val().points} points</Text>
                    </Col>
                    <Col style={{ alignItems:'center' }}>
                      <Icon name='ios-leaf-outline' style={{fontSize:40}}/>
                      <Text note>{(this.props.data.val().co).toFixed(2)} co</Text>
                    </Col>
                  </Grid>
                </CardItem>
                {this.state.loading ? (
              <ActivityIndicator size="small"/>
            ): (

              <List
              enableEmptySections
              dataSource={this.ds.cloneWithRows(this.state.commentData)}
              renderRow={(data,secId,rowId) => 
                <ListItem avatar style={{paddingTop: 10, paddingLeft:10}}>
                  <Left>
                  <Thumbnail source={{ uri: 'https://i.imgur.com/RRWRFac.png' }} style={{marginBottom: 10}} />
                  </Left>
                  <Body>
                    <Text note>{data.val().author}</Text>
                    <Text>{data.val().comment}</Text>
                  </Body>
                  <Right>
                    <Text note>3 hours ago</Text>
                  </Right>
                </ListItem>
              }
              renderRightHiddenRow ={(data,secId, rowId, rowMap) => 
              <Button full danger
              onPress={() => this.deleteRow(secId, rowId, rowMap, data)}
              >
                <Icon name="trash" />
              </Button>
            }
            
            rightOpenValue={-75}
              />
            )}
              </Card>
          </Content>
        </Container>
      )
      
    }
    return (
      <Text>Test123</Text>
    )
  }
  
}
