import { AiOutlineClose } from 'react-icons/ai'
import { useCart } from '../hooks/useCart'
import { Link } from 'react-router-dom'
import ManageItem from './ManageItem'

function Cart() {
	const { cartItems } = useCart()
	const calculateTotal = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		)
	}

	return (
		<div className='cart'>
			<Link to='/'>
				<AiOutlineClose className='close-icon-cart' />
			</Link>

			<h1>Cart</h1>

			{cartItems.length === 0 && <h4>the cart is empty</h4>}

			<ul className='cart-items'>
				{cartItems.map(item => (
					<div key={item.id} className='cart-item'>
						<img src={item.image} width={150} />
						<h4>{item.title}</h4>
						<ManageItem product={item} />
						<p>Price: ${item.price}</p>
					</div>
				))}
			</ul>

			<hr></hr>
			<h2>Total: ${calculateTotal().toFixed()}</h2>
		</div>
	)
}

export default Cart
