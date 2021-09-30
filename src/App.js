import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
       import {
          BrowserRouter as Router,
          Switch,
          Route,
        } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
     setTimeout(() => {
       setAlert(null);
     }, 1500);
  }

  const toggleMode = () =>{
    if(mode ==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#131337';
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
    }
    

  }
  return (
    <>
    <Router>
   
    <Navbar title="Ace" home="Home" about="About Ace" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-5 ">
     <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
  <Route exact path="/"> 
       <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            
         </Route>
        </Switch>
      </div>
     
     
      </Router> 
   
    </>
  );
}

export default App;
