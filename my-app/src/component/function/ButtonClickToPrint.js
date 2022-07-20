import React,{useState} from 'react';

function ButtonClickFun() {
    const [button, setButton] = useState([''])
    const Add = () => {
        return setButton(["Add Button"])
    }
    
    const Reset = () => {
        return setButton([""])
        // console.log("reset button touch");
    }
    function Delete(){
        return setButton(["Delete Button"])
    }

    return (
        <div>

            <h3>this is ButtonClick funct</h3>
           
            <h5 style={{height:"25px"}}>{button}</h5>
            <button onClick={Add} type="button" className="btn btn-danger btn-outline-dark btn-sm"><h6 className='font font-italic text-light'>Add</h6></button>
            <button onClick={Reset} className="btn btn-danger btn-outline-dark btn-sm"><h6 className='font font-italic text-light'>Reset</h6></button>
            <button onClick={Delete} className="btn btn-danger btn-outline-dark btn-sm"><h6 className='font font-italic text-light'>Delete</h6></button>
        </div>
    );
}

export default ButtonClickFun;