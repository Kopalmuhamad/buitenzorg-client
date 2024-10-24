import ProductCard from "@/components/moleculs/product-card"
import Hero from "@/components/organisme/hero"
import MainLayout from "@/components/organisme/main-layout"
import { fetchProducts } from "@/services/apis/product"
import { IProduct } from "@/services/interfaces"
import { useEffect, useState } from "react"

const Home = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    const getProducts = async () => {
        try {
            const response = await fetchProducts()
            setProducts(response?.data?.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])
    console.log(products)

    return (
        <MainLayout>
            <div className="w-full min-h-screen overflow-hidden">
                <Hero />
                <section className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </section>
            </div>
        </MainLayout>
    )
}

export default Home