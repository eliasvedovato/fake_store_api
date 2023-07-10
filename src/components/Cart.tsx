import {AiOutlineClose} from 'react-icons/ai'

interface CartProps {
	showCart: boolean
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

function Cart({ showCart, setShowCart }: CartProps) {
	return (
		<div className='cart' style={{ display: showCart ? 'block' : 'none' }}>
			<AiOutlineClose
				className='close-icon-cart'
				onClick={() => setShowCart(!showCart)}
			/>
			<h1>Cart</h1>
			{}
			<h2>Total: </h2>
		</div>
	)
}

export default Cart