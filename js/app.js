console.log("hi how are you")

const loadAllfood =async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    const data = await res.json()
    displayAllFood(data.categories)
}
const displayAllFood = (categories) =>{
    console.log(categories)
    const alcards = document.getElementById("cards")
    categories.forEach(allFood => {
        
        const card = document.createElement("div")
        card.classList.add("card","lg:card-side","bg-base-100","border" )
        card.innerHTML = `
         <figure>
                  <img
                    src="${allFood.strCategoryThumb}"
                    alt="Album" />
                </figure>
                <div class="card-body lg:w-1/2">
                  <h2 class="card-title">${allFood.strCategory}</h2>
                  <p>${allFood.strCategoryDescription.slice(0,120)}</p>
                  <div class="card-actions justify-start">
                    <button class="btn text-yellow-500">View Details</button>
                  </div>
                </div>
        
        
        `
        alcards.append(card)



        
    });
}

loadAllfood()