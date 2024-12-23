import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor] = useState('purple')
  const changeRed = () =>{
    color='red';
    setColor(color);
  }
  const changeBlue = () =>{
    color='blue';
    setColor(color);
  }
  const changeGreen = () =>{
    color='green';
    setColor(color);
  }
  const changePink = () =>{
    color='pink';
    setColor(color);
  }
  const changeAqua = () =>{
    color='aqua';
    setColor(color);
  }
  const changeBrown = () =>{
    color='brown';
    setColor(color);
  }
  return (
    <div className='w-full h-screen' style={{backgroundColor: color,display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}}>
      <div style={{display:'flex',justifyContent:'space-evenly',width:'70%',height:'10vh', borderRadius:'20px',backgroundColor:'beige',marginBottom:'18px'}}>
        <button style={{backgroundColor:'red'}} onClick={changeRed}>Red</button>
        <button style={{backgroundColor:'blue'}} onClick={changeBlue}>Blue</button>
        <button style={{backgroundColor:'green'}} onClick={changeGreen}>Green</button>
        <button style={{backgroundColor:'pink'}} onClick={changePink}>Pink</button>
        <button style={{backgroundColor:'aqua'}} onClick={changeAqua}>Aqua</button>
        <button style={{backgroundColor:'brown'}}onClick={changeBrown}>Brown</button>
      </div>
    </div>
  )
}

export default App



// shift + alt + f to format the code