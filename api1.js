const inp = document.querySelector(".inp")
const btn = document.querySelector(".search a")

let api = "https://www.themealdb.com/api/json/v1/1/search.php?s=egg";

fetch(api)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        search(res.meals)
    })

function search(res) {
    btn.addEventListener("click", () => {
        res.forEach(element => {
            console.log(element);
            res.filter((item) => {
                item.strMeal.includes(inp.value)
            })
        })
    })
}