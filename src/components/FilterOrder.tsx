import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

interface FilterOrderProps {
	onPriceOrder: (order: string) => void
}

export default function FilterOrder({ onPriceOrder }: FilterOrderProps) {
	const [toggleDropdown, setToggleDropdown] = useState(false)

   const handleOrder = (order: string) => {
    onPriceOrder(order)
    /* Llama a la función handlePriceOrder del componente 
    padre con el orden seleccionado */
    setToggleDropdown(false)
    // Cierra el dropdown después de seleccionar el orden
  }

	return (
		<div
			className='order-by-flex'
		>
			<button
				className='order-by-button'
				onClick={() => setToggleDropdown(!toggleDropdown)}
			>
				Order by
				<FaCaretDown />
			</button>
			<div style={{ display: toggleDropdown ? 'block' : 'none' }}>
				<div
					style={{ display: 'flex', flexDirection: 'column', gap: 5 }}
				>
					<span
						className='order-by-options'
						onClick={() => handleOrder('desc')}
					>
						Menor precio
					</span>
					<span
						className='order-by-options'
						onClick={() => handleOrder('asc')}
					>
						Mayor precio
					</span>
				</div>
			</div>
		</div>
	)
}
