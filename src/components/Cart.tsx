import React, { useEffect, useState } from 'react'

export interface Cart {
	id: number
	userId: number
	date: string
	products: ProductCart[]
}

export interface ProductCart {
	productId: number
	quantity: number
}

function Cart() {
	const [cart, setCart] = useState([])
	const api = 'https://fakestoreapi.com/carts'


	useEffect(() => {
		getCart()
	}, [])

	const getCart = async (): Promise<void> => {
		try {
			const response = await fetch(api)
			const jsonData = await response.json()
			setCart(jsonData)
		} catch (error) {
			console.error('Error fetching products:', error)
		}
	}

	return (
		<div
			style={{
				display: 'none'
			}}
		>
			{cart.map((item: Cart) => (
				<div key={item.id}>
					<p>Cart ID: {item.id}</p>
					<p>User ID: {item.userId}</p>
					<p>Date: {item.date}</p>
					<h1>Products:</h1>
					<ul>
						{item.products.map(
							(product: ProductCart, index: number) => (
								<li key={index}>
									Product ID: {product.productId}, Quantity:{' '}
									{product.quantity}
								</li>
							)
						)}
					</ul>
					<hr />
				</div>
			))}
		</div>
	)
}

export default Cart
