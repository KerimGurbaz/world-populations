import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import data from "./utils/data";


function App() {

  return (
    <div className="App">
   <Header/>
   <Main data={data}/>

    </div>
  );
}

export default App;
