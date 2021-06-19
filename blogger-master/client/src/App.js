
import './App.css';
import Navbar from './components/Navbar';
import AddInfo from './components/AddInfo';
import Informations from './components/Informations';
import Home from './components/Home';
import EditInfo from './components/EditInfo';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Navbar />


   <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={AddInfo} />
      <Route exact path="/edit/:id" component={EditInfo} />

   </Switch>


   
   
  

    </div>
  );
}

export default App;
