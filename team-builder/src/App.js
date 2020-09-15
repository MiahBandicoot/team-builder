import React, {useState} from 'react';
import './App.css';
import Form from './form'

function App() {
  const [list, setList] = useState([])

  return (
    <div className="App">
     <Form list = {list} setList = {setList}/>
     {list.map(member => {
       return(
       <div>
         <h1>{member.name}</h1>
         <h2>{member.email}</h2>
         <p>{member.role}</p>
       </div>
       )
     })}
    </div>
  );
}

export default App;
