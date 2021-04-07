const objectName = Symbol("main");

function i(obj){
    return({
        ...obj
    })
}

const data = i({obj:objectName})

console.log(data)

let ovj = {
    name:objectName
}

console.log(ovj.name)

const Data = {
    [objectName.description]:"morsalin",
    [objectName]:4
}
console.log(Data[objectName])

console.log(Data);

console.log(typeof Data)