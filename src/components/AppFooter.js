import React, {Component} from 'react';
import { Footer, FooterTab, Icon, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class AppFooter extends Component {
    constructor() {
        super();
        this.state = {
            activeTabName: 'feed',
        };
    }
    tabAction(tab) {
        this.setState({activeTabName: tab});
        if (tab ==='home') {
            Actions.home();
        }
        else if (tab ==='leader') {
            Actions.leader();
        }
        else if (tab ==='auth') {
            Actions.auth();
        }
        else { 
            Actions.home();
        }
    }
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button
                    active={(this.state.activeTabName === 'home')? true: false}
                    onPress={() => this.tabAction('home')}
                    >
                    <Icon name="navigate" />
                    </Button>
                    <Button
                    active={(this.state.activeTabName === 'leader')? true: false}
                    onPress={() => this.tabAction('leader')}
                    >
                    <Icon name="bicycle" />
                    </Button>
                    <Button 
                    active={(this.state.activeTabName === 'auth')? true: false}
                    onPress={() => this.tabAction('auth')}>
                    <Icon active name="person" />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}