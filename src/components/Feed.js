import React, {Component} from 'react';
import { RefreshControl, ListView, TouchableOpacity } from 'react-native';
import { Container, Content, Text, List, ListItem, Left, Right, Badge} from 'native-base';
import TabScreen from '../screens/TabScreen';
export default class Feed extends Component {
  constructor() {
    super()
    this.sate = ({
    })
    this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
  }
  render() {
      return (
        <Container>
        <Content>
          <List 
          enableEmptySections
          dataSource={this.ds.cloneWithRows(this.props.feedData)}
          renderRow={(data, secId, rowId)=>
          <ListItem avatar style={{paddingTop: 10, paddingLeft: 10}}>
          <Left>
            <TouchableOpacity onPress={() => Actions.profile({id: data.uid})}>
            <Thumbnail source={{uri: 'https://i.imgur.com/RRWRFac.png'}} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text note>{data.city}</Text>
            <Text>{data.author}</Text>
            <Text note>
            <Icon name="ios-bicycle" style={{fontSize:20}} />{ '  ' +data.km + ' '}
            <Icon name="ios-trophy-outline" style={{fontSize: 17}} /> {data.points + ' points'+ '\n'}
            <Icon name="ios-leaf-outline" style={{fontSize: 20}} /> {' ' + (data.co).toFixed(2) + ' gr minder co'}
            </Text>
          </Body>
          <Right>
            <Button transparent /* onPress={() => this.likeActivity(data, rowId)} */ >
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
        </Content>
      </Container>
      );
  }
}