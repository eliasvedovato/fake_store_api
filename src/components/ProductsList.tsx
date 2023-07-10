import { Product } from "../App"

interface ProductsListProps {
	products: Product[]
}

export default function ProductsList({ products }: ProductsListProps) {

	const quantity: number = 0

	return (
		<div className='products-container'>
			{products.map((product: Product) => (
				<ul
					key={product.id}
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

							{quantity === 0 ? (
								<button
									onClick={() => increaseCartQuantity(product.id)}
								>
									+ Add to cart
								</button>
							) : (
								<>
									<div className='manage-cart'>
										<button
											onClick={() =>
												decreaseCartQuantity(product.id)
											}
										>
											-
										</button>
										<div>
											<span style={{ fontSize: 20 }}>
												{quantity}
											</span>{' '}
											in cart
										</div>

										<button
											onClick={() =>
												increaseCartQuantity(product.id)
											}
										>
											+
										</button>
									</div>

									<button onClick={() => removeFromCart(product.id)}>
										Remove item
									</button>
								</>
							)}
						</div>
					</div>
				</ul>
			))}
		</div>
	)
}
