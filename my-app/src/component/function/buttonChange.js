
import React, { useState } from "react";


const ButtonChange =()=>{

   const [Button,setButton] = useState("On");
  
//first method
//    const Change = () => {
//     if(Button == 'On') {
//        return setButton(['Off']) 
//     }else{
//         return setButton(['On'])
//     }
//     }
//second method
const Change =()=>{
    return setButton(Button === 'On' ? "Off" : "On");
  
}
//or
// const Change =()=>{
//     return setButton((Button)=>Button=='On' ? "Off" : "On")
// }




        return(
            <div>
               
                <h3>this is button change program</h3>
               <button onClick={Change} type="button" className='btn btn-outline-dark btn-sm btn-primary font-italic text-light  '>
                <h6>{Button}</h6>
               </button>
            </div>
        )
    }
    
    export default ButtonChange