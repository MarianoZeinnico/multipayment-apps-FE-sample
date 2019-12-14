import React, { Component } from 'react';
import { styles } from './SettingScreen.style';
import { Container, Icon, List, ListItem, Text, Switch, Left, Right, View } from 'native-base';

class SettingScreen extends Component {
	static navigationOptions = {
		headerTitle: (
			<View style={{ alignItems: 'center' }}>
				<Text style={styles.cOrange}>Pengaturan</Text>
			</View>
		)
	};

	render() {
		return (
			<Container>
				<List>
					<View style={styles.subtitleText}>
						<ListItem>
							<Text>Akun Saya</Text>
						</ListItem>
					</View>
					<ListItem>
						<Left style={{ alignItems: 'center' }}>
							<Icon name="user" type="FontAwesome" style={styles.cOrange} />
							<Text style={{ left: 3 }}>Profil Saya</Text>
						</Left>
						<Right>
							<Icon name="chevron-right" type="FontAwesome" style={styles.cGray} />
						</Right>
					</ListItem>
					<ListItem>
						<Left style={{ alignItems: 'center' }}>
							<Icon name="university" type="FontAwesome" style={styles.cOrange} />
							<Text style={{ left: 3 }}>Akun Bank</Text>
						</Left>
						<Right>
							<Icon name="chevron-right" type="FontAwesome" style={styles.cGray} />
						</Right>
					</ListItem>
					<ListItem>
						<Left style={{ alignItems: 'center' }}>
							<Icon name="lock" type="FontAwesome" style={styles.cOrange} />
							<Text style={{ left: 3 }}>Kata Sandi (Password)</Text>
						</Left>
						<Right>
							<Icon name="chevron-right" type="FontAwesome" style={styles.cGray} />
						</Right>
					</ListItem>
					<View style={styles.subtitleText}>
						<ListItem>
							<Text>Notifikasi</Text>
						</ListItem>
					</View>
					<ListItem>
						<Left>
							<Text>
								Newsletter {'\n'}
								<Text style={styles.desc}>
									Menerima semua notifikasi promosi, tips dan trik, update informasi tentang Lakupay
								</Text>
							</Text>
						</Left>
						<Right>
							<Switch value={true} />
						</Right>
					</ListItem>
					<ListItem>
						<Left>
							<Text>
								Transaksi{'\n'}
								<Text style={styles.desc}>
									Menerima semua notifikasi yang berkaitan dengan transaksi anda
								</Text>
							</Text>
						</Left>
						<Right>
							<Switch value={false} />
						</Right>
					</ListItem>
					<ListItem>
						<Left>
							<Text>
								Pesan Pribadi dari Admin{'\n'}
								<Text style={styles.desc}>
									Menerima semua notifikasi pesan pribadi yang diberikan oleh admin
								</Text>
							</Text>
						</Left>
						<Right>
							<Switch value={true} />
						</Right>
					</ListItem>
				</List>
			</Container>
		);
	}
}

export default SettingScreen;
