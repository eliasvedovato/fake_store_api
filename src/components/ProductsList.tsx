import React from "react"
import { Product } from "../App"

interface ProductsListProps {
	products: Product[]
}

export default function ProductsList({ products }: ProductsListProps) {
	return (
		<div className='products-container'>
			{products.map((product: Product, index: number) => (
				<ul
					key={index}
					style={{
						background: 'grey',
					}}
				>
					<div className='product-flex'>
						<div>
							<img
								src={product.image}
								height={150}
								alt={product.title}
							/>
						</div>
						<div className='product-info'>
							<li
								style={{
									border: '1px solid white',
								}}
							>
								{product.title}
							</li>
							<h3>${product.price}</h3>
						</div>
					</div>
				</ul>
			))}
		</div>
	)
}
