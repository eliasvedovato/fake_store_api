import React from 'react'
import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

export default function FilterOrder({ onPriceOrder }) {
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
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<button
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: 5,
				}}
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
						style={{
							margin: 'auto',
							cursor: 'pointer',
							userSelect: 'none',
						}}
						onClick={() => handleOrder('desc')}
					>
						Menor precio
					</span>
					<span
						style={{
							margin: 'auto',
							cursor: 'pointer',
							userSelect: 'none',
						}}
						onClick={() => handleOrder('asc')}
					>
						Mayor precio
					</span>
				</div>
			</div>
		</div>
	)
}