import React from 'react'

import styled from 'styled-components'


const AlertDiv=styled.div`
    background:#eee;
    /* background:#eee; */
    display:flex;
    width:400px;
    justify-content:center;
    align-items:center;
    height:50px;
    padding:2rem 2rem;
    border-radius:1rem;

    div{
        display:flex;
        justify-content:center;
    align-items:center;
    }
    button{
        padding:10px;
        margin:5px;
    }
`;



const Alert = ({isClicked,alertMsg}) => {
    const clickHandler=()=>{
       isClicked(false)
    }
    return (
        <AlertDiv>
           {isClicked? <div>
            <button onClick={clickHandler}>x</button>
            <h2>{alertMsg}</h2>
           </div> :""} 
        </AlertDiv>
    )
}

export default Alert
