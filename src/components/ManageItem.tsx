import { Product } from '../App'
import { useCart } from '../hooks/useCart'

interface ManageItemProps {
	product: Product
}

export default function ManageItem({ product }: ManageItemProps): JSX.Element {
	const { cartItems, manageCart } = useCart()
  const cartItem = cartItems.find(item => item.id === product.id)
  const quantity = cartItem ? cartItem.quantity : 0

	return (
		<div className='manage-item'>
			<div>
				<button
					onClick={() =>
						manageCart({
							...product,
							quantity: quantity - 1,
						})
					}
				>
					-
				</button>
				<span>{quantity} in cart</span>
				<button
					onClick={() =>
						manageCart({
							...product,
							quantity: quantity + 1,
						})
					}
				>
					+
				</button>
			</div>

			<button onClick={() => manageCart({ ...product, quantity: 0 })}>
				Remove
			</button>
		</div>
	)
}
