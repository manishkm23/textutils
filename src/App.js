import './App.css';
import Navbar from './component/Navbar';
import React, { useState } from 'react';
// import About from './component/About';
import Textform from './component/Textform';
import Alert from './component/Alert';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },1000);
  }

  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success")
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (<>
  {/* <Router> */}
    <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <Switch>
          <Route exact path="/about"> */}
            {/* <About mode={mode}/> */}
          {/* </Route>  */}
          {/* <Route exact path="/"> */}
            <Textform heading="Enter some text below" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
        {/* </Switch> */}
  {/* </Router> */}
  </>);
}

export default App;