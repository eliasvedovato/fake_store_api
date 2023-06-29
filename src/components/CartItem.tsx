type CartItemProps = {
	id: number
	quantity: number
}

export default function CartItem({ id, quantity }: CartItemProps) {
	// const item = products.find(i => i.id === id)
	if (item == null) return null

	return (
		<div>
			<img
				src={item.imgUrl}
				style={{ width: '125px', height: '75px', objectFit: 'cover' }}
			/>
			<div>
				<div>
					{item.name}{' '}
					{quantity > 1 && (
						<span
							className='text-muted'
							style={{ fontSize: '.65rem' }}
						>
							x{quantity}
						</span>
					)}
				</div>
				<div className='text-muted' style={{ fontSize: '.75rem' }}>
					{item.price}
				</div>
			</div>
			<div> {item.price * quantity}</div>
			<button
				onClick={() => removeFromCart(item.id)}
			>
				&times;
			</button>
		</div>
	)
}