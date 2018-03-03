import React, {Component} from 'react';
import { Footer, FooterTab, Icon, Button, Header, Left, Body, Right, Title} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AppHeader extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => Actions.pop()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>{Actions.currentScene}</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Icon name='menu' />
                    </Button>
                </Right>
          </Header>
        );
    }
}