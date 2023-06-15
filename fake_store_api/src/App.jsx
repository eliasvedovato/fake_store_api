import { useState } from 'react'
import './App.css'
import { AiOutlineArrowDown } from 'react-icons/ai'

function App() {
	const [menuToggle, setMenuToggle] = useState(false)
	const [categories, setCategories] = useState([])
	console.log(menuToggle)

	const api = 'https://fakestoreapi.com/products'

	// const allProducts = fetch('https://fakestoreapi.com/products')
	// .then(res => res.json())
	// .then(json => console.log(json))

	// const data = fetch(`${api}`)
	// const { results } = data.json()
	// setProducts(results)

	async function getCategories() {
		const response = await fetch(`${api}`)
		const jsonData = await response.json()
		setCategories(jsonData)
		console.log(jsonData)
	}

	console.log(categories)

	// fetch('https://fakestoreapi.com/products/1')
	// .then(res => res.json())
	// .then(json => console.log(json))

	function handleClick() {
		setMenuToggle(!menuToggle)
		getCategories()
	}

	return (
		<div>
			<h3>Categories</h3>
			<button type='submit' onClick={() => handleClick()}>
				<AiOutlineArrowDown />
			</button>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					textAlign: 'center',
					alignItems: 'center',
				}}
			>
				{menuToggle &&
					categories.filter((e)=> e.price > 100).map((cat, index) => (
						<ul
							key={index}
							style={{
								background: cat.price > 100 ? 'green' : 'red',
							}}
						>
							<li
								style={{
									border: '1px solid white',
								}}
							>
								{cat.title}
							</li>
							<img src={cat.image} height={200} />
							<h5>{cat.price}</h5>
						</ul>
					))}
			</div>
		</div>
	)
}

export default App
