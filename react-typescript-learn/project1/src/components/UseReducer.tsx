import { useReducer } from "react";

const initialState = {
    counter:0,
};


type ACTIONTYPES = | {type:"increment";payload:number;} | {type:"decrement"; payload:number;};

function CounterReducers(state:typeof initialState,action:ACTIONTYPES){
    switch(action.type){
        case "increment":
            return{
                ...state,counter:state.counter+action.payload
            };
        case "decrement":
            return {
                ...state,counter:state.counter-action.payload
            };
        default :
            throw new Error("Bad Action");
    }
}


function UseReducersComponet(){
    const [state,dispatch] = useReducer(CounterReducers,initialState)

    return(
        <div>
            <div>
                {state.counter}
                <button onClick={()=> dispatch({type:"increment",payload:1})}>INcrement</button>
                <button onClick={()=> dispatch({type:"decrement",payload:1})}>Decrement</button>
            
            </div>
        </div>
    )
}

export default UseReducersComponet