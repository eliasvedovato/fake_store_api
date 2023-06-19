export default function ProductsList({ products }) {
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}
		>
			{products.map((product, index) => (
				<ul
					key={index}
					style={{
						background: 'grey',
						borderRadius: 15
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
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
