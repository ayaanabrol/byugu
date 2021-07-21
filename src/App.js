import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router,Switch,Link} from 
"react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";


function App() {
  return (
    <Router>
    <div className="container">
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
      

</li>

<li>
<Link to="/quiz">Start</Link>
</li>


</ul>
</nav>
   
    <Switch>
    <Route path="/quiz" component={Quiz}/>

    <Route path="/"  component={Home}/>

    </Switch>
    </div>
    </Router>

  );
}

export default App;
