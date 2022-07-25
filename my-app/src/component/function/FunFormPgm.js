import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function FunFormPgm(){
  const [user, setUser] = useState('');
  const [find, setFind] = useState('');
  const UserVal = (e) => {
    return setUser(e.target.value)
  }

  const FindVal = (e) => {
    return setFind(e.target.value)
  }

  const handleSubmit = (event) => {
    console.log('handleSubmit ran');
    event.preventDefault();
  }
  const splitter = () => {

    if (user === "" || find === "") {
      return alert("An empty value is not acceptable")
    }
    if (user && find) {
      const splitted = user.split("");
      const filtered = splitted.filter((obj) => obj === find);
      console.log(splitted);
      console.log(splitted.reverse().join(""));
      console.log(filtered.length);
      console.log(filtered);
    }

  }
    return (
      <div>

        <Form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" onChange={UserVal} />
            <div><h6>{user}</h6></div>
          </div>
          <div>
            <label>Find</label>
            <input type="text" maxLength={1} onChange={FindVal} />
            <div><h6>{find}</h6></div>
          </div>
          <div>
            <input type="submit" onClick={splitter} />
          </div>
        </Form>
      </div>
    )
  }

export default FunFormPgm;
 