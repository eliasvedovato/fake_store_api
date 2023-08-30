import React, { useEffect, useState } from "react"

interface CategoryListProps {
	categories: Set<string>
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function CategoryList({ categories, setSelectedCategory }: CategoryListProps ) {
	const categoryArray = categories ? Array.from(categories) : []

	const [selectedCategory, setSelectedCategoryLocal] = useState('')

	useEffect(() => {
		setSelectedCategoryLocal('')
	}, [])

	return (
		<ul className='category-list'>
			{categoryArray.map((category, index) => (
				<li
					key={index}
					onClick={() => {
						setSelectedCategory(category)
						setSelectedCategoryLocal(category)
					}}
					className={`each-category ${
						selectedCategory === category ? 'selected' : ''
					}`}
				>
					{category.toUpperCase()}
				</li>
			))}
		</ul>
	)
}
