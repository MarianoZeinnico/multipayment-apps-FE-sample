import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const optionWidth = screenWidth / 4.6;
const optionHeight = 100;

export const styles = {
	container: {
		flex: 1
	},
	subContainer: {
		alignItems: 'center',
		top: 20
	},
	containerBottom: {
		bottom: 55
	},
	icon: {
		width: 100,
		height: 100,
		alignSelf: 'center'
	},
	containerCard: {
		width: optionWidth,
		marginLeft: 10,
		marginTop: 20,
		height: optionHeight,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 2
	},
	containCard: {
		height: optionHeight,
		width: '100%',
		marginLeft: 10
	},
	nama: {
		color: 'black',
		fontSize: 20
	},
	id: {
		color: 'black'
	},
	ewalletContainer: {
		// flex: 1,
		backgroundColor: 'orange',
		elevation: 10,
		borderRadius: 5,
		height: 70,
		marginTop: 70,
		alignSelf: 'center',
		width: '96%'
	},
	saldoContainer: {
		flex: 1,
		flexDirection: 'row',
		top: 15,
		alignSelf: 'center',
		width: '100%',
		paddingLeft: 10,
		paddingRight: 10
	},
	saldoContainerLeft: {
		alignItems: 'center',
		elevation: 10,
		width: '50%',
		height: 70,
		backgroundColor: '#0500E9',
		right: 5,
		borderRadius: 5
	},
	saldoContainerRight: {
		alignItems: 'center',
		elevation: 10,
		width: '50%',
		height: 70,
		backgroundColor: '#0500E9',
		borderRadius: 5
	},
	flatlistPartners: {
		flex: 1,
		alignSelf: 'center',
		width: '100%',
		bottom: 100,
		justifyContent: 'center',
		alignItems: 'center'
	},
	flatlistPartnersModal: {
		alignSelf: 'center',
		width: '100%',
		top: 10
	},
	cGray: {
		color: 'gray'
	},
	cWhite: {
		color: 'white'
	},
	cOrange: {
		color: 'orange'
	},
	top: {
		top: 10
	},
	ewalletLeft: {
		top: 10,
		left: 15
	},
	ewalletRight: {
		alignItems: 'flex-end',
		bottom: 53,
		right: 15
	},
	bgWhite: {
		backgroundColor: 'white'
	},
	badge: {
		position: 'absolute',
		left: 15,
		height: 20
	},
	headerLeft: {
		alignItems: 'center',
		left: 10
	},
	headerRight: {
		flex: 1,
		flexDirection: 'row'
	},
	iconCircle: {
		elevation: 1,
		borderRadius: 40,
		borderWidth: 2,
		width: 50,
		height: 50,
		borderColor: 'lightgray',
		right: 10,
		alignItems: 'center'
	},
	textCircle: {
		right: 10
	},
	center: {
		alignItems: 'center'
	},
	centerTitle: {
		top: 20,
		marginBottom: 40,
		fontSize: 20,
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	modal: {
		flex: 0,
		width: 250,
		height: 100,
		fontWeight: 'bold',
		alignSelf: 'center'
	}
};
