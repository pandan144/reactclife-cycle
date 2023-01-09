import React, { useEffect } from "react";

function Life(){
     useEffect(()=>{
        console.log("life child componentdidmount");

        const intravel=setInterval(()=>{
            console.log("child component")
        },2000);
        return()=>{
            console.log("componentwillunount");
            clearInterval(intravel)
        }
     },[])
    return(
        <div>
            <h3>life cycle</h3>
        </div>
    )
}
 export default Life;