// import styled from "styled-components";
import React from 'react';
import './Styles/Layout.css'
import './Styles/Style.css';
import './Styles/Navigation.css';
import './Styles/Form.css';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Expenses from './Components/Expenses/Expenses';
import Income from './Components/Income/Income';
import Dashboard from './Components/Dashboard/Dashboard';
import { useGlobalContext } from './Context/globalContext';

function App() {
  const[active,setActive] = React.useState(1)
  
  const global = useGlobalContext()
  console.log(global)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default: return <Dashboard />
    }
  }
  const orbMemo = React.useMemo(()=>{
    return <Orb className="Orb"/>
  },[])
  return (
    <div className="App">
      {orbMemo}
      <div className="MainLayout">
        <Navigation active={active} setActive={setActive}/>
        <main className='main'>
          {displayData()}
        </main>
      </div>
    </div>
  );
}
export default App;
