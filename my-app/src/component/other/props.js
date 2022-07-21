import React from "react";

function WelcomeFun(props) {
  return <h5>Hello, {props.name}</h5>;
}

// class WelcomeCls extends React.Component{

//   render(){
//     return(
//       <div>
//         <h1>Hello{"'this.props.nmae'"}
//         </h1>
//       </div>
//     )
//   }
// }



function ReactProps(props) {
  const name = "shab";
    return (
    <div><h3>Hello, {props.name}</h3>
    <WelcomeFun name="Reemas" />
    <WelcomeFun name={name} />
    <WelcomeFun name="Jasmine" />
    </div>
    )
  }
  
export default ReactProps;