import { useState, useEffect } from 'react'
import './App.css'
import CategoryList from './components/CategoryList'
import ProductsList from './components/ProductsList'

function App() {
	const [menuToggle, setMenuToggle] = useState(false)
	const [products, setProducts] = useState([])
	const [categories, setCategories] = useState(new Set())
	const [selectedCategory, setSelectedCategory] = useState('')

	const api = 'https://fakestoreapi.com/products'

	/* Esto asegurará que la función defineCategories() se llame solo una vez 
	al cargar el componente */
	useEffect(() => {
		getProducts()
	}, [])

	// se ejecutará cuando el estado products cambie
	useEffect(() => {
		defineCategories()
	}, [products])

	function handleClick() {
		setMenuToggle(!menuToggle)
	}

	async function getProducts() {
		const response = await fetch(`${api}`)
		const jsonData = await response.json()
		setProducts(jsonData)
	}

	function defineCategories() {
		const newCategories = new Set(products.map(prod => prod.category))
		setCategories(newCategories)
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 10,
				alignItems: 'center',
			}}
		>
			<h3>Products</h3>
			<button
				style={{
					background: menuToggle ? 'green' : 'grey',
				}}
				onClick={() => handleClick()}
			>
				{menuToggle ? 'Esconder filtros' : 'Mostar filtros'}
			</button>
			<div>
				{menuToggle && (
					<CategoryList
						categories={categories}
						setSelectedCategory={setSelectedCategory}
					/>
				)}
				{selectedCategory == '' ? (
					<ProductsList products={products} />
				) : (
					<ProductsList
						products={products.filter(
							prod => prod.category === selectedCategory
						)}
					/>
				)}
				{/* <ProductsList products={products} /> */}
			</div>
		</div>
	)
}

export default App
