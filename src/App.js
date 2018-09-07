import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

class App extends Component {
	render(){
		return (
			<View style={styles.container}>
				<Simples texto='Flexivel!!' />
				<ParImpar numero={24} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export default App