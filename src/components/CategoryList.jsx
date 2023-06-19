export default function CategoryList({ categories, setSelectedCategory }) {
	return (
		<ul
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: 25,
				justifyContent: 'center',
				background: 'grey',
			}}
		>
			{Array.from(categories).map((c, i) => (
				<li
					key={i}
					onClick={() => setSelectedCategory(c)}
					style={{ cursor: 'pointer', userSelect: 'none' }}
				>
					{c}
				</li>
			))}
		</ul>
	)
}
