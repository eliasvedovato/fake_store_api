import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Home from './components/Home'

export interface Product {
	id: number
	title: string
	category: string
	price: number
	description: string
	image: string
	quantity: number
}

export default function App(): JSX.Element {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</Router>
	)
}