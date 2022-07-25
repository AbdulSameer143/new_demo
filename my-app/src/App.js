//defult logo commend so its useless:
// import logo from './logo.svg';

import './App.css';
//first install {npm install react-bootstrap bootstrap}then i added few lines in import commend: 

import {Button} from 'react-bootstrap';
import { FunctionCom,ClassCom,ReactProps, ClsFormPgm,FunFormPgm} from './component';


   
     


function App() {
  return (
    <div className="App">
      <Button variant="primary" >Example Bootstrap Button</Button>
      <div className='col-12 d-flex'>
        <div className='col-6' style={{borderRight: "double"}}>
        <FunctionCom />
        <FunFormPgm/>
        </div>
        <div className='col-6'>
        <ClassCom />
        <ClsFormPgm/>
        </div>
      </div>

      <ReactProps name="'ReactProps'"/>
    </div>
  );
}
export default App;


// default app commends 
  // {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header> */}


  