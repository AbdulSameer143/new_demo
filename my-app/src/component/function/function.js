import React,{useState} from 'react';
import ButtonChange from './buttonChange';
import ButtonClickFun from './ButtonClickToPrint';
// const FunctionCom=()=> {
    function FunctionCom() {

    const Increment = () => {
        return setCount(count + 1)

    }

    function decrement() {
        return setCount(count - 1)
    }

    const Reset = () => {
        return setCount(initialValue)
    }

    const initialValue = 0;

    const [count, setCount] = useState(0);
    const id = 1 ;
    const name = 'sameer';
    const age =22 ;
    return (
        <div>
            <h3> this is function componnent</h3>
            <h5>count program</h5>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <h5>Id = {id}</h5>
                    <h5>Name = {name}</h5>
                    <h5>Age = {age}</h5>
                </div>
            <h5>Count ={count}</h5>
            <button onClick={Increment} type="button" className="btn btn-outline-dark btn-primary btn-sm">
                <h6 className="font font-italic text-light">Increment</h6>
            </button>
            <button onClick={Reset} type="button" className="btn btn-outline-dark btn-primary btn-sm">
                <h6 className="font font-italic text-light">Reset</h6>
            </button>
            <button onClick={decrement} type="button" className="btn btn-outline-dark btn-primary btn-sm">
                <h6 className="font font-italic text-light ">Decrement</h6>
            </button>
            <div>
            <ButtonClickFun/>
            </div>
            <div>
             <ButtonChange/>
            </div>
          
        </div>
    );
}



export default FunctionCom;

