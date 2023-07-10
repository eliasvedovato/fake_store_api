import { FaShoppingCart } from 'react-icons/fa'

interface NavbarProps {
	onHandleAllProducts: () => void
	setFiltersToggle: React.Dispatch<React.SetStateAction<boolean>>
	filtersToggle: boolean
	setShowCart: React.Dispatch<React.SetStateAction<boolean>>
	showCart: boolean
}

export default function Navbar({
	onHandleAllProducts,
	setFiltersToggle,
	filtersToggle,
	setShowCart,
	showCart
}: NavbarProps) {
	return (
		<div className='buttons-container'>
			<button onClick={onHandleAllProducts}>Get all products</button>
			<button onClick={() => setFiltersToggle(!filtersToggle)}>
				Filtros
			</button>
			<button
				style={{ position: 'relative' }}
				onClick={() => setShowCart(!showCart)}
			>
				<FaShoppingCart />
				<div className='quantity-cart'>3</div>
			</button>
		</div>
	)
}
