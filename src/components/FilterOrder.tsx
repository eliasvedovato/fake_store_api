import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

interface FilterOrderProps {
	onPriceOrder: (order: string) => void
}

export default function FilterOrder({ onPriceOrder }: FilterOrderProps) {
	const [toggleDropdown, setToggleDropdown] = useState(false)
	const [highOrLow, setHighOrLow] = useState('high')

   const handleOrder = (order: string) => {
    onPriceOrder(order)
    setToggleDropdown(false)
		order === 'desc' ? setHighOrLow('low') : setHighOrLow('high')
  }

	return (
		<div className='order-by-flex'>
			<button
				className='order-by-button'
				onClick={() => setToggleDropdown(!toggleDropdown)}
			>
				Order by
				<FaCaretDown />
			</button>
			<div style={{ display: toggleDropdown ? 'block' : 'none' }}>
				<div
					style={{ display: 'flex', flexDirection: 'column', gap: 5, paddingTop: 10, }}
				>
					<span
						className='order-by-options'
						onClick={() => handleOrder('desc')}
						style={{
							textDecoration:
								highOrLow === 'low' ? 'underline' : 'none',
						}}
					>
						Menor precio
					</span>
					<span
						className='order-by-options'
						onClick={() => handleOrder('asc')}
						style={{
							textDecoration:
								highOrLow === 'high' ? 'underline' : 'none',
						}}
					>
						Mayor precio
					</span>
				</div>
			</div>
		</div>
	)
}
