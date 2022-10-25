let tile = Array.from(document.querySelectorAll(".tile"))
let xMark = "X"
let oMark = "O"
let winningCombos = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
]
tile.forEach(e => {
    e.addEventListener("click", e => {
        XandO(e)
    })
})

function XandO(arr) {
    
    arr.forEach((x, i) => {
        x.innerHTML = xMark ? x.innerHTML = xMark : x.innerHTML = oMark
    })
}



function ticTac() {
    
}


console.log(tile[0])