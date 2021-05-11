const fetchFunction=()=>{
//    return setTimeout(()=>{
//         return [{
//             "man":0
//         }];
//     },6000)
const data = [{
    "morsalin":"018923423"
}]
return new Promise((resolve,reject)=>{
    if(data)
        resolve(data)
    reject(new Error("Invalid"))
})
}


const fetch = ()=>{
    return 'morsalin'
}



export {fetch,fetchFunction};


