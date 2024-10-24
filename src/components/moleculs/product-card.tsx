'use client'

import { useState } from 'react'
import { Plus, Minus, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/atom/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/atom/card"
import { Input } from "@/components/atom/input"
import { IProduct } from '@/services/interfaces'
import { formatCurrency } from '@/lib/format-currency'


export default function ProductCard({ product }: { product: IProduct }) {
    const [quantity, setQuantity] = useState(1)

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value, 10)
        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= product.stock) {
            setQuantity(newQuantity)
        }
    }

    const addToCart = () => {
        console.log(`Added ${quantity} ${product.name}(s) to cart`)
        // Here you would typically dispatch an action to add the item to the cart
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="relative w-full h-64">
                    <img
                        src={product.images}
                        alt={product.name}
                        className="rounded-md w-full h-full object-cover"
                    />
                </div>
                <p className="text-muted-foreground">{product.description}</p>
                <p className="text-xl font-semibold"> {formatCurrency(product.price.toFixed(2))}</p>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={decrementQuantity}
                        disabled={quantity === 1}
                        aria-label="Decrease quantity"
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                        type="text"
                        inputMode='numeric'
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-20 text-center"
                        min={1}
                        max={product.stock}
                    />
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={incrementQuantity}
                        disabled={quantity === product.stock}
                        aria-label="Increase quantity"
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                    {product.stock} items in stock
                </p>
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={addToCart}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
            </CardFooter>
        </Card>
    )
}