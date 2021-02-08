import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './loginform.css';
import Navibar from './navbar';
import axios from 'axios';

class Login extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      uname: '',
      upassword: '',
      success : false,
      errormsg: ''
    }
  }  
  setValues =(event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    
  }
  submitHandler =(event) =>  {
    event.preventDefault();
    let err = <b>Incorrect UserName or Password!!!</b>;
    const user = {
      uname : this.state.uname,
      upassword : this.state.upassword 
    };
    axios.post("http://localhost:9090/login/login",user)
      .then(response => {
        if(response.data != "fail") {
          //this.setState(this.initialState);
          console.log(response.data);
          this.setState({success: true});
          //console.log(user);
        } 
        else{
          this.setState({success: false,errormsg : err});
          console.log(response.data);
        }
      });

  }
  render()
  {
    if(this.state.success)
      return <Redirect to='/home'  />; 
    return(
      <div class="formbody">
        <div className="container" id="logincontainer">
          <div className="login-div">
            <h4>LOGIN <img src="https://www.materialui.co/materialIcons/action/lock_grey_192x192.png"alt="lock" class="lock" /></h4>
          </div>
        <div className="form-div">
          <form name="loginform"  onSubmit={this.submitHandler}>
            <div className="form-group" id="log-user">
              <input type="text" id="input-control" class="form-control" aria-describedby="emailHelp"
                placeholder="User Name" name="uname" onChange={this.setValues} required />
            </div>
            <div className="form-group">
              <input type="password" id="input-control" class="form-control" placeholder="Password" name="upassword"
              required onChange={this.setValues}/>
            </div>
            <div className="error_msg">{this.state.errormsg}</div>
            <button type="submit" className="btn btn-primary btn-block" id="button" >Login</button>
          </form>
        </div>
        </div>
      </div>      
    );
  }
}
export default Login;