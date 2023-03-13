import React from "react";

const Course=(props)=>{
    
    if(props.cd.avail===true){

   return(
    <>
        <h1>{props.cd.name}</h1>
        <h1>{props.cd.duration}</h1>
        <button style={{color:"blue"}}> AVAILABLE</button>
        </>
   )
}
   else{
    return(
        <>
        <h1>{props.cd.name}</h1>
        <h1>{props.cd.duration}</h1>
        <button style={{color:"red"}}>NOT AVAILABLE</button>
        </>
    )
   }
}

export default Course