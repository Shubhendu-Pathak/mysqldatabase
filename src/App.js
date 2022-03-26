
import './App.css';
import  {useState} from 'react'
import Axios from 'axios'
import axios from 'axios';

function App() {
  const [name,setname]=useState('')
  const [age,setage]=useState(0)
  const [country,setcountry]=useState('')
  const [position,setposition]=useState('')
  const [wage,setwage]=useState(0)

const press=()=>{
  Axios.post('http://localhost:3003/create',{
    name:name,
    age:age,
    country:country,
    position:position,
    wage:wage
  }).then(()=>{
    console.log('SUCCESS');
  })
  // console.log(name+age+country+position+wage);
}

  return (
    <div className="App">
      <label htmlFor="">NAME: <input onChange={(e)=>{setname(e.target.value)}} type="text" name="" id="" /></label>

      <label htmlFor="">AGE: <input onChange={(e)=>{setage(e.target.value)}} type="number" name="" id="" /></label>

      <label htmlFor="">COUNTRY: <input onChange={(e)=>{setcountry(e.target.value)}} type="text" name="" id="" /></label>

      <label htmlFor="">POSITION: <input onChange={(e)=>{setposition(e.target.value)}} type="text" name="" id="" /></label>

      <label htmlFor="">WAGE: <input onChange={(e)=>{setwage(e.target.value)}} type="number" name="" id="" /></label>

     <button onClick={press}>Add Employee</button>
    </div>
  );
}

export default App;
