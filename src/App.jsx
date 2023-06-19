import { useState, useEffect } from 'react'
import './App.css'
import CategoryList from './components/CategoryList'
import ProductsList from './components/ProductsList'
import PriceFilter from './components/PriceFilter'

function App() {
	const [menuToggle, setMenuToggle] = useState(false)
	const [products, setProducts] = useState([])
	const [categories, setCategories] = useState()
	const [selectedCategory, setSelectedCategory] = useState('')
	const [minValue, setMinValue] = useState(0)
	const [maxValue, setMaxValue] = useState(0)

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

	async function getProducts() {
		const response = await fetch(`${api}`)
		const jsonData = await response.json()
		setProducts(jsonData)
	}

	function defineCategories() {
		const newCategories = new Set([...products.map(prod => prod.category)])
		setCategories(newCategories)
	}

	const handlePriceFilter = (min, max) => {
		setMinValue(min)
		setMaxValue(max)
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
			<button>Products</button>
			<button
				style={{
					background: menuToggle ? 'green' : 'grey',
				}}
				onClick={() => setMenuToggle(!menuToggle)}
			>
				{menuToggle ? 'Esconder filtros' : 'Mostar filtros'}
			</button>
			<div>
				{menuToggle && (
					<>
						<CategoryList
							categories={categories}
							setSelectedCategory={setSelectedCategory}
						/>
						<PriceFilter onPriceFilter={handlePriceFilter} />
					</>
				)}
				<ProductsList
					products={products.filter(
						prod =>
							(selectedCategory === '' ||
								prod.category === selectedCategory) &&
							(minValue === 0 || prod.price >= minValue) &&
							(maxValue === 0 || prod.price <= maxValue)
					)}
				/>
			</div>
		</div>
	)
}

export default App
