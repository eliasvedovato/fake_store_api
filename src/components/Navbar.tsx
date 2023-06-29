import { FaShoppingCart } from 'react-icons/fa'

interface NavbarProps {
	onHandleAllProducts: () => void
	setFiltersToggle: React.Dispatch<React.SetStateAction<boolean>>
	filtersToggle: boolean
}

export default function Navbar({ onHandleAllProducts, setFiltersToggle, filtersToggle }: NavbarProps) {
	return (
		<div className='buttons-container'>
			<button onClick={onHandleAllProducts}>Get all products</button>
			<button onClick={() => setFiltersToggle(!filtersToggle)}>
				Filtros
			</button>
			<button style={{ position: 'relative' }}>
				<FaShoppingCart />
				<div className='quantity-cart'>3</div>
			</button>
		</div>
	)
}
