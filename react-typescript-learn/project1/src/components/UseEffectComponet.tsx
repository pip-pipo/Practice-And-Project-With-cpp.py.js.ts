import React, { FC,useState,useEffect } from 'react'

const UseEffectComponet:FC = () => {
    const [time,setTime] = useState<number>(1);

    useEffect(()=>{
       const timer= window.setInterval(()=>{
            setTime((v)=>v+1)
        },1000)
        return ()=> clearInterval(timer)
    })



    return (
        <div>
            {time}
        </div>
    )
}

export default UseEffectComponet
