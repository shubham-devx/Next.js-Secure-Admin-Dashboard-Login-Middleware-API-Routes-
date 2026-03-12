"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Dashboard(){

 const router = useRouter()

 const logout = () => {

  document.cookie="token=; max-age=0; path=/"

  router.push("/login")

 }

 return(

  <div>

   <div className="flex justify-between mb-8">

    <h1 className="text-3xl font-bold text-gray-900">
     Dashboard
    </h1>

    <button
     onClick={logout}
     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
     Logout
    </button>

   </div>

   <Link
    href="/dashboard/add-product"
    className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
   >
    Add Product
   </Link>

  </div>

 )

}