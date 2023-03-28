import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {

  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{

    setAlert(
     {
      msg: message,
      type: type
     }
    )

    setTimeout(() => {

      setAlert(null);
      
    }, 2000);

  }

  function toggleMode() {

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }
  return (
    <>
    

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
<Alert alert={alert} ></Alert>
<div className='container my-3'>
<Textform  heading="Enter your text to analyze"  mode={mode}  showAlert={showAlert}/>
 
</div>
    
    </>
  );
}

export default App;
