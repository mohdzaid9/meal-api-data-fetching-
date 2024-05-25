function meals(){
    let category = fetch(` https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    category.then((res)=>{
        console.log(res)
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })
}

// another one 

function meals2(){
let ingredients = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
ingredients.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
}