import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function PriceFilter({ onPriceFilter }) {
	const [min, setMin] = useState(0)
	const [max, setMax] = useState(0)

	const handlePrice = () => {
		const minValue = parseInt(min)
		const maxValue = parseInt(max)

		onPriceFilter(minValue, maxValue)
	}

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			handlePrice()
		}
	}

	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				gap: 20,
				alignItems: 'center',
			}}
		>
			<div>
				<label htmlFor='min'>Min:</label>
				<input
					type='number'
					id='min'
					placeholder='min'
					style={{ width: 80, marginLeft: 10 }}
					value={isNaN(max) ? 0 : min}
					onChange={e => setMin(parseInt(e.target.value))}
					onKeyDown={handleKeyDown}
				></input>
			</div>
			<span>-</span>
			<div>
				<label htmlFor='max'>Max:</label>
				<input
					type='number'
					id='max'
					placeholder='max'
					style={{ width: 80, marginLeft: 10 }}
					value={isNaN(max) ? 0 : max}
					onChange={e => setMax(parseInt(e.target.value))}
					onKeyDown={handleKeyDown}
				></input>
			</div>

			<FaArrowRight
				style={{
					background: 'grey',
					padding: 10,
					borderRadius: '100%',
					cursor: 'pointer',
				}}
				onClick={handlePrice}
			/>
		</div>
	)
}
