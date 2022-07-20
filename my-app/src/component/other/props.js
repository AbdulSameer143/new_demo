import React from "react";

function Welcome(props) {
  return <h5>Hello, {props.name}</h5>;
}


function ReactProps(props) {
    return (
    <div><h3>Hello, {props.name}</h3>
    <Welcome name="Reemas" />
    <Welcome name="Roja" />
    <Welcome name="Jasmine" />
    </div>
    )
  }
  
export default ReactProps;