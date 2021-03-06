import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import {ActivityIndicator, ListView, StatusBar, TouchableOpacity, Platform } from 'react-native'
import { Container, Button, Text, Content, Header, Item, Grid, Col, Icon, Input, Card, CardItem, View, Thumbnail, List, ListItem, Left, Right, Body, Footer, FooterTab} from 'native-base';
import firebase from 'firebase'
import { FirebaseAuth } from '../firebase/firebase';
import timeAgo from '../utils/TimeAgo';

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
    console.log('Detail page constructor');
    this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
  }
  componentWillReceiveProps() {
    this.fireRef.child(this.props.data.key).off();
  }
  componentDidMount() {
    Actions.refresh(this.props.data)
    this.fireRef.child(this.props.data.key).on('value', (data) => {
      console.log('starting fetching');
      let newData = [];
      data.forEach((snapchild) => {
        newData.push({
          author: snapchild.val().author,
          comment: snapchild.val().comment,
          uid: snapchild.val().authorId,
          photoURL: snapchild.val().photoURL,
          createdDate: snapchild.val().createdDate,
          _key: snapchild.key,
        })
      })
      //console.log(data)
      //let newData = [...this.state.commentData]
      //newData.push(data);
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
      photoURL: firebase.auth().currentUser.photoURL,
      comment: this.state.comment,
      createdDate: firebase.database.ServerValue.TIMESTAMP,
    });
  }
  async deleteRow(secId, rowId, rowMap, data) {
    console.log(data);
    console.log(data._key)
      await firebase.database().ref('activity-comments/' + this.props.data.key + '/' + data._key).set(null)
      rowMap[`${secId}${rowId}`].props.closeRow();
      //let newData = [...this.state.commentData]
      //newData.splice(rowId,1)
      //this.setState({commentData: newData});
    
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
                      <Thumbnail large source={{uri: this.props.data.val().photoURL}} />
                    </TouchableOpacity>
                    <View style={{paddingLeft:10}}>
                      <Text style={{fontSize:20}} onPress={() => Actions.profile({id: this.props.data.val().uid})} >{this.props.data.val().author}</Text>
                      <Text note style={{paddingBottom:5}}>{this.props.data.val().city} - {timeAgo(this.props.data.val().createdDate)}</Text>
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
                    <TouchableOpacity onPress={() => Actions.profile({id: data.uid})} >
                      <Thumbnail source={{ uri: data.photoURL }} style={{marginBottom: 10}} />
                    </TouchableOpacity>
                  </Left>
                  <Body>
                    <Text note>{data.author}</Text>
                    <Text>{data.comment}</Text>
                  </Body>
                  <Right>
                    <Text note>{timeAgo(data.createdDate)}</Text>
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
