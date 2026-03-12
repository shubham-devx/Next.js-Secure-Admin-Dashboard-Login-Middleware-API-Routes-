import Link from "next/link"

export default function ProductCard({product}){

 return(

  <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

   <img
    src={product.image}
    className="h-48 w-full object-cover"
   />

   <div className="p-4">

    <h2 className="text-lg font-bold text-gray-900 mb-2">
     {product.name}
    </h2>

    <p className="text-black-600 mb-4">
     ${product.price}
    </p>

    <Link
     href={`/product/${product.id}`}
     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
     View Details
    </Link>

   </div>

  </div>

 )

}