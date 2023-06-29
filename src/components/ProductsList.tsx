import { Product } from "../App"

interface ProductsListProps {
	products: Product[]
}

export default function ProductsList({ products }: ProductsListProps) {
	const cartQuantity = 0

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

							{cartQuantity === 0 ? (
								<button>+ Add to cart</button>
							) : (
								<>
									<div className='manage-cart'>
										<button>-</button>
										<div>
											<span style={{ fontSize: 20 }}>
												{cartQuantity}
											</span>{' '}
											in cart
										</div>

										<button>+</button>
									</div>

									<button>Remove item</button>
								</>
							)}
						</div>
					</div>
				</ul>
			))}
		</div>
	)
}
