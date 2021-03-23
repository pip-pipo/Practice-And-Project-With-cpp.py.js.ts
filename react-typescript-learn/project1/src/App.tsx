import React, { FC, ReactElement, ReactNode } from 'react'
import './App.css'

function Heading({children}:{children:ReactNode}):ReactElement{
    return <h1>{children}</h1>
}

// type ContainerProps = {hading:ReactNode,children:ReactNode}}

// function Container({hading,children}:ContainerProps):ReactElement{
//     return <h1>{children}</h1>
// }


const App:FC = () => {
    
    return (
        <>
        <Heading> hello </Heading>
       
        </>
    )
}

export default App
