/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DashboardFooter from './src/DashboardFooter';
import DashboardScreen from './src/DashboardScreen';
import SettingScreen from './src/SettingScreen';

class App extends Component {
	render() {
		return <AppContainer />;
	}
}

const AppNavigator = createStackNavigator({
	DashboardScreen: {
		screen: DashboardScreen
	},
	DashboardFooter: {
		screen: DashboardFooter
	},
	SettingScreen: {
		screen: SettingScreen
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default App;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF'
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10
// 	},
// 	instructions: {
// 		textAlign: 'center',
// 		color: '#333333',
// 		marginBottom: 5
// 	}
// });
