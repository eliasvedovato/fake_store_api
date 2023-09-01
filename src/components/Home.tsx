import { useState, useEffect } from 'react'

import { Product } from '../App'
import CategoryList from './CategoryList'
import ProductsList from './ProductsList'
import RangePriceFilter from './RangePriceFilter'
import FilterOrder from './FilterOrder'
import SearchInput from './SearchInput'
import Navbar from './Navbar'

export default function Home(): JSX.Element {
  const [filtersToggle, setFiltersToggle] = useState<boolean>(false)
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [minValue, setMinValue] = useState<number>(0)
  const [maxValue, setMaxValue] = useState<number>(0)
  const [orderBy, setOrderBy] = useState<string>('')
  const [resetFilter, setResetFilter] = useState<boolean>(false)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchValue, setSearchValue] = useState<string>('')
  const [showCart, setShowCart] = useState(false)
  const api = 'https://fakestoreapi.com/products'

  useEffect(() => {
		defineCategories()
  }, [products])

  useEffect(() => {
		getProducts()
  }, [orderBy])

  useEffect(() => {
		// filtra en funcion del valor de busqueda y los productos
		filterProducts()
  }, [searchValue, products])

  const getProducts = async (): Promise<void> => {
		try {
			const response = await fetch(api)
			const data = await response.json()

			const sortedProducts = data.sort((a: Product, b: Product) => {
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

  const defineCategories = (): void => {
		const newCategories = new Set([
			...products.map(({ category }) => category),
		])
		setCategories(newCategories)
  }

  const handlePriceFilter = (min: number, max: number): void => {
		if (!min && !max) alert('Enter min or/and max value')
		setMinValue(min)
		setMaxValue(max)
  }

  const handleOrderBy = (order: string) => {
		setOrderBy(order)
  }

  const handleAllProducts = (): void => {
		// Resetea varios filtros
		setSelectedCategory('')
		setMinValue(0)
		setMaxValue(0)
		setResetFilter(!resetFilter)
  }

  const handleInputChange = (value: string): void => {
		setSearchValue(value)
  }

  const filterProducts = (): void => {
		const filtered = products.filter(product =>
			product.title.toLowerCase().includes(searchValue.toLowerCase())
		)

		setFilteredProducts(filtered)
  }

	return (
		<div className='home'>
			<Navbar
				onHandleAllProducts={handleAllProducts}
				setFiltersToggle={setFiltersToggle}
				filtersToggle={filtersToggle}
				setShowCart={setShowCart}
				showCart={showCart}
			/>

			{filtersToggle && (
				<div className='filters-container'>
					<CategoryList
						categories={categories}
						setSelectedCategory={setSelectedCategory}
					/>
					<div className='options-container'>
						<RangePriceFilter onPriceFilter={handlePriceFilter} />
						<FilterOrder onPriceOrder={handleOrderBy} />
						<SearchInput onInputChange={handleInputChange} />
					</div>
				</div>
			)}

			<ProductsList
				products={filteredProducts.filter(
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
