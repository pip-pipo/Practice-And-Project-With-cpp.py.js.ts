import React, { useState } from 'react'

const UseStateComponent = () => {

    const [arr,setArr] =useState<number[]>([]);
    const [ name ,setName] = useState<null|string>(null);

const Datas = [
    {
        name:"morsalin",
        roll:5,
        class:10,
        phone:"01820348783"
    }
]

const [data,setData] = useState<typeof Datas>([])

    

    return (
        <div>
            <h3>hello</h3>
            <button onClick={()=> setArr([...arr,arr.length+1])}>Add to array</button>
            {JSON.stringify(arr.length)}
            <button onClick={()=> setName("morsalin")}>Change Name</button>
            {name}
        </div>
    )
}

export default UseStateComponent
