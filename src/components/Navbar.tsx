import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
}: NavbarProps) {
	return (
		<div className='navbar'>
			<button onClick={onHandleAllProducts}>Get all products</button>
			<button onClick={() => setFiltersToggle(!filtersToggle)}>
				Filtros
			</button>

			<Link to='/cart'>
				<button
			>
				<FaShoppingCart />
			</button>
			</Link>
			
		</div>
	)
}
