import { Link } from 'react-router-dom'
import { Product } from '../App'
import { useCart } from '../hooks/useCart'
import ManageItem from './ManageItem'

interface ProductsListProps {
	products: Product[]
}

export default function ProductsList({ products }: ProductsListProps) {
	const { cartItems, manageCart } = useCart()

	return (
		<div className='products-container'>
			{products.map((product: Product) => {
				const cartItem = cartItems.find(item => item.id === product.id)
				const quantity = cartItem ? cartItem.quantity : 0

				return (
					<ul key={product.id}>
						<div className='product-flex'>
							<img
								src={product.image}
								height={150}
								alt={product.title}
							/>
							<div className='product-info'>
								<li>{product.title}</li>
								<h3>${product.price}</h3>

								{quantity === 0 ? (
									<button
										onClick={() =>
											manageCart({
												...product,
												quantity: 1,
											})
										}
									>
										+ Add to cart
									</button>
								) : (
									<>
										<ManageItem product={product} />
										<Link to='/cart'>
											<button>Go to cart</button>
										</Link>
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
