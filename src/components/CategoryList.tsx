interface CategoryListProps {
	categories: Set<string>
	selectedCategory: string
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function CategoryList({ categories, selectedCategory, setSelectedCategory }: CategoryListProps ) {
	const categoryArray = categories ? Array.from(categories) : []

	return (
		<ul className='category-list'>
			{categoryArray.map((category, index) => (
				<li
					key={index}
					onClick={() => {
						setSelectedCategory(category)
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
