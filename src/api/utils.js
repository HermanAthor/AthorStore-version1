
/* Products data call*/ 
export async function getProducts (){
    const res = await fetch('https://fakestoreapi.com/products')
    const products = res.json()
    return await products
}


export async function getProductsDetails (productId){
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)

    if(!res.ok) {
        throw new Error('failed to fetch user')
    }

    return res.json()
    
}

export async function getHomeProducts(){
    const res = await fetch('https://dummyjson.com/products')
    const products = res.json()
    return await products
}
