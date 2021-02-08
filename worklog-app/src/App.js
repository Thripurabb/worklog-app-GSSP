import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login.js';
import Home from './home.js';
import Navbar from './navbar.js';
import List from './workloglist.js';
import LogForm from './form.js';
import UserForm from './adduserform.js';

class App extends Component
{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} exact /> 
            <Route path="/home" component={Home} exact />
            <Route path="/addemp" component={UserForm} exact />
            <Route path="/workloglist/:id" component={List} exact />
            <Route path="/form/:id" component={LogForm} exact />          
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
