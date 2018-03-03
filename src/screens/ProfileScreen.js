import React, { Component } from 'react';
import { TouchableOpacity, ListView } from 'react-native'
import { Container, Content, Text, Card, CardItem, View, Thumbnail, Grid, Col, Icon, Badge, Button, List, ListItem, Body, Left, Right } from 'native-base';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'

export default class AppFooter extends Component {
  constructor() {
    super()
    this.state = ({
      profileData: [],
      activitiesData: [],
    });
    this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
  }
  getData(id) {
    console.log('starting profileref')
    firebase.database().ref('users').child(id).once('value', (snapshot) => {
      console.log(snapshot.val())
      this.setState({
        profileData: snapshot.val(),
        profileUid: snapshot.key,
        following: false,
      });
    });
    const user = firebase.auth().currentUser;
    if(user) {
      firebase.database().ref('user-follow/' + user.uid + '/following').once('value', (snapshot) => {
        if(snapshot.hasChild(id)) {
          this.setState({
            following: true,
          })
        }
      })
    }
  }
  updateLikeCounter(data,bool) {
    firebase.database().ref('feed/' + data.key).transaction((snap) => {
      if(snap != null) {
        if(bool === true) {
          snap.likeCount++;
        }
        else if (bool=== false) {
          snap.likeCount--;
        }
      }
      else {
        snap = 1
      }
      return snap;
    }, (error, committed, snapshot) => {
      if (error) {
        console.log('error in transaction');
      } else if (!committed) {
        console.log('transaction not committed');
      } else {
        console.log('Transaction Committed');
      }
    }, true
  );
  firebase.database().ref('user-feed/'+ data.val().uid + '/' + data.key).transaction((snap) => {
    if(snap != null) {
      if(bool === true) {
        snap.likeCount++;
      }
      else if (bool=== false) {
        snap.likeCount--;
      }
    }
    else {
      snap = 1
    }
    return snap;
  }, (error, committed, snapshot) => {
    if (error) {
      console.log('error in transaction');
    } else if (!committed) {
      console.log('transaction not committed');
    } else {
      console.log('Transaction Committed');
    }
  }, true
);
  }
  likeActivity(data, rowId) {
    console.log(data.key)
    console.log(data.likeCount)
    if(data.userLiked === true) {
      firebase.database().ref('activity-likes/' + data.key).update({[firebase.auth().currentUser.uid]: null}).then(e => {
        const obj = data
        obj.userLiked = false
        // Updating of like count not under promise of transaction
        obj.likeCount--
        let newData = [...this.state.activitiesData]
        newData[rowId] = obj
        this.setState({activitiesData: newData});
        this.updateLikeCounter(data, false)
      })
    }
    else {
      firebase.database().ref('activity-likes/' + data.key).update({[firebase.auth().currentUser.uid]: true}).then(e => {
        const obj = data
        // Updating of like count not under promise of transaction
        obj.likeCount++
        obj.userLiked = true
        let newData = [...this.state.activitiesData]
        newData[rowId] = obj
        this.setState({activitiesData: newData})
        this.updateLikeCounter(data, true)
      })
    }
    console.log(data.val().likeCount)
  }
  getProfileActivities(uid) {
    firebase.database().ref('user-feed').child(uid).on('child_added', (snapshot) => {
      if(firebase.auth().currentUser) {
        firebase.database().ref('activity-likes/' + snapshot.key).once('value', snapchild => {
          if(snapchild.hasChild(firebase.auth().currentUser.uid)){
            snapshot.userLiked = true
          }
          else {
            snapshot.userLiked = false
          }
          snapshot.likeCount = snapshot.val().likeCount
          let newData = [...this.state.activitiesData]
          newData.push(snapshot)
          this.setState({activitiesData: newData})
        })
      }
      else {
        snapshot.likeCount = snapshot.val().likeCount
        let newData = [...this.state.activitiesData]
        newData.push(snapshot)
        this.setState({activitiesData: newData})
      }
      
    })
  }

  async deleteRow(secId, rowId, rowMap, data) {
    const updates = {};
    updates['/feed/' + data.key] = null;
    updates['/user-feed/' + data.val().uid + '/' + data.key] = null;
    await firebase.database().ref().update(updates);
    rowMap[`${secId}${rowId}`].props.closeRow();
    let newData = [...this.state.activitiesData]
    newData.splice(rowId,1)
    this.setState({activitiesData: newData});
  }

  followProfile(uid, bool) {
    const user = firebase.auth().currentUser
    bool ? bool=null : bool=true
    if(user) {
      if(user.uid === uid && bool=== true) {
        alert('Following yourself results into receiving your own feed.')
      }
      const updates = {};
      updates['/user-follow/' + uid + '/followers/' + user.uid] = bool;
      updates['/user-follow/' + user.uid + '/following/' + uid] = bool;
      firebase.database().ref().update(updates).then(e => {
        console.log('Follow = ' + bool);
        this.setState({
          following: bool,
        });
        this.updateFollowerCounter(uid, bool);
        this.updateFollowingCounter(user.uid, bool);
      }).catch(error => {
        console.log(error)
      });
    }
  }
  updateFollowerCounter(uid, bool) {
    firebase.database().ref('users/' + uid).transaction((snapshot) => {
      if(snapshot!= null) {
        if(bool === true) {
          snapshot.followerCount++;
        }
        else if (bool === null) {
          snapshot.followerCount--;
        }
      } else {
        snapshot = 1;
      }
      return snapshot;
    }, (error, committed, snapshot) => {
      if (error) {
        console.log('error in transaction');
      } else if (!committed) {
        console.log('transaction not committed');
      } else {
        console.log('Transaction Committed');
        const curProfileState = this.state.profileData;
        if(bool=== true) {
          curProfileState.followerCount++;
        }
        else {
          curProfileState.followerCount--;
        }
        this.setState({profileData: curProfileState});
      }
    }, true)
  }
  updateFollowingCounter(uid, bool) {
    firebase.database().ref('users/' + uid).transaction((snapshot) => {
      if(snapshot!= null) {
        if(bool === true) {
          snapshot.followingCount++;
        }
        else if (bool === null) {
          snapshot.followingCount--;
        }
      } else {
        snapshot = 1;
      }
      return snapshot;
    }, (error, committed, snapshot) => {
      if (error) {
        console.log('error in transaction');
      } else if (!committed) {
        console.log('transaction not committed');
      } else {
        console.log('Transaction Committed');
      }
    }, true)
  }
  componentDidMount() {
    if(this.props.id) {
      this.getData(this.props.id)
      this.getProfileActivities(this.props.id);
    }
    
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <View style={{flexDirection:'row'}}>
                <Thumbnail large source={{uri: 'https://i.imgur.com/RRWRFac.png'}} />
                <View style={{paddingLeft:10}}>
                  <Text style={{fontSize:20, marginBottom:10}}>{this.state.profileData.name}</Text>
                  <View style={{flexDirection:"row"}}>
                    <Badge primary style={{marginRight:10}}><Text>{this.state.profileData.followerCount} followers</Text></Badge>
                    <Badge primary style={{marginRight:10}}><Text>{this.state.profileData.followingCount} following</Text></Badge>
                    <TouchableOpacity onPress={() => this.followProfile(this.state.profileUid, this.state.following)}>
                      <Icon name={this.state.following === true ? 'ios-heart' : 'ios-heart-outline'} style={{color:'red', marginRight: 0}} />
                    </TouchableOpacity>
                    
                  </View>
                </View>
              </View>
            </CardItem>
            <CardItem style={{marginBottom:20}}>
              <Grid>
                <Col style={{ alignItems:'center' }}>
                  <Icon name='ios-bicycle' style={{fontSize:40}}/>
                  <Text note>{this.state.profileData.kmTotal} km</Text>
                </Col>
                <Col style={{ alignItems:'center' }}>
                  <Icon name='ios-trophy-outline' style={{fontSize:40}}/>
                  <Text note>{this.state.profileData.puntenTotal} points</Text>
                </Col>
                <Col style={{ alignItems:'center' }}>
                  <Icon name='ios-leaf-outline' style={{fontSize:40}}/>
                  <Text note>{parseFloat(this.state.profileData.coTotal).toFixed(2)} co</Text>
                </Col>
              </Grid>
            </CardItem>
            <CardItem style={{paddingLeft: 0, paddingRight: 0}}>
            <List 
          enableEmptySections
          dataSource={this.ds.cloneWithRows(this.state.activitiesData)}
          renderRow={(data, secId, rowId)=>
          <ListItem avatar style={{paddingTop: 10, paddingLeft: 10}}>
          <Left>
            <TouchableOpacity onPress={() => Actions.profile({id: data.val().uid})}>
              <Thumbnail source={{uri: 'https://i.imgur.com/RRWRFac.png'}} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text note>{data.val().city}</Text>
            <Text>{data.val().author}</Text>
            <Text note>
            <Icon name="ios-bicycle" style={{fontSize:20}} />{ '  ' +data.val().km + ' '}
            <Icon name="ios-trophy-outline" style={{fontSize: 17}} /> {data.val().points + ' points'+ '\n'}
            <Icon name="ios-leaf-outline" style={{fontSize: 20}} /> {' ' + (data.val().co).toFixed(2) + ' gr minder co'}
            </Text>
          </Body>
          <Right>
            <Button transparent onPress={() => this.likeActivity(data, rowId)} >
              <Icon /* ative */ name={data.userLiked === true ? 'ios-heart' : 'ios-heart-outline'} style={{color:'red', marginRight: 0}}/>
              <Text note>{data.likeCount}</Text>
            </Button>
          </Right>
          </ListItem>
          }
          renderLeftHiddenRow={data => 
          <Button full
          onPress={() => Actions.detail({data: data})}
          >
            <Icon name="information-circle" />
          </Button>
          }
          renderRightHiddenRow ={(data,secId, rowId, rowMap) => 
            <Button full danger
            onPress={() => this.deleteRow(secId, rowId, rowMap, data)}
            >
              <Icon name="trash" />
            </Button>
          }
          leftOpenValue={75}
          rightOpenValue={-75}
          />
            </CardItem>
          </Card>
          
        </Content>
      </Container>
    )
  }
}