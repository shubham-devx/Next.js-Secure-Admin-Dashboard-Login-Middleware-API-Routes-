import Link from "next/link"

export default function Home(){

 return(

   <div className="text-center">

     <h1 className="text-4xl font-bold mb-6">
       Product Dashboard
     </h1>

     <p className="mb-8 text-gray-600">
       Manage products using Next.js
     </p>

     <div className="space-x-4">

       <Link
        href="/products"
        className="bg-blue-500 text-white px-6 py-3 rounded"
       >
        View Products
       </Link>

       <Link
        href="/add-product"
        className="bg-green-500 text-white px-6 py-3 rounded"
       >
        Add Product
       </Link>

     </div>

   </div>

 )

}