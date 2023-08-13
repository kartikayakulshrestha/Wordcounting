import logo from './logo.svg';
import './App.css';

import TextForm from "./components/TextForm.js";
import Nav from "./components/Nav"

function Link(props){
  return (
    <a href="/welcome" className="href">{props.hero}</a>
  )
}
function App() {
  return (
    <>
    
    <div className="App">
        <Nav india = "Kuber"/>
        <h1> Kartikaya </h1>
        < Link hero= "Kartikaya"/>
        <div className='container'>
          <TextForm name="Enter the Text for upper casing" />
        </div>
    </div>
    </>
  );
}

export default App;
