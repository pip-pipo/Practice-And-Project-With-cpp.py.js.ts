import React, { FC, ReactElement, ReactNode } from 'react'
import './App.css'
import UseStateComponent from './components/UseStateComponent'
import UseEffectComponet from './components/UseEffectComponet'
import UseContextComponent from './components/UseContext';
import UseReducersComponet from './components/UseReducer';
import GetData from './components/GetData';
function Heading({children}:{children:ReactNode}):ReactElement{
    return <h1>{children}</h1>
}


const App:FC = () => {
    
    return (
        <>
        <Heading> hello </Heading>
        <h1>useState</h1>
       <UseStateComponent/>
       <h1>useEffect</h1>
       <UseEffectComponet/>
       <h1>useContext</h1>
       <UseContextComponent/>
       <h1>useReducer</h1>
       <UseReducersComponet/>
       <h4>My Learning  typescript process</h4>
       <hr></hr>
       <GetData/>
       </>
    )
}

export default App
