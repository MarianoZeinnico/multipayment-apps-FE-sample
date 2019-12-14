import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, FlatList } from 'react-native';
import { Icon, Badge } from 'native-base';
import { styles } from './DashboardScreen.style';
import DashboardFooter from './DashboardFooter';
import PartnerCard from './PartnerCard';

class DashboardScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nama: 'Anri Wahyu Cahyono',
			id: '1234567890',
			modalVisible: false,
			partners: [
				{
					id: 1,
					nama: 'PLN',
					icon: 'bolt'
				},
				{
					id: 2,
					nama: 'Pulsa',
					icon: 'mobile'
				},
				{
					id: 3,
					nama: 'Paket Data',
					icon: 'wifi'
				},
				{
					id: 4,
					nama: 'Tiket Pesawat',
					icon: 'plane'
				},
				{
					id: 5,
					nama: 'Tiket Kereta',
					icon: 'train'
				},
				{
					id: 6,
					nama: 'Multifinance',
					icon: 'bitcoin'
				},
				{
					id: 7,
					nama: 'TV Kabel',
					icon: 'tv'
				},
				{
					id: 8,
					nama: 'Telepon Rumah',
					icon: 'phone'
				},
				{
					id: 9,
					nama: 'PDAM',
					icon: 'tint'
				},
				{
					id: 10,
					nama: 'Lihat Semua',
					icon: 'ellipsis-v'
				}
			],
			partnersDashboard: [
				{
					id: 1,
					nama: 'PLN',
					icon: 'bolt'
				},
				{
					id: 2,
					nama: 'Pulsa',
					icon: 'mobile'
				},
				{
					id: 3,
					nama: 'Paket Data',
					icon: 'wifi'
				},
				{
					id: 4,
					nama: 'Tiket Pesawat',
					icon: 'plane'
				},
				{
					id: 5,
					nama: 'Tiket Kereta',
					icon: 'train'
				},
				{
					id: 6,
					nama: 'Multifinance',
					icon: 'bitcoin'
				},
				{
					id: 7,
					nama: 'TV Kabel',
					icon: 'tv'
				},
				{
					id: 10,
					nama: 'Lihat Semua',
					icon: 'ellipsis-v'
				}
			]
		};
	}

	static navigationOptions = (props) => ({
		headerLeft: (
			<TouchableOpacity style={styles.headerLeft}>
				<Icon name="bars" type="FontAwesome" style={styles.cOrange} />
			</TouchableOpacity>
		),
		headerTitle: (
			<View style={{ alignSelf: 'center', left: 30 }}>
				<Image style={styles.icon} resizeMode="contain" source={require('../images/lakupay.png')} />
			</View>
		),
		headerRight: (
			<View style={styles.headerRight}>
				<View style={{ marginRight: 20 }}>
					<TouchableOpacity>
						<Icon name="bell" type="FontAwesome" style={styles.cGray} />
						<Badge style={styles.badge}>
							<Text style={styles.cWhite}>2</Text>
						</Badge>
					</TouchableOpacity>
				</View>
				<View style={{ marginRight: 10 }}>
					<TouchableOpacity onPress={() => props.navigation.navigate('SettingScreen')}>
						<Icon name="cog" type="FontAwesome" style={styles.cGray} />
					</TouchableOpacity>
				</View>
			</View>
		)
	});

	_renderItemDashboard = ({ item, index }) => {
		return <PartnerCard index={index} item={item} onPress={() => this.setModalVisible(true)} />;
	};

	_renderItemModal = ({ item, index }) => {
		if (index < this.state.partners.length - 1) {
			return <PartnerCard index={index} item={item} />;
		}
	};

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.subContainer}>
					<Image style={styles.icon} resizeMode="contain" source={require('../images/user.png')} />
					<Text style={styles.nama}>{this.state.nama}</Text>
					<Text style={styles.id}>Laku ID : {this.state.id}</Text>
				</View>
				<View style={styles.ewalletContainer}>
					<View style={styles.ewalletLeft}>
						<Text>Saldo E-Wallet{'\n'}</Text>
						<Text style={{ fontSize: 20, fontWeight: 'bold', bottom: 12 }}>Rp. 1,775,000</Text>
					</View>
					<View style={styles.ewalletRight}>
						<Text>Reward Poin{'\n'}</Text>
						<Text style={{ fontSize: 20, fontWeight: 'bold', bottom: 12 }}>25,000</Text>
					</View>
				</View>
				<View style={styles.saldoContainer}>
					<View style={styles.saldoContainerLeft}>
						<Text style={[ styles.cWhite, styles.top ]}>Saldo Komisi{'\n'}</Text>
						<Text style={[ styles.cWhite ]}>Rp. 525,000</Text>
					</View>
					<View style={styles.saldoContainerRight}>
						<Text style={[ styles.cWhite, styles.top ]}>Saldo Unilevel{'\n'}</Text>
						<Text style={[ styles.cWhite ]}>Rp. 1,250,000</Text>
					</View>
				</View>
				<View style={styles.flatlistPartners}>
					<FlatList
						data={this.state.partnersDashboard}
						numColumns={4}
						keyExtractor={this._keyExtractor}
						renderItem={this._renderItemDashboard}
						scrollEnabled={false}
					/>
				</View>
				<View style={styles.containerBottom}>
					<DashboardFooter />
				</View>
				<Modal
					presentationStyle="pageSheet"
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						this.setModalVisible(false);
					}}
				>
					<View style={styles.centerTitle}>
						<View>
							<Text style={styles.centerTitle}>Semua Fitur Pembayaran</Text>

							<View style={styles.flatlistPartnersModal}>
								<FlatList
									data={this.state.partners}
									numColumns={4}
									keyExtractor={this._keyExtractor}
									renderItem={this._renderItemModal}
								/>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}

export default DashboardScreen;
