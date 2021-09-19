import { Route, Link ,  BrowserRouter as Router ,Switch} from "react-router-dom";
import Exersise1 from "./Components/Exersise1";
import Exersise2 from "./Components/Exersise2";
import Exersise3 from "./Components/Exersise3";
import Exersise4 from "./Components/Exersise4";
import "./App.css";

function App() {
  return <Router>
  <div className="App"> 
       <nav className='navbar'>
       <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/exersise1">Exersise 1</Link>
          </li>
          <li>
            <Link to="/exersise2">Exersise 2</Link>
          </li>
          <li>
            <Link to="/exersise3">Exersise 3 </Link>
          </li>
          <li>
            <Link to="/exersise4">Exersise 4</Link>
          </li>
        </ul>
       </nav>
  </div>
  
  <Switch>
          <Route exact path="/">
            <div className='conatiner'>
              <h2> Hello From Home </h2>
            </div>
             </Route>
          <Route exact path="/exersise1">
           <Exersise1 />
          </Route>
          <Route exact path="/exersise2">
          <Exersise2/>
          </Route>
          <Route exact path="/exersise3">
          <Exersise3/>
          </Route>
          <Route exact path="/exersise4">
          <Exersise4 />
          </Route>

        </Switch>

  </Router>;
}

export default App;
