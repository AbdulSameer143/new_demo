import React from 'react';
import { Form } from 'react-bootstrap';
// import '../Sass/sass.scss';

class ClsFormPgm extends React.Component {
    constructor(){
      super();
      this.state ={
        user: "",
        find:"",
      }
      this.findVal = this.findVal.bind(this);
    }

    userVal=(e)=>{
      return this.setState({user:e.target.value})
    }

    findVal(e){
      return this.setState({find:e.target.value})
    }
    

    handleSubmit = (event) => {
      console.log('handleSubmit ran');
      event.preventDefault();
    }
    splitter=()=>{
     const User = this.state.user;
     const Find = this.state.find;
      if (User === "" || Find === ""){
        return alert("An empty value is not acceptable")
      }
      if (User && Find) {
        const splitted = User.split("");
        const filtered = splitted.filter((obj)=>obj === Find);
        console.log(splitted);
        console.log(splitted.reverse().join(""));
        console.log(filtered.length);
        console.log(filtered);
      }
    }


    render(){
        const Find = this.state.find;
        const User = this.state.user;
        return(
          <div>
            <Form onSubmit={this.handleSubmit}>
              <div>
                <label>Name</label>
                <input type="text" onChange={this.userVal} />
                <div><h6>{User}</h6></div>
              </div>
              <div>
                <label>Find</label>
                <input type="text" maxLength={1} onChange={this.findVal}/>
                <div><h6>{Find}</h6></div>
              </div>
              <div>
                <input type="submit" onClick={this.splitter}/>
              </div>
            </Form>
          </div>
        )
    }
  }
  export default ClsFormPgm

