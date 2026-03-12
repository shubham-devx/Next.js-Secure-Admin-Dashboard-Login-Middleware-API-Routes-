import ProductCard from "../components/ProductCard"

async function getProducts() {

  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store"
  })

  const data = await response.json()

  return data
}

export default async function Products() {

  const products = await getProducts()

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  )
}