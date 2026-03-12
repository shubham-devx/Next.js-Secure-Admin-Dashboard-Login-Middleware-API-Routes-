"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login(){

 const router = useRouter()

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")

 const login = () => {

  if(email === "admin@gmail.com" && password === "1234"){

   document.cookie="token=admin123; path=/"

   router.push("/dashboard")

  }else{

   alert("Invalid credentials")

  }

 }

 return(

  <div className="flex items-center justify-center min-h-screen bg-gray-100">

   <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

    <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
     Admin Login
    </h1>

    <input
     placeholder="Email"
     className="border p-3 w-full mb-4 text-black rounded"
     onChange={(e)=>setEmail(e.target.value)}
    />

    <input
     type="password"
     placeholder="Password"
     className="border p-3 w-full mb-6 text-black rounded"
     onChange={(e)=>setPassword(e.target.value)}
    />

    <button
     onClick={login}
     className="bg-blue-500 text-white w-full py-3 rounded hover:bg-blue-600 transition"
    >
     Login
    </button>

   </div>

  </div>

 )

}