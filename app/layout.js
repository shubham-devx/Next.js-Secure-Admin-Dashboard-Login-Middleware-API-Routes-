import "./globals.css"
import Navbar from "./components/Navbar"

export default function RootLayout({ children }) {

 return (

  <html>
   <body className="bg-gray-100 text-gray-900">

    <Navbar/>

    <main className="max-w-7xl mx-auto p-6">
     {children}
    </main>

   </body>
  </html>

 )

}