import Link from "next/link"
import DashboardCard from "../../components/DashboardCard"

export default function Dashboard(){

 return(

  <div>

   <h1 className="text-3xl font-bold mb-8">
    Dashboard
   </h1>

   <Link
    href="/dashboard/add-product"
    className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
   >
    Add Product
   </Link>

   <div className="grid grid-cols-3 gap-6 mt-8">

    <DashboardCard title="Total Products" value="2"/>
    <DashboardCard title="Orders" value="15"/>
    <DashboardCard title="Revenue" value="$1200"/>

   </div>

  </div>

 )

}