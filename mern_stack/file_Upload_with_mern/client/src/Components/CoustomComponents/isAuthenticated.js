import React from 'react'
import axios from 'axios';
const IsAuthenticated = () => {

  const getdata=async ()=>{



//  await axios.get("/api/about").then((response)=>{
//           console.log(response)
//       }).catch((err)=>{console.log(err)})

const res = await fetch("/api/about",{
    method:"GET",
    headers:{
        Accept: "application/json",
        "content-type": "application/json",
    },
    credentials:"include",
    
})
    const data = await res.json();
    console.log(data)

  }  
  console.log(getdata())

    return (
        <div>
            
        </div>
    )
}

export default IsAuthenticated
