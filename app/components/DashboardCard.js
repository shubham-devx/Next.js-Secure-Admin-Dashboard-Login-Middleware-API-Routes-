export default function DashboardCard({title,value}){

 return(

  <div className="bg-white p-6 rounded-xl shadow">

   <h2 className="text-black-900">
    {title}
   </h2>

   <p className="text-3xl font-bold mt-2">
    {value}
   </p>

  </div>

 )

}