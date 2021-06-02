// import axios from 'axios';
const IsAuthenticated =async () => {
  try {
    const res = await fetch("/api/about",{
        method:"GET",
        headers:{
            Accept: "application/json",
            "content-type": "application/json",
        },
        credentials:"include",
    })
        const data = await res.json();
        if(!res.status === 200){
          const error = new Error(res.error);
          throw error;
        }
        return data;
    
  } catch (error) {
  return false 
  }
}

export default IsAuthenticated
