import React from 'react'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface PriceFilterProps {
	onPriceFilter: (minValue: number, maxValue: number) => void
}

export default function PriceFilter({ onPriceFilter }: PriceFilterProps) {
	const [min, setMin] = useState<number>(0)
	const [max, setMax] = useState<number>(0)

	const handlePrice = () => {
		const minValue = min
		const maxValue = max

		onPriceFilter(minValue, maxValue)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
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

			<FaArrowRight style={{ cursor: 'pointer' }} onClick={handlePrice} />
		</div>
	)
}
