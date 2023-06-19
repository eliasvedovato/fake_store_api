export default function CategoryList({ categories, setSelectedCategory }) {
	return (
		<ul
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: 25,
				justifyContent: 'center',
			}}
		>
			{Array.from(categories).map((c, index) => (
				<li
					key={index}
					onClick={() => setSelectedCategory(c)}
					style={{
						cursor: 'pointer',
						userSelect: 'none',
						font: 'bold',
						borderBottom: '2px solid green',
					}}
				>
					{c.toUpperCase()}
				</li>
			))}
		</ul>
	)
}
