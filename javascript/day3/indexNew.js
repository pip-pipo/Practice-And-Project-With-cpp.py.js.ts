import fs from 'fs';
import path from 'path';


// fs.writeFile("app.jsdsf","hi html",(err)=>{
//     if(!null){
//         console.log('file is created')
//     }
//     return err
// });


// fs.renameSync("index.js","hello.js")

fs.readFile("indexNew.js",(err,data)=>{
    if(err){return err.message;}
     console.log( data.toString())
    fs.writeFile("data1.js",data.toString(),(e,s)=>{
        if(e) return e;
        else{return s}
    })
})


// fs.readFileSync("index.html",(err,data)=>{
//     if(err){return err.message;}
//      console.log( data.toString())
//     // else{

//     // //  fs.writeFile("data.js",data.toString(),(err,succes)=>{
//     // //         if(err){
//     // //             console.log('not')
//     // //         }
//     // //         else{
//     // //             console.log('yes')
//     // //         }
//     // //     })
//     // }
// })

// console.log('hi')


// fs.readFileSync("app.js","mesf.js");