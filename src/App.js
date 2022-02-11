import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import TextForms from './components/TextForms.js';
import Alert from './components/Alert';
import Footer from './components/Footer.js';
 


function App() {
  
  // whether the dark mode is on or off, default is off (false)
  const [Mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)  // this will make setAlert null after 2 second making the alert disappear
    }, 3000);
  }

  const toggleMode= () => {
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#03071e';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#edf2f4';
      showAlert("Light Mode has been enabled", "success")

    }
  }

  return (
    <>
    <Navbar title="TextUtils" aboutUs="About TextUtils" mode={Mode} toggleMode={toggleMode} /> 
    <Alert alert={alert}/>

    <div className="container my-5 mb-5"> 
      <TextForms  mode={Mode} showAlert={showAlert} />
    </div>

    <Footer mode={Mode} showAlert={showAlert} />

    </>
  );
}


export default App;
