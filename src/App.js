
import React,{useState} from 'react'
import './App.css'

function App() {
  const [inputData, setInputData] = useState('')
  const [show, setShow] = useState(false)

  const handleChange = (e) => {
      setInputData(e.target.value)
  }
  return (
   <div className="App">
      <textarea placeholder='ENTER YOUR TEXT HERE' value={inputData} onChange={(e)=>handleChange(e)} className='input__box'/>
      
      <div style={{height: show?'fit-content': '100px'}} className="display__box">
        <p>{inputData}</p>
      </div>

       <button className='show__btn' onClick={()=> setShow(preVal => !preVal)}>Show More</button>
    </div>
  );
}

export default App;
