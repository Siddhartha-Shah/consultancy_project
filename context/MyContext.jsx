'use client';
import { createContext,useState } from "react"

const MyContext=createContext()
export default MyContext

export const Name=({children})=>{
    const[state,changeState]=useState("open")
    const toggle=()=>{
        changeState((prev)=>(prev==="close"?"open":"close"));
    };
    return <MyContext.Provider value={{state,toggle}}>
    <div style={state=="open" ? {marginLeft:"250px"} : {marginLeft:"0px"}}>{children}</div>
</MyContext.Provider>

}
