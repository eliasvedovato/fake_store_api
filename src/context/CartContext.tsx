import React, { createContext, useContext, useState, useEffect } from 'react'
import { Product } from '../App'

interface CartContextType {
	cartItems: Product[]
	addToCart: (product: Product) => void
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC = ({ children }: any) => {
	const [cartItems, setCartItems] = useState<Product[]>([])

	const addToCart = (product: Product) => {
		if (product.quantity === 0) {
			// Elimina el producto del carrito
			setCartItems(prevCart =>
				prevCart.filter(item => item.id !== product.id)
			)
		} else {
			// Actualiza el producto en el carrito o agrégalo si no existe
			const existingItemIndex = cartItems.findIndex(
				item => item.id === product.id
			)

			if (existingItemIndex !== -1) {
				const updatedCart = [...cartItems]
				updatedCart[existingItemIndex] = product
				setCartItems(updatedCart)
			} else {
				setCartItems(prevCart => [...prevCart, { ...product }])
			}
		}
	}

	useEffect(() => {
		const storedCartItems = localStorage.getItem('cartItems')
		if (storedCartItems) {
			setCartItems(JSON.parse(storedCartItems))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems))
	}, [cartItems])

	return (
		<CartContext.Provider value={{ cartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	)
}

export const useCart = () => {
	const context = useContext(CartContext)
	if (!context) {
		throw new Error('useCart must be used within a CartProvider')
	}
	return context
}
