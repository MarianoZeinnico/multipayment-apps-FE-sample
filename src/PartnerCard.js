import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { styles } from './DashboardScreen.style';

class PartnerCard extends Component {
	render() {
		return (
			<View>
				<View style={styles.containerCard}>
					<View style={styles.containCard}>
						<TouchableOpacity onPress={this.props.item.id === 10 ? this.props.onPress : null}>
							<View style={styles.center}>
								<View style={styles.iconCircle}>
									<Icon
										name={this.props.item.icon}
										type="FontAwesome"
										style={{ top: 10, color: 'orange' }}
									/>
								</View>
								<View style={styles.textCircle}>
									<Text style={{ fontSize: 12 }}>{this.props.item.nama}</Text>
								</View>
							</View>
						</TouchableOpacity>
						{/* )} */}
					</View>
				</View>
			</View>
		);
	}
}

export default PartnerCard;
