console.log("Zadanie 9 na samym dole")
new Promise(resolve => {
    setTimeout(() => console.log("Zadanie 9: Udało się!"), 5000)
});

let a = 4
let b = 5
const multiplysync = (x, y) => new Promise((resolve, reject) => {
    if(typeof(x) != "number" || typeof(y) != "number"){
        reject("to nie jest liczba!")
    }
    else resolve(x*y)
})
console.log("Zadanie 10: "+multiplysync(a,b))

const url = "https://jsonplaceholder.typicode.com/posts"
console.log("Zadanie 11: \nv ")
fetch(url)
.then(res => {
    if(res.ok)
    {
        return res.json()
    }
    else
    {
        throw new Error(res.statusText)
    }
})
.then(res => res.map(post => {
    console.log(`Post nr ${post.id}:`)
    console.log(`Tytuł: ${post.title}`)
    console.log(`treść:\n ${post.body}`)
}))
.catch(console.error)

