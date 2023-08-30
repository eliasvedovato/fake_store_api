import { Product } from '../App'
import { useCart } from '../context/CartContext'

interface ProductsListProps {
	products: Product[]
}

export default function ProductsList({ products }: ProductsListProps) {
	const { cartItems, addToCart } = useCart()

	return (
		<div className='products-container'>
			{products.map((product: Product) => {
				const cartItem = cartItems.find(item => item.id === product.id)
				const quantity = cartItem ? cartItem.quantity : 0

				return (
					<ul key={product.id} style={{ background: 'grey' }}>
						<div className='product-flex'>
							<div>
								<img
									src={product.image}
									height={150}
									alt={product.title}
								/>
							</div>
							<div className='product-info'>
								<li style={{ border: '1px solid white' }}>
									{product.title}
								</li>
								<h3>${product.price}</h3>

								{quantity === 0 ? (
									<button
										onClick={() =>
											addToCart({
												...product,
												quantity: 1,
											})
										}
									>
										+ Add to cart
									</button>
								) : (
									<>
										<div className='manage-cart'>
											<button
												onClick={() =>
													addToCart({
														...product,
														quantity: quantity - 1,
													})
												}
											>
												-
											</button>
											<span style={{ fontSize: 20 }}>
												{quantity} in cart
											</span>
											<button
												onClick={() =>
													addToCart({
														...product,
														quantity: quantity + 1,
													})
												}
											>
												+
											</button>
										</div>
										<button
											onClick={() =>
												addToCart({
													...product,
													quantity: 0,
												})
											}
										>
											Remove
										</button>
									</>
								)}
							</div>
						</div>
					</ul>
				)
			})}
		</div>
	)
}
