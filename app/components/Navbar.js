"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar(){

 const router = useRouter()

 const logout = () => {

  document.cookie="token=; max-age=0; path=/"

  router.push("/login")

 }

 return(

  <nav className="bg-white shadow">

   <div className="max-w-7xl mx-auto flex justify-between p-4">

    <h1 className="font-bold text-xl text-blue-600">
     NextStore
    </h1>

    <div className="flex gap-6">

     <Link href="/">Home</Link>

     <Link href="/products">Products</Link>

     <Link href="/dashboard">Dashboard</Link>

     <button
      onClick={logout}
      className="text-red-500"
     >
      Logout
     </button>

    </div>

   </div>

  </nav>

 )

}