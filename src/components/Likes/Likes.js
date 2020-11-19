import React from "react"; 

function LikePost (){
    const like = (id) =>
    fetch('/like', {
        method:"put", 
        headers:{
            "Content-Type": "JSON", 
            "authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
            vendorId: id
        })
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
    })

}

export default LikePost; 