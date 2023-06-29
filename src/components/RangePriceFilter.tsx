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
		onPriceFilter(min, max)
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === 'Enter') {
			handlePrice()
		}
	}

	return (
		<div className='range-price-flex'>
			<div>
				<label htmlFor='min' style={{marginRight: 10}}>Min:</label>
				<input
					type='number'
					id='min'
					placeholder='Min'
					onChange={e => setMin(parseInt(e.target.value))}
					onKeyDown={handleKeyDown}
				></input>
			</div>
			<span>-</span>
			<div>
				<label htmlFor='max' style={{marginRight: 10}}>Max:</label>
				<input
					type='number'
					id='max'
					placeholder='Max'
					onChange={e => setMax(parseInt(e.target.value))}
					onKeyDown={handleKeyDown}
				></input>
			</div>

			<FaArrowRight style={{ cursor: 'pointer' }} onClick={handlePrice} />
		</div>
	)
}
