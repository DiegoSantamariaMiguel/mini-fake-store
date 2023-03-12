import React from "react";
import {Link} from "react-router-dom";
// import GameStructure from "./GameStructure";


// console.log("TRHIS IS IA TEST")
// console.log(GameStructure)




let campos = ["ID","Name","Game-genre","Price"]
let data = [
{
    "autorId": 1,
    "Name": "Herry patta",
"genre": "violence",
"price": "$11",
"productDetail": "its really cool",
"img-location": "https//blah"

}
,
{
    "autorId": 2,
    "Name": "AOE2",
    "genre": "RTS",
    "price": "$11",
    "productDetail": "its really cool",
    "img-location": "https//blah"
    
}
,
{
    "autorId": 3,
    "genre": "Dargen",
    "Name": "cup",
    "price": "$33",
    "productDetail": "its really cool",
    "img-location": "https//blah"
    
}

]



data.push({
    "autorId": 4,
    "genre": "Dorgon",
    "Name": "cup-head",
    "price": "$12",
    "productDetail": "its really cool",
    "img-location": "https//blah"
    
});


//  mandar los elementos
function Admin(){

    // console.log("filas",data)
    // console.log("campos",campos)
    // console.log(Object.values(data[0]))

    return(
        <div>
      
        <table className="table table-striped">
            <thead>
            <tr>
                <td><Link to= "/"className="btn btn-success">Nuevo</Link></td>
              {campos.map((value,index)=> {
                return <th key={index}>{value}</th>
              })}
            </tr>
            </thead>

            <tbody>
          
                {data.map((value,index)=>{
                    return <tr key={index}> 
                    <td>
                        <Link className="btn btn-primary">Editar</Link>
                        <Link className="btn btn-danger">Eliminar</Link>
                    </td>
                    
                  
             
                    {Object.values(value).map((value2,index2)=> {
                        // le pusimos este IF index2 < 4 paraque no ense;e los elementos de cada objeto arriba del index 4 para que no muestre img location ni descripcion
                       if (index2 < 4) {

                           return <td key={index2}> {value2}</td>
                       } 
                        })}


                    </tr>
                })}
              
            </tbody>
        </table>
 
       
           
        </div>
    )
}
export default Admin;