
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Food from './Pages/Food';
import Shelter from './Pages/Shelter';
import MentalHealth from './Pages/MentalHealth';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Header from './components/Header/Header';
import AboutUs from './Pages/AboutUs'
import FooterLink from './components/Footer/FooterLink'

function App() {
  return (
    <div className="app">

   <Header />
     

     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/food" exact component={Food}/>
     <Route path="/shelter" exact component={Shelter}/>
     <Route path="/mentalhealth" exact component={MentalHealth}/>
     <Route path="/aboutus" exact component={AboutUs}/>
     <Route path="/signin" exact component={SignIn}/>
     <Route path="/signup" exact component={SignUp}/>
     </Switch>
     <FooterLink/>
    </div>
  );
}

export default App;
