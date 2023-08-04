export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
	   return Query1.data.map((s)=>{
			 return {
				 name :s.name,
				 email:s.email
			 }
		 })
	},
	 myFun2 () {
	    return fetch("https://dummyjson.com/products").then(s=>s.json()).then((s)=>{
				  console.log(s.products)
				  return s.products.map((s)=>{
						return{
							name: s.title,
							brand:s.brand
						}
					})
				 
			 })
	}
}