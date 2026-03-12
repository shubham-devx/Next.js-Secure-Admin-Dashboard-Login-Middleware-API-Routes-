export default function Product({params}){

 return(

  <div className="bg-white p-10 rounded-xl shadow max-w-xl">

   <h1 className="text-3xl font-bold mb-4">
    Product {params.id}
   </h1>

   <p className="text-gray-600">
    Product details page
   </p>

  </div>

 )

}