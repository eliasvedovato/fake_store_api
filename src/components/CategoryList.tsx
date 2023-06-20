import React from "react"

interface CategoryListProps {
	categories: Set<string>
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function CategoryList({ categories, setSelectedCategory }: CategoryListProps ) {
	const categoryArray = categories ? Array.from(categories) : []

	return (
		<ul
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: 25,
				justifyContent: 'center',
			}}
		>
			{categoryArray.map((category, index) => (
				<li
					key={index}
					onClick={() => setSelectedCategory(category)}
					style={{
						cursor: 'pointer',
						userSelect: 'none',
						font: 'bold',
						borderBottom: '2px solid green',
					}}
				>
					{category.toUpperCase()}
				</li>
			))}
		</ul>
	)
}
