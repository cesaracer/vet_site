import React from 'react';
import Header from './Components/Common/Header';
import NotFound from './Components/Common/NotFound';
import Home from './Components/Home';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Confirmation from './Components/Confirmation';
import Staff from './Components/Staff';
import Services from './Components/Services'
import Schedule from './Components/Schedule';
import Receipt from './Components/Receipt';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/appointment" component={Schedule}/>
          <Route path="/confirm" component={Confirmation}/>
          <Route path="/receipt" component={Receipt}/>
          <Route path="/staff" component={Staff}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
