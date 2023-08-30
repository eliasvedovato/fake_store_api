import { AiOutlineClose } from 'react-icons/ai'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Cart() {
	const { cartItems, addToCart } = useCart()
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
			<div className='cart-items'>
				{cartItems.map(item => (
					<div key={item.id} className='cart-item'>
						<img src={item.image} width={150} />
						<h4>{item.title}</h4>
						<p>Quantity: {item.quantity}</p>
						<p>Price: ${item.price}</p>
					</div>
				))}
			</div>

			<h2>Total: ${calculateTotal().toFixed()}</h2>
		</div>
	)
}

export default Cart
