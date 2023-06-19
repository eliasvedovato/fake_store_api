export default function ProductsList({ products }) {
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				gap: 5,
			}}
		>
			{products.map((product, index) => (
				<ul
					key={index}
					style={{
						background: 'grey',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							flexWrap: 'wrap',
							gap: 15,
						}}
					>
						<div>
							<img
								src={product.image}
								height={150}
								alt={product.title}
							/>
						</div>
						<div
							style={{
								maxWidth: 200,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}
						>
							<li
								style={{
									border: '1px solid white',
								}}
							>
								{product.title}
							</li>
							<h3>${product.price}</h3>
						</div>
					</div>
				</ul>
			))}
		</div>
	)
}
