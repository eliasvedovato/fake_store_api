import { useState, useEffect } from 'react'
import './App.css'
import CategoryList from './components/CategoryList'
import ProductsList from './components/ProductsList'
import PriceFilter from './components/PriceFilter'
import FilterOrder from './components/FilterOrder'

function App() {
	const [menuToggle, setMenuToggle] = useState(false)
	const [products, setProducts] = useState([])
	const [categories, setCategories] = useState()
	const [selectedCategory, setSelectedCategory] = useState('')
	const [minValue, setMinValue] = useState(0)
	const [maxValue, setMaxValue] = useState(0)
	const [orderBy, setOrderBy] = useState('')
	const [resetFilter, setResetFilter] = useState(false)

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

	useEffect(() => {
		getProducts()
	}, [orderBy])

	const getProducts = async () => {
		try {
			const response = await fetch(api)
			const jsonData = await response.json()

			const sortedProducts = jsonData.sort((a, b) => {
				if (orderBy === 'desc') {
					return a.price - b.price
				} else {
					return b.price - a.price
				}
			})

			setProducts(sortedProducts)
		} catch (error) {
			console.error('Error fetching products:', error)
		}
	}

	const defineCategories = () => {
		const newCategories = new Set([
			...products.map(({ category }) => category),
		])
		setCategories(newCategories)
	}

	const handlePriceFilter = (min, max) => {
		setMinValue(min)
		setMaxValue(max)
	}

	const handleOrderBy = order => {
		setOrderBy(order)
	}

	const handleAllProducts = () => {
		// Resetea el estado de filtro al hacer clic en el botón
		setSelectedCategory('')
		setMinValue(0)
		setMaxValue(0)
		setOrderBy('')
		setResetFilter(!resetFilter)
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
			<div>
				<button onClick={handleAllProducts}>All products</button>
				<button
					style={{
						background: menuToggle ? 'green' : 'grey',
					}}
					onClick={() => setMenuToggle(!menuToggle)}
				>
					{menuToggle ? 'Esconder filtros' : 'Mostar filtros'}
				</button>
			</div>

			{menuToggle && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 5,
						borderBottom: '2px solid grey',
						borderTop: '2px solid grey',
						padding: 10,
						width: '100%',
					}}
				>
					<CategoryList
						categories={categories}
						setSelectedCategory={setSelectedCategory}
					/>
					<div
						style={{
							display: 'flex',
							gap: 20,
							flexWrap: 'wrap',
							flexDirection: 'row',
							justifyContent: 'space-around',
							width: '100%',
						}}
					>
						<PriceFilter onPriceFilter={handlePriceFilter} />
						<FilterOrder
							onPriceOrder={handleOrderBy}
							getProducts={getProducts}
						/>
					</div>
				</div>
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
	)
}

export default App
