import React from "react"

interface CategoryListProps {
	categories: Set<string>
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function CategoryList({ categories, setSelectedCategory }: CategoryListProps ) {
	const categoryArray = categories ? Array.from(categories) : []

	return (
		<ul className='category-list'>
			{categoryArray.map((category, index) => (
				<li
					key={index}
					onClick={() => setSelectedCategory(category)}
					className='each-category'
				>
					{category.toUpperCase()}
				</li>
			))}
		</ul>
	)
}
