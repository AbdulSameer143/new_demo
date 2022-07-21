import React, { Component } from "react";
import ButtonClickClass from "./buttonClickToPrint";
import ButtonClickToChange from "./buttonClickToChange";
import Clock from "./date";

class ClassCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            name: 'sameer',
            count: 0,
            initialValue:0,
            age: 22,
        };

        this.Increment = this.Increment.bind(this)
        this.Reset = this.Reset.bind(this)
        // this.Decrement = this.Decrement.bind(this)
    }
    Increment() {
       return this.setState({ count: this.state.count + 1 })
    }

    Reset=()=>{
       
        console.log("its working");
       return this.setState({count: 0 })
    }
    Decrement() {
       return this.setState({ count: this.state.count - 1 })
    }
    render() {

        return (
            <div>
                <h3> this is class component </h3>
                <h5>count program</h5>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <h5>Id = {this.state.id}</h5>
                    <h5>Name = {this.state.name}</h5>
                    <h5>Age = {this.state.age}</h5>
                </div>
                <div>
                    <h5>Count = {this.state.count}</h5>
                </div>
                <button onClick={this.Increment} type="button" className="btn btn-outline-dark btn-primary btn-sm">
                    <h6 className=" text-light ">Increment</h6>
                </button>
                <button onClick={this.Reset} type="button" className="btn btn-outline-dark btn-primary btn-sm">
                    <h6 className=" text-light ">Reset</h6>
                </button>
                <button onClick={this.Decrement.bind(this)} type="button" className="btn btn-outline-dark btn-primary btn-sm">
                    <h6 className=" text-light ">Decrement</h6>
                </button>
                <div>
                <ButtonClickClass/>
                </div>
                <div>
                <ButtonClickToChange/>
                </div>
                <div>
                    <Clock/>
                </div>
               
            </div>
        );
    }
}


export default ClassCom;
