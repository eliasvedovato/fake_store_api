interface searchInputProps {
	onInputChange: (value: string) => void
}

export default function SearchInput({ onInputChange }: searchInputProps) {
	return (
		<input
			type='text'
			placeholder='Search a product'
			onChange={e => onInputChange(e.target.value)}
			style={{ height: 40 }}
		></input>
	)
}