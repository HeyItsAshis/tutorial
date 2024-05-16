import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import { useState } from 'react';

function App() {
  const companyName = "Microsoft";
  const companyPhone = "8888888888";
  const [companyEmail, setComEmail] = useState("info@microsoft.com");

  function handleChangeEmail(){
    setComEmail("info@ms.com");
  }
  
  return (
    <Home onPress={handleChangeEmail} comName={companyName} comPhone={companyPhone} comEmail={companyEmail} />
  )
}

export default App;
