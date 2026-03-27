import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import { useEffect } from 'react'
import Card from './components/Card'

const App = () => {

const [Userdata, setUserData] = useState([]);
const [index, setIndex] = useState(1);
const getData = async () => {
    //console.log('Data is retrieved');
    const {data} = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserData(data);
  }


useEffect(function(){
getData();
},[index])

let printUserData = <h3 className='text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>;

if(Userdata.length > 0)
{ 
  printUserData = Userdata.map((element,idx) => {
    return (
      <div key={idx}>
        <Card elem={element}/>
      </div>
    )
  })
}
  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white'>
      {/*<button onClick= {getData} className='cursor-pointer bg-green-700 text-white rounded px-2.5 py-2 mb-2 active:scale-95'>Get Data</button>*/}
      <div className='flex h-[82%] flex-wrap gap-2 pb-2'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button style = {{opacity: index==1? 0.5 :1}}
        onClick={() => {
        if(index>1)
        {
        setIndex(index-1);
        setUserData([]);
        }
        }
        } className='cursor-pointer active:scale-95 bg-blue-300 text-black rounded px-4 py-2 font-semibold'>Prev</button>
        <h4>Page {index}</h4>
        <button onClick= {()=> {
        setIndex(index+1);
        setUserData([]);
        }}
        className='cursor-pointer active:scale-95 bg-blue-300 text-black rounded px-4 py-2 font-semibold'>Next</button>
      </div>
    </div>
  )
}

export default App