//  https://www.themealdb.com/api/json/v1/1/list.php?a=list

//  Elements
const cuisineSelect = document.querySelector("#cuisines")
const CategorySelect = document.querySelector("#categories")

//Function Calls
getCuisines()
getCategories()


function getCuisines(){
fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
.then(r => r.json())
//.then(cuisines => console.log(cuisines))
.then(cuisines => renderCuisineOptions(cuisines.meals))
.catch(error => alert(error))

}

function renderCuisineOptions(cuisines){
    console.log(cuisines)
    console.log("In render")

    // Go through array and make option for it
    cuisines.forEach(cuisine => {
        const option = document.createElement("option")
        option.value = cuisine.strArea
        option.textContent = cuisine.strArea
        cuisineSelect.append(option)        
    });
}

// Category
function getCategories(){
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then(r => r.json())
    .then(categories => renderCategoryOptions(categories.meals))
    .catch(error => alert(error))
    
    }

    function renderCategoryOptions(categories){
        console.log("categories: ")
        console.log(categories)

        categories.forEach(category => {
            const option = document.createElement("option")
            option.value = category.strCategory
            option.textContent = category.strCategory
            CategorySelect.append(option)        
        });
    }