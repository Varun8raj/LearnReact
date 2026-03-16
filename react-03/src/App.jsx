import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {

  const [data1, setData1] = useState([]);
  const [btnvalue, setButton] = useState(0);
  useEffect(function()
  {
    console.log("useEffect is running ...  ");
  },[btnvalue])
 
  async function getData1(){
    const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response1.json();
    console.log("This is getData1 function");
    console.log(data);
  }

  async function getData2(){
    const response2 = await axios.get('https://picsum.photos/v2/list');
    console.log("This is getData2 function");
    console.log(response2.data);
    setData1(response2.data);
  }

  function changeValue()
  {
    setButton(btnvalue+1);
  }

  return (
    <div>
      <button onClick={getData1} className='m-5 bg-pink-50 p-2 font-bold text-2xl text-black'>Click me for getData1</button>
      <button onClick={getData2} className='m-5 bg-blue-300 p-2 font-bold text-2xl text-black'>Click me for getData2</button>
      <div className='flex flex-col'>
      {data1.map(function(elem,idx)
      {
        return (
          <div key={idx}>
            Hello {elem.author} {idx}
          </div>
        );
      })}
      </div>
      <div>
        <h1 className='text-3xl text-blue-700 bg-cyan-400'>Understanding useEffect</h1>
        <div className='text-5xl m-5 font-bold'>{btnvalue}</div>
        <button onClick={changeValue} className='m-3 text-xl text-black p-2 bg-amber-700'>Click me</button>
      </div>

    </div>
  )
}

export default App
