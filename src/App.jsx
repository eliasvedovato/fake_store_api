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

	const getProducts = async () => {
		const response = await fetch(`${api}`)
		const jsonData = await response.json()

		// Ordenar los productos por precio ascendente o descendente
		const sortedProducts = jsonData.sort((a, b) => {
			if (orderBy === 'asc') {
				return a.price - b.price
			} else {
				return b.price - a.price
			}
		})

		setProducts(sortedProducts)
	}

	const defineCategories = () => {
		const newCategories = new Set([...products.map(prod => prod.category)])
		setCategories(newCategories)
	}

	const handlePriceFilter = (min, max) => {
		setMinValue(min)
		setMaxValue(max)
	}

	const handleOrderBy = (order) => {
		setOrderBy(order)
	}

	// const handleReloadProducts = async () => {
	// 	setMinValue(0)
	// 	setMaxValue(0)
	// 	setCategories([])
	// 	console.log('clicked')
	// 	await getProducts()
	// }

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
				<button>
					All products
				</button>
				<button
					style={{
						background: menuToggle ? 'green' : 'grey',
					}}
					onClick={() => setMenuToggle(!menuToggle)}
				>
					{menuToggle ? 'Esconder filtros' : 'Mostar filtros'}
				</button>
			</div>

			<div>
				{menuToggle && (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 5,
							border: '2px solid grey',
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
		</div>
	)
}

export default App
