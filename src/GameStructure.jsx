import React from "react"

let videogame = [
    {
        videoGameName: "very cool",
        Review: "VERY SORTS"
    }, 
    {
        videoGameName: "very NOTcool",
        Review: "VERYNOT SORTS"
    }, 
    {
        videoGameName: "very XX cool",
        Review: "VERY  XX SORTS"
    }, 
]
function GameStructure() {
return (
    <div>
        {videogame}
    </div>
)
}
export default GameStructure

console.log("this is a testddd ")
console.log(videogame)