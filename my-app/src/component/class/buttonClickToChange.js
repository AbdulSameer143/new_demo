import React,{ Component } from 'react';

class ButtonClickToChange extends Component{
    constructor(props) {
        super(props);
        this.state = {
            button: "On",
        }
    }
    handleChange = () => {
        this.setState({ button: this.state.button === "On" ? "Off" : "On" })
    }
    render() {
        return (
            <div>
                <h3 >THIS IS NEW CREATION</h3>
                <button onClick={this.handleChange} type="button" className="btn btn-outline-dark btn-sm btn-primary text-light"><h6>{this.state.button}</h6></button>
            </div>
        )
    }
}
export default ButtonClickToChange;