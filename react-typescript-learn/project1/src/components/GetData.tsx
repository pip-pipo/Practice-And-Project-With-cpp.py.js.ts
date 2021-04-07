import React,{FC, useState} from 'react'
import { useEffect } from 'react';
import datas from './Data'

const GetData:FC = () => {
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
      
        </div>
    )
}

export default GetData
