import React from "react";

class ButtonClickClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { buttonis: '' };
        // this.delete = this.delete.bind(this)
        this.add = this.add.bind(this)
    }
    add() {
       return this.setState({ buttonis: 'Add button' })
        
    }
    delete(){
        return this.setState({ buttonis: 'Delete button' })
        // console.log("delete button touch");
    }
    Reset(){
        return this.setState({ buttonis: '' })
       
    }
    render() {
        return (
            <div>
               
                <h3>this is ButtonClick class</h3>
                <h5 style={{height:"25px"}}>{this.state.buttonis}</h5>
                <button onClick={this.add} type="button" className="btn btn-danger btn-outline-dark btn-sm"><h6 className='font font-italic text-light'>Add</h6></button>
                <button onClick={this.Reset.bind(this)} className="btn btn-danger btn-outline-dark btn-sm"><h6 className='font font-italic text-light'>Reset</h6></button>
                <button onClick={()=>this.delete()} className="btn btn-danger btn-outline-dark btn-sm"><h6 className='font font-italic text-light'>Delete</h6></button>
            </div>
        );
    }
}
export default ButtonClickClass;