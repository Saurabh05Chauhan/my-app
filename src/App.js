
import './App.css';
 import About from './Components/About';
 import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React ,{useState}from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
 
  Route,
  
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.background='#08023d';
      ShowAlert("success","Success: Dark Mode has been Enabled");
    }
    else{
      setMode("light");
      document.body.style.background='white';
      ShowAlert("success","Success: Dark Mode has been Disabled");
    }
  }

  const [alert, setAlert] = useState(null);

  const ShowAlert=(type,message)=>{
    setAlert({
      msg:message,
      typ:type
    })
  }

  setTimeout(() => {
    setAlert(null)
  }, 1500);
  return (
    <>
    <Router>
       <Navbar title="Text Utility" mode={mode} toggleMode={toggleMode} />
       <Alert alert={alert} />
       <div className="container my-3">
       <Routes>
          <Route path="/About" element={<About/>}>
          </Route>
          <Route path="/Contact" element={<Contact/>}>
          </Route>
          <Route path="/" element={ <TextForm heading="Enter Your Text" mode={mode} ShowAlert={ShowAlert}/>}>
          </Route>
        </Routes>
       
       </div>
    </Router> 
       
    </>
  );
}

export default App;
