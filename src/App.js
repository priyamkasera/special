import React, { Component } from 'react'
import { styled } from 'styletron-react'
import { phrases } from './phrases'

const Container = styled('div', {
	height: '100vh',
	width: '100vw',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '5vw'
})

const Wrapper = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
})

const Text = styled('span', {
	fontFamily: 'sans-serif',
	userSelect: 'none',
	textAlign: 'center',
	fontSize: '10vw'
})

const Button = styled('button', {
	fontSize: '6vw',
	fontFamily: 'sans-serif',
	textTransform: 'uppercase',
	border: '0.17em solid black',
	marginTop: '1em',
	cursor: 'pointer',
	userSelect: 'none',
	outline: 'none',
	':hover': {
		backgroundColor: 'rgb(238, 238, 238)'
	}
})

class App extends Component {
	state = {
		text: 'Привет'
	}

	handleClick = () => {
		this.setState({ text: phrases[Math.floor(Math.random() * phrases.length)] })
	}

	render() {
		return (
			<Container>
				<Wrapper>
					<Text>{this.state.text}</Text>
					<Button onClick={this.handleClick}>Кнопка</Button>
				</Wrapper>
			</Container>
		)
	}
}

export default App
