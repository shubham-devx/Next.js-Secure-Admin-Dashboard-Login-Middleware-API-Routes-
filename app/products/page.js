import ProductCard from "../components/ProductCard"

async function getProducts(){

fetch("/api/products",{ cache:"no-store" })

 return res.json()

}

export default async function Products(){

 const products = await getProducts()

 return(

  <div>

   <h1 className="text-3xl font-bold mb-8">
    Products
   </h1>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {products.map((p)=>(
     <ProductCard key={p.id} product={p}/>
    ))}

   </div>

  </div>

 )

}