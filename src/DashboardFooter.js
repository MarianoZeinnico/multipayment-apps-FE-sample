import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { styles } from './DashboardScreen.style';

class DashboardFooter extends Component {
	render() {
		return (
			<View>
				<Container>
					<Footer>
						<FooterTab style={styles.bgWhite}>
							<Button vertical>
								<Icon name="home" type="FontAwesome" style={styles.cGray} />
								<Text style={styles.cGray}>Dashboard</Text>
							</Button>
							<Button vertical>
								<Icon name="link" type="FontAwesome" style={styles.cGray} />
								<Text style={styles.cGray}>My Network</Text>
							</Button>
							<Button vertical>
								<Icon active name="users" type="FontAwesome" style={styles.cGray} />
								<Text style={styles.cGray}>Community</Text>
							</Button>
						</FooterTab>
					</Footer>
				</Container>
			</View>
		);
	}
}

export default DashboardFooter;
