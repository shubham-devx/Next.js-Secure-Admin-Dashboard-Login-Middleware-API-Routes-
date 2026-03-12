let products=[
 {id:1,name:"Laptop",price:1200,image:"https://picsum.photos/300?1"},
 {id:2,name:"Phone",price:800,image:"https://picsum.photos/300?2"}
]

export async function GET(){

 return Response.json(products)

}

export async function POST(req){

 const data=await req.json()

 const newProduct={
  id:products.length+1,
  name:data.name,
  price:data.price,
  image:"https://picsum.photos/300"
 }

 products.push(newProduct)

 return Response.json(newProduct)

}