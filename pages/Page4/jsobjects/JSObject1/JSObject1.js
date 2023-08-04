export default {
	myVar1: [],
	myVar2: {},
	async myFun1 () {
	    return Api1.data.products
	},
 async myFun2 () {
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